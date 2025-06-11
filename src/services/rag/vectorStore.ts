import { Document } from './documentLoader';
import { pipeline } from '@xenova/transformers';

// Simple in-memory vector store
export class VectorStore {
  private documents: Document[] = [];
  private embeddings: number[][] = [];
  private embedder: any;
  
  constructor() {
    // Initialize the embedder asynchronously when the class is instantiated
    this.initializeEmbedder();
  }
  
  private async initializeEmbedder() {
    try {
      // Use a small, efficient embedding model
      this.embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    } catch (error) {
      console.error('Error initializing embedding model:', error);
    }
  }
  
  async addDocuments(documents: Document[]): Promise<void> {
    // Wait for embedder to be initialized
    if (!this.embedder) {
      await this.waitForEmbedder();
    }
    
    for (const doc of documents) {
      try {
        const embedding = await this.createEmbedding(doc.content);
        this.documents.push(doc);
        this.embeddings.push(embedding);
      } catch (error) {
        console.error('Error embedding document:', error);
      }
    }
  }
  
  private async waitForEmbedder(maxAttempts = 10): Promise<void> {
    let attempts = 0;
    
    while (!this.embedder && attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      attempts++;
    }
    
    if (!this.embedder) {
      throw new Error('Embedder failed to initialize');
    }
  }
  
  private async createEmbedding(text: string): Promise<number[]> {
    try {
      const result = await this.embedder(text, { pooling: 'mean', normalize: true });
      return Array.from(result.data);
    } catch (error) {
      console.error('Error creating embedding:', error);
      return [];
    }
  }
  
  async similaritySearch(query: string, k: number = 3): Promise<Document[]> {
    if (this.documents.length === 0) {
      return [];
    }
    
    try {
      const queryEmbedding = await this.createEmbedding(query);
      
      // Calculate cosine similarity between query and all documents
      const similarities = this.embeddings.map(embedding => 
        this.cosineSimilarity(queryEmbedding, embedding)
      );
      
      // Get indices of top k most similar documents
      const topIndices = this.getTopIndices(similarities, k);
      
      // Return top k documents
      return topIndices.map(index => this.documents[index]);
    } catch (error) {
      console.error('Error in similarity search:', error);
      return [];
    }
  }
  
  private cosineSimilarity(a: number[], b: number[]): number {
    if (a.length !== b.length) {
      throw new Error('Vectors must have the same dimensions');
    }
    
    let dotProduct = 0;
    let aMagnitude = 0;
    let bMagnitude = 0;
    
    for (let i = 0; i < a.length; i++) {
      dotProduct += a[i] * b[i];
      aMagnitude += a[i] * a[i];
      bMagnitude += b[i] * b[i];
    }
    
    aMagnitude = Math.sqrt(aMagnitude);
    bMagnitude = Math.sqrt(bMagnitude);
    
    const denominator = aMagnitude * bMagnitude;
    
    if (denominator === 0) {
      return 0;
    }
    
    return dotProduct / denominator;
  }
  
  private getTopIndices(values: number[], k: number): number[] {
    return values
      .map((value, index) => ({ value, index }))
      .sort((a, b) => b.value - a.value)
      .slice(0, k)
      .map(item => item.index);
  }
}
