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

## 🏗️ **Project Structure**

```
sheridanrichey-brand-ecosystem/
├── README.md                           # This file
├── package.json                        # Root project configuration
├── .gitignore                          # Global gitignore
├── PROFESSIONAL_ROLES.md               # Role management guidelines
│
├── website/                            # sheridanrichey.com (Next.js)
│   ├── app/                           # Next.js app directory
│   ├── components/                    # React components
│   ├── posts/                         # Blog content
│   ├── package.json                   # Website dependencies
│   └── README.md                      # Website-specific docs
│
├── github-profile/                     # GitHub profile (@sheridanrichey)
│   ├── README.md                      # Professional profile README
│   ├── assets/                        # Profile images, badges
│   └── templates/                     # Reusable profile components
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
├── assets/                            # Global brand assets
│   ├── logos/                         # Official brand assets
│   ├── images/                        # Brand photos, graphics
│   ├── documents/                     # Resumes, case studies
│   └── media/                         # Videos, podcasts
│
├── professional-roles/                 # Professional role management
│   ├── henry-schein-one/              # HSO role & references
│   ├── bring-it-forward/              # BIFI investment company
│   └── personal-brand/                # Sheridan Richey brand
│
├── projects/                          # Other brand projects
│   ├── speaking/                      # Speaking engagements
│   ├── coaching/                      # Executive coaching materials
│   └── investments/                   # Investment-related content
│
├── tools/                             # Brand management tools
├── docs/                              # Documentation
└── templates/                         # Cross-platform templates
    ├── bio-templates/                 # Different bio lengths & contexts
    ├── social-media/                  # Social media templates
    └── professional/                  # Professional communication templates
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