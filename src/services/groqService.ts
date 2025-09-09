import { useState, useEffect } from 'react';
import { browserRagService } from './rag/browserRagService';

export interface Message {
  type: 'user' | 'bot';
  message: string;
}

interface ChatCompletionRequest {
  messages: {
    role: 'system' | 'user' | 'assistant';
    content: string;
  }[];
  model: string;
}

interface ChatCompletionResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export const useGroqChat = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ragStatus, setRagStatus] = useState<{ initialized: boolean; initializing: boolean }>({ initialized: false, initializing: false });

  // Initialize browser RAG service when the hook is first used
  useEffect(() => {
    const initializeRag = async () => {
      try {
        await browserRagService.initialize();
        setRagStatus(browserRagService.getStatus());
      } catch (err) {
        console.error('Failed to initialize browser RAG service:', err);
      }
    };
    
    initializeRag();
  }, []);

  const sendMessage = async (
    messages: Message[], 
    systemMessage = `You are Benjamin Hinson's AI assistant. Answer questions about Benjamin's professional experience, skills, and background.

- Benjamin Hinson has over two decades of experience spanning marketing, entrepreneurship, and technology
- He has evolved from traditional business roles into a technology-focused leader specializing in AI implementation and digital transformation
- Previous roles include Delivery Lead at AXA (2022-2023)
- Education includes BCOMM Honors Information Technology from University of Johannesburg (2017-2019)
- Core competencies: AI Strategy, Prototype Development, Enterprise Architecture, Project Management, Digital Transformation, and Leadership
- Certifications: Business Leadership, TOGAF, Agile Scrum Master, ITIL, and COBIT

Provide concise, informative answers about Benjamin's background, experience, skills, and accomplishments. Be helpful, professional, and focus on highlighting Benjamin's expertise in technology, AI, and digital transformation.`
  ): Promise<Message> => {
    setLoading(true);
    setError(null);
    
    try {
      // Convert our messages format to Groq's expected format
      // Get the last user message to enhance with RAG
      const lastUserMessage = messages.length > 0 && messages[messages.length - 1].type === 'user' 
        ? messages[messages.length - 1].message 
        : '';
      
      let enhancedSystemMessage = systemMessage;
      
      // Only enhance with RAG if it's initialized and we have a user message
      if (ragStatus.initialized && lastUserMessage) {
        try {
          console.log('Enhancing query with browser RAG:', lastUserMessage);
          const { enhancedPrompt, relevantDocuments } = await browserRagService.enhanceQuery(lastUserMessage);
          
          // Use the enhanced system message that includes relevant documents
          enhancedSystemMessage = systemMessage + '\n\n' + enhancedPrompt;
          
          console.log(`Retrieved ${relevantDocuments.length} relevant documents for query`);
        } catch (err) {
          console.error('Error using RAG to enhance query:', err);
          // Continue with normal systemMessage if RAG fails
        }
      }
      
      const groqMessages = [
        {
          role: 'system' as const,
          content: enhancedSystemMessage
        },
        ...messages.map(msg => ({
          role: (msg.type === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
          content: msg.message
        }))
      ];
      
      const requestBody: ChatCompletionRequest = {
        messages: groqMessages,
        model: "llama-3.1-8b-instant"
      };
      
      // Debug: Check if API key is available
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;
      console.log('GROQ API Key available:', !!apiKey);
      console.log('API Key length:', apiKey ? apiKey.length : 0);
      
      if (!apiKey) {
        throw new Error('GROQ API key is not configured. Please check environment variables.');
      }
      
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(requestBody)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to get response from Groq API');
      }
      
      const data: ChatCompletionResponse = await response.json();
      
      return {
        type: 'bot',
        message: data.choices[0].message.content
      };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      console.error('Groq API error:', errorMessage);
      return {
        type: 'bot',
        message: `Sorry, I encountered an error connecting to the AI service: ${errorMessage}`
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    sendMessage,
    loading,
    error
  };
};
