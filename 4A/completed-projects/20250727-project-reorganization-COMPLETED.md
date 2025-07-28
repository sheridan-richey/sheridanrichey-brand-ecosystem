# Project Reorganization Plan - SLR.com

## 🎯 **Overview**
This document outlines a comprehensive reorganization of the SLR.com project structure to improve maintainability, track active vs. historical work, and establish clear naming conventions.

## 📅 **Naming Convention: YYYYMMDD Format**

### **Active Documents (Current Work)**
- **Format**: `YYYYMMDD-[category]-[description].md`
- **Examples**:
  - `20250115-slack-community-setup.md`
  - `20250115-sean-onboarding-plan.md`
  - `20250115-content-strategy.md`

### **Historical Documents (Completed Work)**
- **Format**: `YYYYMMDD-[category]-[description]-COMPLETED.md`
- **Examples**:
  - `20250110-slack-automation-setup-COMPLETED.md`
  - `20250108-channel-consolidation-COMPLETED.md`

### **Reference Documents (Ongoing)**
- **Format**: `[category]-[description].md` (no date prefix)
- **Examples**:
  - `RULES.md`
  - `README.md`
  - `CONTENT_WORKFLOW.md`

## 🗂️ **Proposed Directory Structure (PARA System)**

```
SLR.com/
├── README.md                           # Project overview
├── RULES.md                           # Brand guidelines & rules
├── .cursorrules                       # AI collaboration rules
├── package.json                       # Root dependencies
├── .gitignore                         # Git ignore rules
├── .gitattributes                     # Git attributes
├── playwright.config.js               # Testing configuration
│
├── website/                           # Next.js application (KEEP SEPARATE)
│   ├── app/                          # App router pages
│   ├── components/                   # React components
│   ├── posts/                        # MDX blog posts
│   ├── lib/                          # Utility functions
│   ├── data/                         # Static data
│   ├── package.json                  # Website dependencies
│   └── .env.example                  # Environment template
│
├── tests/                            # Testing (KEEP SEPARATE)
│   ├── e2e/                          # End-to-end tests
│   ├── unit/                         # Unit tests
│   └── utils/                        # Test utilities
│
├── 1P/                               # Time-bound objectives
│   ├── slack-community-setup/         # Current project
│   │   ├── 20250115-slack-automation-setup.md
│   │   ├── 20250115-channel-consolidation.md
│   │   └── 20250115-welcome-messages.md
│   ├── sean-onboarding/               # Current project
│   │   ├── 20250115-setup-guide.md
│   │   ├── 20250115-collaboration-guidelines.md
│   │   └── 20250115-environment-setup.md
│   └── website-enhancements/          # Future project
│       └── 20250120-hero-section-improvements.md
│
├── 2A/                               # Ongoing responsibilities
│   ├── content-creation/              # Blog, newsletter, social
│   │   ├── content-strategy.md
│   │   ├── blog-post-guidelines.md
│   │   └── newsletter-workflow.md
│   ├── brand-management/              # ZAG Matrix, guidelines
│   │   ├── zag-matrix-framework.md
│   │   ├── brand-guidelines.md
│   │   └── visual-identity.md
│   └── technical-maintenance/         # Website, deployment
│       ├── deployment-process.md
│       ├── testing-strategy.md
│       └── performance-optimization.md
│
├── 3R/                               # Reference materials
│   ├── docs/                          # Documentation
│   │   ├── setup/                     # Setup guides
│   │   ├── collaboration/             # Team documentation
│   │   └── technical/                 # Technical docs
│   ├── templates/                     # Content templates
│   │   ├── blog-posts/                # Blog post templates
│   │   ├── email-templates/           # Email templates
│   │   └── social-media/              # Social media templates
│   ├── assets/                        # Static assets
│   │   ├── images/                    # Images and graphics
│   │   ├── logos/                     # Brand logos
│   │   ├── media/                     # Video and audio
│   │   └── documents/                 # PDFs and documents
│   └── professional-roles/            # Professional information
│       ├── bring-it-forward/          # Current role
│       ├── henry-schein-one/          # Previous role
│       └── career-overview.md         # Career summary
│
├── 4A/                               # Completed work
│   ├── completed-projects/            # Finished projects
│   │   ├── 20250110-slack-automation-setup-COMPLETED.md
│   │   └── 20250108-channel-consolidation-COMPLETED.md
│   └── historical-docs/               # Old documentation
│       └── [moved from root as needed]
│
├── scripts/                          # Automation scripts (KEEP IN ROOT)
│   ├── slack-automation.js           # Slack community automation
│   ├── content-sync.js               # Content synchronization
│   └── deployment-helpers.js         # Deployment utilities
│
├── content/                          # Content management (KEEP IN ROOT)
│   ├── blog/                         # Blog content by ZAG category
│   │   ├── zen/                      # ZEN pillar content
│   │   ├── act/                      # ACT pillar content
│   │   └── gem/                      # GEM pillar content
│   ├── newsletter/                   # Newsletter content
│   ├── resources/                    # Resource files
│   └── social/                       # Social media content
│
├── .github/                          # GitHub configuration
├── .vscode/                          # VS Code settings
├── .vercel/                          # Vercel configuration
└── node_modules/                     # Dependencies (gitignored)
```

## 📋 **File Migration Plan (PARA System)**

### **Phase 1: Create New Structure**
1. **Create new directories**:
   - `1P/slack-community-setup/`
   - `1P/sean-onboarding/`
   - `1P/website-enhancements/`
   - `2A/content-creation/`
   - `2A/brand-management/`
   - `2A/technical-maintenance/`
   - `3R/docs/setup/`
   - `3R/docs/collaboration/`
   - `3R/docs/technical/`
   - `3R/templates/`
   - `3R/assets/`
   - `3R/professional-roles/`
   - `4A/completed-projects/`
   - `4A/historical-docs/`

### **Phase 2: Migrate Active Projects**
**Move to `1P/` with YYYYMMDD prefix**:
- `FINISHING_TOUCHES_PLAN.md` → `1P/slack-community-setup/20250115-slack-community-sean-onboarding.md`
- `COLLABORATION_GUIDELINES.md` → `1P/sean-onboarding/20250115-collaboration-guidelines.md`
- `SETUP_FOR_SEAN.md` → `1P/sean-onboarding/20250115-sean-setup-guide.md`
- `SLACK_WELCOME_MESSAGE.md` → `1P/slack-community-setup/20250115-slack-welcome-templates.md`
- `ENV_EXAMPLE.md` → `1P/sean-onboarding/20250115-environment-setup.md`

### **Phase 3: Migrate Areas (Ongoing Responsibilities)**
**Move to `2A/` with descriptive names**:
- `CONTENT_WORKFLOW.md` → `2A/content-creation/content-strategy.md`
- `PROFESSIONAL_ROLES.md` → `2A/brand-management/career-overview.md`
- `DEPLOYMENT.md` → `2A/technical-maintenance/deployment-process.md`
- `TESTING_STRATEGY.md` → `2A/technical-maintenance/testing-strategy.md`

### **Phase 4: Migrate Resources (Reference Materials)**
**Move to `3R/` with organized structure**:
- `ENVIRONMENT_SETUP.md` → `3R/docs/setup/environment-setup.md`
- `DEPLOYMENT_SETUP_GUIDE.md` → `3R/docs/setup/deployment-guide.md`
- `BEEHIIV_SETUP.md` → `3R/docs/setup/beehiiv-setup.md`
- `CURSOR_COLLABORATION_STRATEGY.md` → `3R/docs/collaboration/cursor-strategy.md`
- `ZAG_COLLECTIVE_EMAIL_TEMPLATES.md` → `3R/templates/email-templates.md`
- `assets/` → `3R/assets/` (move entire directory)
- `professional-roles/` → `3R/professional-roles/` (move entire directory)

### **Phase 5: Archive Completed Work**
**Move to `4A/` with YYYYMMDD-COMPLETED prefix**:
- `SLACK_AUTOMATION_SETUP.md` → `4A/completed-projects/20250110-slack-automation-setup-COMPLETED.md`
- `CHANNEL_CONSOLIDATION_PLAN.md` → `4A/completed-projects/20250108-channel-consolidation-COMPLETED.md`
- `FINAL_CHANNEL_STRATEGY.md` → `4A/completed-projects/20250108-final-channel-strategy-COMPLETED.md`
- `REORGANIZATION_SUMMARY.md` → `4A/historical-docs/20250108-reorganization-summary-COMPLETED.md`

### **Phase 5: Clean Up Root Directory**
**Keep only essential files in root**:
- `README.md`
- `RULES.md`
- `package.json`
- `.gitignore`
- `.gitattributes`
- `.cursorrules`
- `playwright.config.js`

## 🎯 **Benefits of This Structure**

### **1. Clear Active vs. Historical Tracking**
- **Active work**: `1P/` with current dates
- **Historical work**: `4A/` with completion dates
- **Reference docs**: `3R/` with no date prefix

### **2. Better Organization**
- **Setup guides**: All in `3R/docs/setup/`
- **Collaboration docs**: All in `3R/docs/collaboration/`
- **Brand guidelines**: All in `2A/brand-management/`
- **Technical docs**: All in `3R/docs/technical/`

### **3. Easier Maintenance**
- **Clear separation** of concerns
- **Predictable file locations**
- **Easy to find** relevant documentation
- **Simple cleanup** of completed work

### **4. Scalable Structure**
- **Easy to add** new categories
- **Consistent naming** across all files
- **Clear hierarchy** for complex projects
- **Future-proof** organization

## 🚀 **Implementation Timeline**

### **Immediate (Today)**
1. Create new directory structure
2. Move active documents to `1P/` with dates
3. Update README.md with new structure

### **This Week**
1. Migrate reference documents to `3R/`
2. Archive completed work to `4A/`
3. Clean up root directory
4. Update all internal links

### **Next Week**
1. Test new structure with Sean
2. Document any issues or improvements
3. Establish maintenance procedures

## 📝 **PARA System Documentation**

### **PARA System Overview**
This project uses the PARA system for knowledge management:

- **1P-Projects**: Time-bound objectives with deadlines
- **2A-Areas**: Ongoing responsibilities without deadlines
- **3R-Resources**: Reference materials and documentation
- **4A-Archives**: Completed work and historical documents

### **File Naming Conventions**
- **Projects**: `YYYYMMDD-[project-name]-[status].md`
- **Areas**: `[area-name]-[topic].md` (no date, ongoing)
- **Resources**: `[category]-[description].md` (no date, reference)
- **Archives**: `YYYYMMDD-[original-name]-COMPLETED.md`

### **AI and Collaborator Guidelines**
- **Always use PARA structure** when creating new files
- **Follow naming conventions** strictly
- **Move completed projects** to Archives
- **Keep Areas organized** by responsibility
- **Maintain Resources** as reference materials

## 📝 **Maintenance Procedures**

### **Adding New Projects**
1. Create file in `1P/[project-name]/` with `YYYYMMDD-[description].md`
2. Update project status in file header
3. Link from relevant Areas or Resources

### **Adding New Areas**
1. Create file in `2A/[area-name]/` with descriptive filename
2. No date prefix needed (ongoing responsibility)
3. Update area documentation as needed

### **Adding New Resources**
1. Create file in `3R/[category]/` with descriptive filename
2. No date prefix needed (reference material)
3. Keep organized by category

### **Completing Projects**
1. Move file from `1P/` to `4A/completed-projects/`
2. Add `-COMPLETED` suffix to filename
3. Update completion date in file header
4. Update any references in Areas or Resources

### **Monthly Cleanup**
1. Review `4A/` for files older than 6 months
2. Archive to `4A/historical-docs/` if still needed
3. Delete if no longer relevant
4. Update documentation links

---

**This reorganization will create a much cleaner, more maintainable project structure!** 🎯 