# Cursor Collaboration Strategy for Team Development

## 🎯 Overview

This document outlines how to maximize Cursor's effectiveness when collaborating with Sean Hokanson on the Sheridan Richey brand ecosystem project.

## 🚀 Cursor-Specific Collaboration Features

### 1. **AI-Powered Code Reviews**
- **Use Cursor's built-in code review capabilities**
- **Benefits:**
  - Instant feedback on code quality
  - Consistency with project standards
  - Catch potential issues before PR submission
  - Maintain ZAG Matrix alignment in code

### 2. **Shared AI Context**
- **Create shared `.cursorrules` file** for consistent AI behavior
- **Benefits:**
  - Both team members get same AI assistance
  - Consistent code style and patterns
  - Shared understanding of project goals
  - Brand voice consistency

### 3. **Real-time Collaboration**
- **Use Cursor's multiplayer features** (if available)
- **Alternative: Live Share or similar tools**
- **Benefits:**
  - Pair programming sessions
  - Real-time problem solving
  - Knowledge transfer
  - Faster iteration cycles

## 📋 Recommended Cursor Setup for Team

### Shared Configuration Files

#### `.cursorrules` (Project Root)
```markdown
# Sheridan Richey Brand Ecosystem - Team Rules

## Project Context
- Building personal brand website for Sheridan Richey
- Target audience: "Alex, the Awakened Technologist"
- Core framework: ZAG Matrix (ZEN, ACT, GEM)
- Tech stack: Next.js, TypeScript, Tailwind CSS, MDX

## Code Standards
- Use TypeScript strict mode
- Follow Next.js 13+ App Router patterns
- Implement responsive design with Tailwind
- Write self-documenting code with clear comments
- Include JSDoc comments for complex functions

## Brand Guidelines
- All content must connect to ZAG Matrix framework
- Professional but approachable tone
- Focus on actionable insights
- Include specific examples from Sheridan's career
- Maintain visual consistency with brand assets

## File Organization
- Components in `/website/components/`
- Pages in `/website/app/`
- Blog posts in `/website/posts/`
- Content in `/content/` directory
- Tests in `/tests/` directory

## Naming Conventions
- Components: PascalCase (e.g., `ZagMatrixSidebar.tsx`)
- Files: kebab-case (e.g., `zag-matrix-page.tsx`)
- Functions: camelCase (e.g., `handleNewsletterSignup`)
- Constants: UPPER_SNAKE_CASE (e.g., `ZAG_MATRIX_PILLARS`)

## Testing Requirements
- Write E2E tests for critical user flows
- Test responsive design on multiple screen sizes
- Ensure accessibility compliance
- Validate brand consistency in UI components
```

#### `.vscode/settings.json` (Shared Workspace Settings)
```json
{
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "typescript.preferences.importModuleSpecifier": "relative",
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  },
  "files.associations": {
    "*.mdx": "markdown"
  },
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

#### `.vscode/extensions.json` (Recommended Extensions)
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-json",
    "yzhang.markdown-all-in-one",
    "eamodio.gitlens",
    "ms-vscode.vscode-eslint"
  ]
}
```

## 🔄 Team Workflow with Cursor

### 1. **Asynchronous Development Cycle**

#### When Starting Work (Both Team Members)
```bash
# Pull latest changes
git pull origin test-playwright-workflow

# Start development server
cd website && npm run dev

# Open Cursor with project
cursor .
```

#### During Development
- **Use Cursor's AI for:**
  - Code generation and refactoring
  - Bug fixing suggestions
  - Performance optimization
  - Accessibility improvements
  - Brand consistency checks

#### Before Committing
- **Run Cursor's built-in review:**
  - Ask AI to review code changes
  - Check for ZAG Matrix alignment
  - Validate brand voice consistency
  - Ensure responsive design

### 2. **Code Review Process**

#### Using Cursor for Reviews
1. **Open PR in Cursor**
2. **Use AI to analyze changes:**
   ```
   /review This PR implements the new newsletter signup feature. 
   Please check for brand consistency, accessibility, and ZAG Matrix alignment.
   ```
3. **Address AI suggestions before requesting human review**

#### Review Checklist
- [ ] Code follows project standards
- [ ] ZAG Matrix framework is properly integrated
- [ ] Brand voice is consistent
- [ ] Responsive design works on all screen sizes
- [ ] Accessibility requirements are met
- [ ] Tests are included and passing

### 3. **Asynchronous Collaboration Sessions**

#### Setup for Independent Work
1. **Use Cursor's AI features** for guidance and suggestions
2. **Create detailed GitHub Issues** for tracking progress
3. **Use AI as a development partner:**
   - Ask for suggestions during development
   - Get instant feedback on approaches
   - Validate solutions against project goals

#### Work Session Structure
- **Planning**: Create GitHub Issue with clear requirements
- **Development**: Work independently with AI assistance
- **Review**: Submit PR with detailed description
- **Feedback**: Async review and iteration

## 🎨 Content Creation Workflow

### 1. **Blog Post Development**
```bash
# Create new post
cd website/posts
# Use Cursor AI to generate initial structure
```

#### AI Prompt for Blog Posts
```
Create a blog post about [topic] that:
- Connects to the ZAG Matrix framework
- Speaks to "Alex, the Awakened Technologist"
- Includes specific examples from Sheridan's career
- Provides actionable insights
- Uses professional but approachable tone
```

### 2. **Component Development**
```bash
# Create new component
cd website/components
# Use Cursor AI to generate component structure
```

#### AI Prompt for Components
```
Create a React component for [purpose] that:
- Uses TypeScript with proper typing
- Implements responsive design with Tailwind
- Follows accessibility best practices
- Maintains brand consistency
- Includes proper JSDoc documentation
```

## 🧪 Testing Strategy with Cursor

### 1. **AI-Assisted Test Writing**
```bash
# Generate test structure
cd tests/e2e
# Use Cursor AI to create test scenarios
```

#### AI Prompt for Tests
```
Create E2E tests for [feature] that:
- Test critical user flows
- Validate responsive design
- Check accessibility compliance
- Ensure brand consistency
- Include edge cases
```

### 2. **Test Review Process**
- **Use AI to review test coverage**
- **Validate test scenarios against user stories**
- **Ensure tests align with ZAG Matrix goals**

## 📊 Quality Assurance

### 1. **AI-Powered Code Quality**
- **Use Cursor's built-in linting and formatting**
- **Ask AI to identify potential issues**
- **Validate against project standards**

### 2. **Brand Consistency Checks**
```bash
# Use AI to review brand alignment
/check-brand This component/page maintains brand consistency 
and properly integrates the ZAG Matrix framework.
```

### 3. **Performance Optimization**
```bash
# Use AI to suggest optimizations
/optimize This component/page for performance, 
accessibility, and user experience.
```

## 🚀 Advanced Cursor Features for Team

### 1. **Custom AI Commands**
Create team-specific AI commands in Cursor:

#### `/zag-check`
```
Review this code for ZAG Matrix alignment and brand consistency.
```

#### `/brand-voice`
```
Check this content for proper brand voice and tone consistency.
```

#### `/accessibility`
```
Review this component for accessibility compliance and best practices.
```

### 2. **Shared Snippets**
Create shared code snippets for common patterns:

#### ZAG Matrix Component Template
```typescript
// zag-component-template.tsx
import React from 'react';

interface ZagComponentProps {
  // Define props
}

export const ZagComponent: React.FC<ZagComponentProps> = ({ 
  // Destructure props 
}) => {
  return (
    <div className="zag-component">
      {/* Component content */}
    </div>
  );
};
```

### 3. **AI-Powered Documentation**
- **Use AI to generate JSDoc comments**
- **Create README updates automatically**
- **Generate changelog entries**

## 📈 Measuring Success

### 1. **Development Velocity**
- **Track time to complete features**
- **Measure code quality improvements**
- **Monitor bug reduction**

### 2. **Brand Alignment**
- **Regular AI reviews of brand consistency**
- **User feedback on brand experience**
- **Analytics on engagement with ZAG Matrix content**

### 3. **Team Collaboration**
- **Code review efficiency**
- **Knowledge sharing effectiveness**
- **Pair programming productivity**

## 🎯 Best Practices Summary

### For Sheridan (Project Owner)
1. **Set clear AI context** in `.cursorrules`
2. **Review AI suggestions** before implementing
3. **Use AI for code reviews** to maintain quality
4. **Share knowledge** through AI-assisted documentation
5. **Respond to emails within 24-48 hours**

### For Sean (Collaborator)
1. **Follow established patterns** and AI guidance
2. **Ask AI for clarification** when unsure
3. **Use AI for rapid prototyping** and iteration
4. **Contribute to shared knowledge** base
5. **Work at your own pace** - no pressure for speed

### For Both Team Members
1. **Use GitHub Issues** for tracking and discussions
2. **Share successful AI prompts** and techniques
3. **Continuously improve** AI context and rules
4. **Balance AI assistance** with human creativity
5. **Maintain clear communication** via email and GitHub

## 🎉 Getting Started

1. **Both team members install Cursor**
2. **Set up shared configuration files**
3. **Create first GitHub Issue for tracking**
4. **Establish comfortable communication rhythm**
5. **Iterate and improve workflow**

Remember: Cursor is a powerful tool, but it's most effective when used as a collaborative partner rather than a replacement for human creativity and judgment. The goal is to amplify your team's capabilities while maintaining the unique voice and vision of the Sheridan Richey brand. 