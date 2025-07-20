#!/usr/bin/env node

/**
 * Sheridan Richey Brand Ecosystem Setup Script
 * 
 * This script helps set up the complete Sheridan Richey brand ecosystem
 * including the website, content hub, and professional profiles.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Setting up Sheridan Richey Brand Ecosystem...\n');

// Check if we're in the right directory
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error('❌ Error: package.json not found. Please run this script from the sheridanrichey-brand-ecosystem root directory.');
  process.exit(1);
}

// Check if website directory exists
const websitePath = path.join(process.cwd(), 'website');
if (!fs.existsSync(websitePath)) {
  console.error('❌ Error: website directory not found. Please ensure the project structure is correct.');
  process.exit(1);
}

try {
  console.log('📦 Installing root dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('\n🌐 Installing website dependencies...');
  execSync('cd website && npm install', { stdio: 'inherit' });
  
  console.log('\n✅ Dependencies installed successfully!');
  
  console.log('\n📁 Project structure created:');
  console.log('├── website/           # sheridanrichey.com (Next.js)');
  console.log('├── github-profile/    # GitHub profile (@sheridanrichey)');
  console.log('├── content/           # Centralized content hub');
  console.log('├── assets/            # Global brand assets');
  console.log('├── professional-roles/ # Role management guidelines');
  console.log('├── templates/         # Cross-platform templates');
  console.log('├── projects/          # Other brand projects');
  console.log('├── tools/             # Brand management tools');
  console.log('└── docs/              # Documentation');
  
  console.log('\n🎯 Next steps:');
  console.log('1. Start development server: npm run dev');
  console.log('2. Create GitHub repository: git init && git remote add origin https://github.com/sheridan-richey/sheridanrichey-brand-ecosystem.git');
  console.log('3. Add your brand assets to assets/logos/');
  console.log('4. Update professional role details in professional-roles/');
  console.log('5. Create content in content/blog/');
  
  console.log('\n🌟 Brand Ecosystem ready for development!');
  
} catch (error) {
  console.error('❌ Setup failed:', error.message);
  process.exit(1);
} 