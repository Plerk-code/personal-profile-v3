// Node.js script to process documents into JSON format for browser consumption
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

// Get current file and directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Process a markdown file into chunks
 */
function processMarkdownFile(filePath, fileName) {
  console.log(`Processing markdown file: ${filePath}`);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Split content into sections by headers
  const sections = [];
  const lines = content.split('\n');
  let currentSection = { title: 'Intro', content: '', metadata: { source: fileName, type: 'markdown' } };
  
  for (const line of lines) {
    // If we encounter a heading, start a new section
    if (line.startsWith('# ') || line.startsWith('## ') || line.startsWith('### ')) {
      // Save the previous section if it has content
      if (currentSection.content.trim()) {
        sections.push(currentSection);
      }
      // Start a new section with this heading as the title
      currentSection = { 
        title: line.replace(/^#+ /, ''), 
        content: line + '\n',
        metadata: { source: fileName, type: 'markdown' }
      };
    } else {
      // Add line to current section
      currentSection.content += line + '\n';
    }
  }
  
  // Add the last section
  if (currentSection.content.trim()) {
    sections.push(currentSection);
  }
  
  return sections;
}

/**
 * Main function to process all documents and save to JSON
 */
async function processAllDocuments() {
  const publicPath = path.join(__dirname, '..', 'public');
  const outputPath = path.join(publicPath, 'data');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }
  
  const processedDocs = [];
  
  // Process markdown documents
  const markdownFiles = fs.readdirSync(publicPath)
    .filter(file => file.endsWith('.md'));
  
  for (const file of markdownFiles) {
    const filePath = path.join(publicPath, file);
    const chunks = processMarkdownFile(filePath, file);
    processedDocs.push(...chunks);
  }
  
  // Save to JSON file
  fs.writeFileSync(
    path.join(outputPath, 'cv-content.json'), 
    JSON.stringify(processedDocs, null, 2), 
    'utf-8'
  );
  
  console.log(`Processed ${processedDocs.length} document chunks`);
  console.log(`Output saved to ${path.join(outputPath, 'cv-content.json')}`);
}

processAllDocuments().catch(console.error);
