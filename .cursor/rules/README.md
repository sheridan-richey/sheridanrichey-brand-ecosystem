# Cursor Rules - Sheridan Richey Brand Ecosystem

## Overview
This directory contains Cursor rules that guide AI assistance for the Sheridan Richey brand ecosystem project. Rules are organized to avoid redundancy and provide clear guidance for different aspects of development.

## Rule Structure

### 🎯 **Core Rules (Always Applied)**
- **[core-standards.mdc](mdc:.cursor/rules/core-standards.mdc)** - Essential development standards, ZAG Matrix framework, and technical requirements

### 📁 **Context-Specific Rules**
- **[para-system.mdc](mdc:.cursor/rules/para-system.mdc)** - Project organization, PARA system, and project management standards
- **[nextjs-architecture.mdc](mdc:.cursor/rules/nextjs-architecture.mdc)** - Next.js structure, components, and technical implementation (applies to website files)
- **[testing-deployment.mdc](mdc:.cursor/rules/testing-deployment.mdc)** - Testing standards and deployment workflows (applies to test and deployment files)
- **[content-strategy.mdc](mdc:.cursor/rules/content-strategy.mdc)** - Content creation, ZAG Matrix integration, and content management (applies to content files)
- **[script-automation.mdc](mdc:.cursor/rules/script-automation.mdc)** - Automation scripts and deployment tools (applies to script files)

### 🔧 **Specialized Rules**
- **[collaboration-standards.mdc](mdc:.cursor/rules/collaboration-standards.mdc)** - Team collaboration and project handoff processes
- **[ci-cd-workflow.mdc](mdc:.cursor/rules/ci-cd-workflow.mdc)** - CI/CD pipeline and deployment workflows
- **[vercel-config-location.mdc](mdc:.cursor/rules/vercel-config-location.mdc)** - Vercel configuration and deployment settings

## How Rules Work Together

### **No Redundancy**
- Each rule covers a specific domain without overlap
- Core standards are referenced by specialized rules
- File-specific rules apply only to relevant file types

### **Progressive Enhancement**
- Core standards provide foundation knowledge
- Specialized rules add domain-specific guidance
- Context-specific rules apply automatically based on file types

### **Consistent Standards**
- All rules align with ZAG Matrix framework
- Technical standards are consistent across rules
- Brand guidelines are integrated throughout

## Usage Guidelines

### **For AI Assistants**
1. **Always apply core standards** for any request
2. **Use context-specific rules** based on file types being worked with
3. **Reference specialized rules** for specific domains (collaboration, deployment, etc.)
4. **Maintain consistency** across all guidance

### **For Developers**
1. **Follow core standards** for all development work
2. **Use PARA system** for project organization
3. **Apply technical standards** from relevant rules
4. **Maintain brand consistency** throughout

## Rule Maintenance

### **When to Update Rules**
- New technical standards are established
- Project structure changes
- Brand guidelines evolve
- New tools or processes are adopted

### **How to Update Rules**
1. Identify the specific rule that needs updating
2. Make targeted changes to avoid redundancy
3. Test rule effectiveness with AI assistance
4. Update this README if rule structure changes

## Current Project Status
- **Tech stack**: Next.js 14, TypeScript, Tailwind, custom content pipeline (gray-matter, `content/blog/`), Vercel
- **Content**: Single source of truth in `content/blog/` (zen, act, gem, zag); blog images in `website/public/images/blog/<post-slug>/`
- **Conversion**: Newsletter (The ZAG Navigator) via Beehiiv; lead magnet (Prompt Architect's Toolkit) at `/downloads/prompt-architects-toolkit`
- **Next priority**: Add PDF to `website/public/downloads/prompt-architects-toolkit.pdf`; run E2E locally and in CI as needed

---

**Last Updated**: 2026-03-01  
**Status**: Brand launch refinement plan executed (Phases 0–7)
