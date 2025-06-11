import { Document, loadDocuments, splitDocuments } from './documentLoader';
import { VectorStore } from './vectorStore';

export interface RagResult {
  relevantDocuments: Document[];
  enhancedPrompt: string;
}

class RagService {
  private vectorStore: VectorStore;
  private isInitialized: boolean = false;
  private isInitializing: boolean = false;

  constructor() {
    this.vectorStore = new VectorStore();
  }

  /**
   * Initialize the RAG service by loading documents from the public folder
   */
  async initialize(): Promise<void> {
    if (this.isInitialized || this.isInitializing) {
      return;
    }
    
    try {
      this.isInitializing = true;
      console.log('Initializing RAG service...');
      
      // Load documents from public folder
      const documents = await loadDocuments();
      console.log(`Loaded ${documents.length} documents from public folder`);
      
      // Split documents into smaller chunks
      const chunks = splitDocuments(documents);
      console.log(`Split into ${chunks.length} chunks for better retrieval`);
      
      // Add document chunks to vector store
      await this.vectorStore.addDocuments(chunks);
      
      this.isInitialized = true;
      console.log('RAG service initialized successfully');
    } catch (error) {
      console.error('Error initializing RAG service:', error);
    } finally {
      this.isInitializing = false;
    }
  }

  /**
   * Get the initialization status of the RAG service
   */
  getStatus(): { initialized: boolean; initializing: boolean } {
    return {
      initialized: this.isInitialized,
      initializing: this.isInitializing
    };
  }

  /**
   * Enhance a user query with relevant document content
   */
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
        contextString += `[Document ${index + 1} from ${doc.metadata.source}]:\n${doc.content}\n\n`;
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

// Export a singleton instance of the RAG service
export const ragService = new RagService();
