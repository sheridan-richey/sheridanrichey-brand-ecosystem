#!/usr/bin/env node

/**
 * @deprecated No longer needed. Blog content is read directly from content/blog/
 * via website/lib/posts.ts (gray-matter). Do not use this script for new workflows.
 *
 * Content Sync Script for Sheridan Richey Brand Ecosystem
 * Previously synced content from the hub to website/posts for Contentlayer.
 */

const fs = require('fs');
const path = require('path');

console.log('🔄 Syncing content from hub to website...\n');

const contentHubPath = path.join(process.cwd(), 'content', 'blog');
const websitePostsPath = path.join(process.cwd(), 'website', 'posts');

// Ensure directories exist
if (!fs.existsSync(contentHubPath)) {
  console.error('❌ Content hub not found. Creating...');
  fs.mkdirSync(contentHubPath, { recursive: true });
}

if (!fs.existsSync(websitePostsPath)) {
  console.error('❌ Website posts directory not found. Creating...');
  fs.mkdirSync(websitePostsPath, { recursive: true });
}

// Function to sync content from hub to website
function syncContent() {
  const categories = ['zen', 'act', 'gem'];
  let syncedCount = 0;
  
  categories.forEach(category => {
    const categoryHubPath = path.join(contentHubPath, category);
    const categoryWebsitePath = path.join(websitePostsPath, category);
    
    // Create category directories if they don't exist
    if (!fs.existsSync(categoryHubPath)) {
      fs.mkdirSync(categoryHubPath, { recursive: true });
    }
    
    if (!fs.existsSync(categoryWebsitePath)) {
      fs.mkdirSync(categoryWebsitePath, { recursive: true });
    }
    
    // Read files from hub
    if (fs.existsSync(categoryHubPath)) {
      const files = fs.readdirSync(categoryHubPath);
      
      files.forEach(file => {
        if (file.endsWith('.md') || file.endsWith('.mdx')) {
          const sourcePath = path.join(categoryHubPath, file);
          const destPath = path.join(websitePostsPath, file);
          
          // Copy file to website
          fs.copyFileSync(sourcePath, destPath);
          console.log(`✅ Synced: ${category}/${file}`);
          syncedCount++;
        }
      });
    }
  });
  
  return syncedCount;
}

// Function to validate content structure
function validateContent() {
  console.log('\n🔍 Validating content structure...');
  
  const categories = ['zen', 'act', 'gem'];
  let validCount = 0;
  
  categories.forEach(category => {
    const categoryPath = path.join(websitePostsPath);
    
    if (fs.existsSync(categoryPath)) {
      const files = fs.readdirSync(categoryPath);
      
      files.forEach(file => {
        if (file.endsWith('.md') || file.endsWith('.mdx')) {
          const filePath = path.join(categoryPath, file);
          const content = fs.readFileSync(filePath, 'utf8');
          
          // Check for required frontmatter
          if (content.includes('---') && 
              content.includes('title:') && 
              content.includes('date:')) {
            console.log(`✅ Valid: ${file}`);
            validCount++;
          } else {
            console.log(`⚠️  Missing frontmatter: ${file}`);
          }
        }
      });
    }
  });
  
  return validCount;
}

try {
  // Sync content
  const syncedCount = syncContent();
  
  // Validate content
  const validCount = validateContent();
  
  console.log(`\n🎉 Content sync complete!`);
  console.log(`📊 Synced ${syncedCount} files`);
  console.log(`✅ Validated ${validCount} files`);
  
  console.log('\n📝 Next steps:');
  console.log('1. Review synced content in website/posts/');
  console.log('2. Start development server: npm run dev');
  console.log('3. Preview content at http://localhost:3000');
  
} catch (error) {
  console.error('❌ Content sync failed:', error.message);
  process.exit(1);
} 