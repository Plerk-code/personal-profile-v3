import { useState, useEffect } from 'react';

export interface Document {
  title: string;
  content: string;
  metadata: {
    source: string;
    type: string;
  };
}

// Simple in-memory vector store using cosine similarity
class BrowserVectorStore {
  private documents: Document[] = [];
  private embeddings: Record<string, number[]> = {};
  private encoder: TextEncoder = new TextEncoder();

  constructor() {}

  async addDocuments(documents: Document[]): Promise<void> {
    for (const doc of documents) {
      try {
        // Generate a simple numeric representation of the text
        // This is a very basic alternative to proper embeddings
        const embedding = await this.createSimpleEmbedding(doc.content);
        this.documents.push(doc);
        this.embeddings[doc.title] = embedding;
      } catch (error) {
        console.error('Error processing document:', error);
      }
    }
  }

  private async createSimpleEmbedding(text: string): Promise<number[]> {
    // A very simple "embedding" - just creates a frequency vector of character codes
    // This is NOT a proper embedding, just a placeholder for demo purposes
    const buffer = this.encoder.encode(text.toLowerCase());
    const freqMap: Record<number, number> = {};
    
    // Count character frequencies
    for (const byte of buffer) {
      freqMap[byte] = (freqMap[byte] || 0) + 1;
    }
    
    // Convert to vector (use ascii range)
    const vector = Array(128).fill(0);
    for (let i = 0; i < 128; i++) {
      vector[i] = freqMap[i] || 0;
    }
    
    // Normalize the vector
    const magnitude = Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0));
    return vector.map(val => magnitude ? val / magnitude : 0);
  }

  async similaritySearch(query: string, k: number = 3): Promise<Document[]> {
    if (this.documents.length === 0) {
      return [];
    }
    
    try {
      const queryEmbedding = await this.createSimpleEmbedding(query);
      
      // Calculate cosine similarity between query and all documents
      const similarities = Object.entries(this.embeddings).map(([title, embedding]) => ({
        title,
        similarity: this.cosineSimilarity(queryEmbedding, embedding)
      }));
      
      // Sort by similarity (descending)
      similarities.sort((a, b) => b.similarity - a.similarity);
      
      // Get top k documents
      const topK = similarities.slice(0, k);
      
      return topK.map(item => 
        this.documents.find(doc => doc.title === item.title)!
      ).filter(Boolean);
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
}

export interface RagResult {
  relevantDocuments: Document[];
  enhancedPrompt: string;
}

export class BrowserRagService {
  private vectorStore: BrowserVectorStore;
  private isInitialized: boolean = false;
  private isInitializing: boolean = false;

  constructor() {
    this.vectorStore = new BrowserVectorStore();
  }

  async initialize(): Promise<void> {
    if (this.isInitialized || this.isInitializing) {
      return;
    }
    
    try {
      this.isInitializing = true;
      console.log('Initializing Browser RAG service...');
      
      // Fetch pre-processed documents from public folder
      const response = await fetch('/data/cv-content.json');
      if (!response.ok) {
        throw new Error('Failed to load CV content');
      }
      
      const documents: Document[] = await response.json();
      console.log(`Loaded ${documents.length} document chunks`);
      
      // Add documents to vector store
      await this.vectorStore.addDocuments(documents);
      
      this.isInitialized = true;
      console.log('Browser RAG service initialized successfully');
    } catch (error) {
      console.error('Error initializing Browser RAG service:', error);
    } finally {
      this.isInitializing = false;
    }
  }

  getStatus(): { initialized: boolean; initializing: boolean } {
    return {
      initialized: this.isInitialized,
      initializing: this.isInitializing
    };
  }

  async enhanceQuery(query: string): Promise<RagResult> {
    // Make sure the service is initialized
    if (!this.isInitialized) {
      await this.initialize();
    }
    
    // Retrieve relevant document chunks
    const relevantDocuments = await this.vectorStore.similaritySearch(query, 3);
    
    // Format relevant documents into a context string
    let contextString = '';
    if (relevantDocuments.length > 0) {
      contextString = 'Here is some relevant information from Benjamin Hinson\'s profile that may help answer this question:\n\n';
      
      relevantDocuments.forEach((doc, index) => {
        contextString += `[Document ${index + 1} - ${doc.title} from ${doc.metadata.source}]:\n${doc.content}\n\n`;
      });
    }
    
    // Create enhanced prompt with retrieved context
    const enhancedPrompt = `${contextString}
User Question: ${query}

Please answer the user's question about Benjamin Hinson based on the information provided above. If the relevant information is not in the provided context, use your general knowledge about Benjamin Hinson but make it clear what information comes from his profile documents and what might be general knowledge.`;
    
    return {
      relevantDocuments,
      enhancedPrompt
    };
  }
}

// Hook for using RAG in React components
export const useBrowserRag = () => {
  const [ragService] = useState(new BrowserRagService());
  const [status, setStatus] = useState({ initialized: false, initializing: false });

  useEffect(() => {
    const initializeRag = async () => {
      await ragService.initialize();
      setStatus(ragService.getStatus());
    };
    
    initializeRag();
  }, [ragService]);

  return {
    status,
    enhanceQuery: async (query: string) => {
      return ragService.enhanceQuery(query);
    }
  };
};

// Export singleton instance for direct import
export const browserRagService = new BrowserRagService();
