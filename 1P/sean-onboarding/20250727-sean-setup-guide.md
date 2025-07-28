# Setup Guide for Sean Hokanson

## 🚀 Quick Start Checklist

### Prerequisites
- [ ] Node.js 18+ installed
- [ ] Git installed
- [ ] Cursor IDE installed
- [ ] GitHub account created

### Step 1: Repository Access
1. **Accept GitHub invitation** (check email from Sheridan)
2. **Clone the repository:**
   ```bash
   git clone https://github.com/sheridan-richey/sheridanrichey-brand-ecosystem.git
   cd sheridanrichey-brand-ecosystem
   ```

### Step 2: Install Dependencies
```bash
# Install root dependencies
npm install

# Install website dependencies
cd website
npm install
```

### Step 3: Environment Setup
1. **Copy environment variables:**
   ```bash
   cd website
   cp .env.example .env.local
   ```
2. **Get environment variables from Sheridan** (API keys, etc.)

### Step 4: Slack Community Access
1. **Join The ZAG Collective Slack workspace:**
   - Check your email for Slack invitation
   - Or contact Sheridan for direct invite link
   - Workspace: "The ZAG Collective"

2. **Channel Structure (4 channels):**
   - `#zen-awaken` - Mental clarity, purpose, and resilience
   - `#act-align` - Relationships, momentum + Introductions
   - `#gem-achieve` - Strategic growth, investments, mastery + Wins & Learnings
   - `#all-the-zag-collective` - General community discussions

3. **Community Guidelines:**
   - Introduce yourself in `#act-align`
   - Share wins and learnings in `#gem-achieve`
   - Ask direct questions via DM to Sheridan
   - General chat in `#all-the-zag-collective`

### Step 5: Deployment Setup
1. **Deployment is automatic** via GitHub integration
2. **Push to main branch** → automatic deployment to production
3. **Create PRs** → automatic preview URLs generated
4. **Note:** Vercel deployment is handled automatically - no account needed

### Step 5: Development Workflow
1. **Start development server:**
   ```bash
   cd website
   npm run dev
   ```
2. **Open in Cursor:**
   ```bash
   cursor .
   ```

## 🎯 Project Structure Overview

```
SLR.com/
├── website/                 # Next.js website
│   ├── app/                # App router pages
│   ├── components/         # React components
│   ├── posts/             # MDX blog posts
│   └── package.json
├── content/               # Content management
│   ├── blog/             # Blog content by ZAG category
│   ├── newsletter/       # Newsletter content
│   └── resources/        # Resource files
├── assets/               # Images, logos, media
├── tests/               # E2E tests with Playwright
└── docs/               # Project documentation
```

## 🔄 Git Workflow

### Branch Strategy
- **main**: Primary development branch
- **feature/[name]**: New features
- **fix/[name]**: Bug fixes

### Daily Workflow
1. **Pull latest changes:**
   ```bash
   git pull origin main
   ```

2. **Create feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make changes and commit:**
   ```bash
   git add .
   git commit -m "Descriptive commit message"
   ```

4. **Push and create PR:**
   ```bash
   git push origin feature/your-feature-name
   # Then create PR on GitHub
   ```

## 🎨 Brand Guidelines

### ZAG Matrix Framework
- **ZEN (Zeal Evolves Now)**: Mental clarity and purpose
- **ACT (Activate Core Thrust)**: Physical well-being and relationships
- **GEM (Growth Earns Mastery)**: Strategic career and entrepreneurial growth

### Target Audience
"Alex, the Awakened Technologist" - Mid-career professionals seeking purpose and growth

### Content Strategy
- All content must connect to ZAG Matrix
- Professional but approachable tone
- Focus on actionable insights
- Include specific examples from Sheridan's career

## 📝 Content Creation Guide

### Blog Post Requirements
- **Location:** `website/posts/` directory
- **Format:** MDX (Markdown + JSX)
- **Length:** 800-1500 words
- **Structure:** Introduction, main content, actionable takeaways
- **ZAG Connection:** Must relate to ZEN, ACT, or GEM framework
- **Line Endings:** Use LF (Unix) line endings, NOT CRLF (Windows)

### Content Ideas for First Post
- **ZEN Focus:** "Finding Clarity in Mid-Career Transitions"
- **ACT Focus:** "Building Momentum Through Strategic Relationships"
- **GEM Focus:** "Strategic Career Moves: When to Pivot vs. Persevere"

### Writing Guidelines
1. **Start with a hook** - relatable problem or question
2. **Include Sheridan's experience** - specific examples from career
3. **Connect to ZAG Matrix** - explain how it applies
4. **Provide actionable steps** - concrete next steps for readers
5. **End with encouragement** - inspire action and growth

### Example Post Structure
```mdx
---
title: "Your Post Title"
date: "2025-01-XX"
category: "zen" # or "act" or "gem"
excerpt: "Brief description of the post"
---

# Your Post Title

[Introduction with hook]

## The Challenge

[Describe the problem "Alex" faces]

## My Experience

[Share specific example from Sheridan's career]

## The ZAG Matrix Connection

[Explain how this relates to ZEN/ACT/GEM]

## Actionable Steps

1. [Step 1]
2. [Step 2]
3. [Step 3]

## Moving Forward

[Encouraging conclusion]
```

## 🛠️ Development Tools

### Cursor IDE Setup
1. **Install Cursor extensions:**
   - TypeScript
   - Tailwind CSS IntelliSense
   - MDX
   - GitLens

2. **Configure workspace settings:**
   - Enable format on save
   - Set tab size to 2 spaces
   - Enable TypeScript strict mode
   - **Set line endings to LF** (important for MDX files)

### Testing
```bash
# Run E2E tests
npm run test:e2e

# Run specific test
npm run test:e2e -- tests/e2e/blog.spec.js
```

### Deployment
```bash
# Automatic deployment via GitHub
git push origin main  # Deploys to production
git push origin feature/your-branch  # Creates PR with preview URL

# Optional: Local testing with Vercel CLI
vercel --prod  # Only if you have Vercel CLI installed
```

## 📞 Communication Channels

### Asynchronous Collaboration
This is a **part-time, asynchronous collaboration** designed for flexibility:

### Weekly Check-ins
- **Format**: Email updates or GitHub Issues
- **Frequency**: Weekly (when you have updates)
- **Topics**: Progress updates, questions, next priorities

### Monthly Planning (Optional)
- **Format**: Video call or email thread
- **Frequency**: Monthly (as needed)
- **Topics**: Big picture planning, feedback, strategy

### Emergency Contact
- **Email**: sheridan@sheridanrichey.com (primary)
- **GitHub**: @sheridan-richey (for project discussions)
- **Phone**: 801.518.2714 (urgent issues only)
- **Community**: The ZAG Collective (Slack) - sheridanrichey.com/zag-collective

## 🎯 First Month Goals

### Week 1: Setup & Exploration
- [ ] Complete all setup steps above
- [ ] Explore codebase structure
- [ ] Read through existing documentation
- [ ] Set up development environment

### Week 2-3: First Contribution
- [ ] Pick a small bug fix or enhancement
- [ ] Create feature branch
- [ ] Make changes and test locally
- [ ] Create first PR
- [ ] **Write a blog post** (see content guidelines below)

### Week 4: Review & Planning
- [ ] Code review session (async via GitHub)
- [ ] Discuss next priorities via email
- [ ] Establish comfortable communication rhythm

## 🚨 Common Issues & Solutions

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Git Issues
```bash
# Reset to remote state
git fetch origin
git reset --hard origin/main
```

### MDX Line Ending Issues
```bash
# Convert CRLF to LF for MDX files
git config core.autocrlf false
# Or use .gitattributes file to enforce LF
```

## 📚 Key Resources

- **Project README**: `/README.md`
- **Brand Guidelines**: `/RULES.md`
- **Content Workflow**: `/CONTENT_WORKFLOW.md`
- **Deployment Guide**: `/DEPLOYMENT.md`
- **Testing Strategy**: `/TESTING_STRATEGY.md`

## 🎉 Welcome to the Team!

We're excited to have you on board! This project is about building Sheridan's personal brand and helping "Alex, the Awakened Technologist" find their path to purpose and growth.

Remember: When in doubt, ask questions. We're building something great together! 