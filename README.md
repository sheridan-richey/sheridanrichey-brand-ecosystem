# Sheridan Richey - Personal Brand Ecosystem

A comprehensive personal branding and content management system for Sheridan Richey's professional brand, including the ZAG Matrix framework, website, content hub, and professional profiles.

## 🎯 **Project Overview**

This repository contains the complete brand ecosystem for Sheridan Richey, including:

- **Website** (sheridanrichey.com) - Next.js-based personal branding site
- **Content Hub** - Centralized content management for all platforms
- **GitHub Profile** - Professional developer profile and portfolio
- **Brand Assets** - Logos, images, and brand guidelines
- **Professional Roles** - Guidelines for HSO and BIFI integration
- **Content Templates** - Reusable templates for consistent messaging

## 🌐 **Brand Ecosystem**

### **The ZAG Navigator (Beehiiv Newsletter)**
Our public newsletter for sharing core ideas and insights. This is "The Stage" where we deliver polished, high-value content to a broad audience of Awakened Technologists.

### **The ZAG Collective (Slack Community)**
Our private community for collaborators and members to discuss and apply the framework. This is "The Workshop" where real-time conversation and peer-to-peer support happens. For access, please contact Sheridan directly.

### **Website Integration**
- **Public Community Page** (`/community`): Newsletter-focused, public-facing
- **Private Collective Page** (`/zag-collective`): Direct access only, invitation-based

## 🏗️ **Project Structure (PARA System)**

This project uses the PARA system for knowledge management:

- **1P** - Time-bound objectives (Projects)
- **2A** - Ongoing responsibilities (Areas) 
- **3R** - Reference materials (Resources)
- **4A** - Completed work (Archives)

```
sheridanrichey-brand-ecosystem/
├── README.md                           # This file
├── RULES.md                           # Brand guidelines & rules
├── package.json                        # Root project configuration
├── .gitignore                          # Global gitignore
│
├── 1P/                                # Time-bound objectives
│   ├── slack-community-setup/         # Current project
│   ├── sean-onboarding/               # Current project
│   └── website-enhancements/          # Future project
│
├── 2A/                                # Ongoing responsibilities
│   ├── content-creation/              # Blog, newsletter, social
│   ├── brand-management/              # ZAG Matrix, guidelines
│   └── technical-maintenance/         # Website, deployment
│
├── 3R/                                # Reference materials
│   ├── docs/                          # Documentation
│   │   ├── setup/                     # Setup guides
│   │   ├── collaboration/             # Team documentation
│   │   └── technical/                 # Technical docs
│   ├── templates/                     # Content templates
│   ├── assets/                        # Static assets
│   └── professional-roles/            # Professional information
│
├── 4A/                                # Completed work
│   ├── completed-projects/            # Finished projects
│   └── historical-docs/               # Old documentation
│
├── website/                            # sheridanrichey.com (Next.js)
│   ├── app/                           # Next.js app directory
│   ├── components/                    # React components
│   ├── posts/                         # Blog content
│   ├── package.json                   # Website dependencies
│   └── README.md                      # Website-specific docs
│
├── content/                           # Centralized content hub
│   ├── blog/                          # All blog posts (organized by ZAG)
│   │   ├── zen/                       # ZEN category posts
│   │   ├── act/                       # ACT category posts
│   │   ├── gem/                       # GEM category posts
│   │   └── templates/                 # Post templates
│   ├── resources/                     # Downloadable resources
│   ├── social/                        # Social media content
│   └── newsletter/                    # Email newsletter content
│
├── scripts/                           # Automation scripts
├── tests/                             # Testing infrastructure
└── .github/                           # GitHub configuration
```

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Git

### **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sheridan-richey/sheridanrichey-brand-ecosystem.git
   cd sheridanrichey-brand-ecosystem
   ```

2. **Install dependencies:**
   ```bash
   npm run setup
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 **Content Management**

### **Blog System**
The website now features a fully data-driven blog system. See [website/BLOG_SYSTEM_README.md](./website/BLOG_SYSTEM_README.md) for complete documentation on:
- Adding new blog posts with automatic author attribution
- Managing contributors and author profiles
- Brand-consistent styling and categorization
- Data-driven approach for easy maintenance

### **Creating New Blog Posts**

1. **Create content in the hub:**
   ```bash
   # Create new ZEN post
   touch content/blog/zen/your-post-title.md
   
   # Create new ACT post  
   touch content/blog/act/your-post-title.md
   
   # Create new GEM post
   touch content/blog/gem/your-post-title.md
   ```

2. **Sync to website:**
   ```bash
   npm run content:sync
   ```

3. **Preview your post:**
   Visit `http://localhost:3000/blog/your-post-title`

### **Content Categories (ZAG Matrix)**

- **ZEN** - Clarity, purpose, mental resilience
- **ACT** - Physical well-being, relationships, momentum
- **GEM** - Strategic growth, investments, mastery

## 🎨 **Brand Guidelines**

### **Professional Roles Integration**

- **Henry Schein One** - Current executive leadership role
- **Bring It Forward Investments** - Investment company founder
- **Sheridan Richey** - Personal brand and ZAG Matrix creator

### **Content Guidelines**

- All content must align with professional standards
- Use appropriate role references based on context
- Maintain ZAG Matrix framework integration
- Follow compliance guidelines for each role

## 🔄 **Workflow Integration**

### **Content Creation Flow:**
1. **Write in `content/blog/`** (organized by ZAG)
2. **Sync to `website/posts/`** for publishing
3. **Update `github-profile/`** with latest insights
4. **Share on social** using `content/social/` templates

### **Deployment Flow:**
1. **Website changes** → Deploy from `website/` folder
2. **Profile updates** → Push to GitHub profile repo
3. **Content updates** → Sync across all platforms

## 🚀 **Deployment**

### **Website (sheridanrichey.com)**
```bash
npm run deploy:website
```

### **GitHub Profile**
```bash
npm run deploy:github
```

### **Vercel Integration**
- Connect `website/` folder to Vercel
- Automatic deployments on push
- Custom domain: sheridanrichey.com

## 📊 **Analytics & Performance**

### **Key Metrics:**
- Website traffic and engagement
- Newsletter subscribers
- Social media following
- Speaking opportunities
- Professional network growth

### **Tools:**
- Google Analytics (website)
- Vercel Analytics (performance)
- Social media insights
- Email marketing metrics

## 🤝 **Contributing**

### **Content Contributions:**
1. Create content in appropriate `content/` subfolder
2. Follow brand guidelines and templates
3. Submit for review and approval
4. Sync to appropriate platforms

### **Technical Contributions:**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 **Support & Contact**

- **Email:** sheridan@sheridanrichey.com
- **Website:** [sheridanrichey.com](https://sheridanrichey.com)
- **LinkedIn:** [linkedin.com/in/sheridanrichey](https://linkedin.com/in/sheridanrichey)

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for awakened technologists everywhere.**

*Helping mid-career professionals transform their careers and lives through the ZAG Matrix framework.* 

## End-to-End (E2E) Testing Strategy

This project uses [Playwright](https://playwright.dev/) for automated end-to-end testing, optimized for Next.js and Vercel deployments. The E2E test suite covers critical workflows (newsletter signup, contact form, blog rendering, and link validation) and is located in the `/tests/e2e/` directory.

- See `TESTING_STRATEGY.md` for the full strategy, setup, and best practices.
- To run all E2E tests locally:
  ```sh
  npx playwright test
  ```
- Tests are automatically run in CI on every pull request via GitHub Actions.
- **Ready for testing:** The E2E test suite is now set up and ready to validate critical user workflows.
- **Workflow fixed:** GitHub Actions workflow now properly references Vercel secrets.
- **Secret updated:** Vercel org ID secret has been corrected and should now work.
- **Testing:** Attempting to trigger workflow with updated secret.
- **Personal account:** Updated Vercel org ID to use username instead of team ID. 