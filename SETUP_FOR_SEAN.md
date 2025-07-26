# Setup Guide for Sean Hokanson

## 🚀 Quick Start Checklist

### Prerequisites
- [ ] Node.js 18+ installed
- [ ] Git installed
- [ ] Cursor IDE installed
- [ ] GitHub account created
- [ ] Vercel account created

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

### Step 4: Vercel Access
1. **Accept Vercel invitation** (check email)
2. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```
3. **Login to Vercel:**
   ```bash
   vercel login
   ```

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
- **ACT (Awaken Core Thrust)**: Physical well-being and relationships
- **GEM (Growth Earns Mastery)**: Strategic career and entrepreneurial growth

### Target Audience
"Alex, the Awakened Technologist" - Mid-career professionals seeking purpose and growth

### Content Strategy
- All content must connect to ZAG Matrix
- Professional but approachable tone
- Focus on actionable insights
- Include specific examples from Sheridan's career

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

### Testing
```bash
# Run E2E tests
npm run test:e2e

# Run specific test
npm run test:e2e -- tests/e2e/blog.spec.js
```

### Deployment
```bash
# Deploy to Vercel
vercel --prod
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
- **Phone**: [Sheridan's phone number] (urgent issues only)

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
git reset --hard origin/test-playwright-workflow
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