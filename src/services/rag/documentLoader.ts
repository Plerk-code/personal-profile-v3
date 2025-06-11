import fs from 'fs';
import path from 'path';
import pdfParse from 'pdf-parse';

export interface Document {
  content: string;
  metadata: {
    source: string;
    type: string;
    chunk?: number; // Add optional chunk property for chunked documents
  };
}

/**
 * Load and process documents from the public folder
 */
export async function loadDocuments(): Promise<Document[]> {
  const publicPath = path.join(process.cwd(), 'public');
  const documents: Document[] = [];
  
  try {
    const files = fs.readdirSync(publicPath);
    
    for (const file of files) {
      const filePath = path.join(publicPath, file);
      const fileStats = fs.statSync(filePath);
      
      if (fileStats.isFile()) {
        const fileExtension = path.extname(file).toLowerCase();
        
        if (fileExtension === '.pdf') {
          // Process PDF files
          const pdfBuffer = fs.readFileSync(filePath);
          const pdfData = await pdfParse(pdfBuffer);
          
          documents.push({
            content: pdfData.text,
            metadata: {
              source: file,
              type: 'pdf'
            }
          });
        } else if (fileExtension === '.md') {
          // Process Markdown files
          const mdContent = fs.readFileSync(filePath, 'utf-8');
          
          documents.push({
            content: mdContent,
            metadata: {
              source: file,
              type: 'markdown'
            }
          });
        }
      }
    }
  } catch (error) {
    console.error('Error loading documents:', error);
  }
  
  return documents;
}

/**
 * Split documents into smaller chunks for better retrieval
 */
export function splitDocuments(documents: Document[], chunkSize: number = 1000, overlap: number = 200): Document[] {
  const chunks: Document[] = [];
  
  for (const doc of documents) {
    const content = doc.content;
    const source = doc.metadata.source;
    const type = doc.metadata.type;
    
    // If content is shorter than chunk size, keep it as is
    if (content.length <= chunkSize) {
      chunks.push(doc);
      continue;
    }
    
    // Split into overlapping chunks
    let startIndex = 0;
    let chunkIndex = 0;
    
    while (startIndex < content.length) {
      const endIndex = Math.min(startIndex + chunkSize, content.length);
      const chunkContent = content.substring(startIndex, endIndex);
      
      chunks.push({
        content: chunkContent,
        metadata: {
          source,
          type,
          chunk: chunkIndex++
        }
      });
      
      startIndex += chunkSize - overlap;
      if (startIndex >= content.length) break;
    }
  }
  
  return chunks;
}
