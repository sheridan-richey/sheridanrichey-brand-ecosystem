# PARA System Guide - SLR.com Brand Ecosystem

## 🎯 **Overview**
This document explains the PARA system implementation for the Sheridan Richey Brand Ecosystem project. PARA is a knowledge management system that organizes information into four categories: Projects, Areas, Resources, and Archives.

## 📁 **PARA Structure**

### **1P** - Time-bound Objectives
**Purpose**: Specific goals with deadlines and clear outcomes
**Location**: `1P/[project-name]/`
**Naming**: `YYYYMMDD-[description].md`

**Current Active Projects**:
- `slack-community-setup/` - Setting up The ZAG Collective Slack workspace
- `sean-onboarding/` - Onboarding Sean Hokanson as collaborator
- `website-enhancements/` - Future website improvements

**Example Files**:
- `20250727-slack-automation-setup.md`
- `20250727-sean-setup-guide.md`
- `20250727-hero-section-improvements.md`

### **2A** - Ongoing Responsibilities
**Purpose**: Continuous areas of responsibility without deadlines
**Location**: `2A/[area-name]/`
**Naming**: `[area-name]-[topic].md` (no date prefix)

**Current Areas**:
- `content-creation/` - Blog posts, newsletter, social media
- `brand-management/` - ZAG Matrix, brand guidelines, visual identity
- `technical-maintenance/` - Website, deployment, testing

**Example Files**:
- `content-strategy.md`
- `zag-matrix-framework.md`
- `deployment-process.md`

### **3R** - Reference Materials
**Purpose**: Static reference materials and documentation
**Location**: `3R/[category]/`
**Naming**: `[category]-[description].md` (no date prefix)

**Resource Categories**:
- `docs/` - Documentation (setup, collaboration, technical)
- `templates/` - Content templates (blog, email, social)
- `assets/` - Static assets (images, logos, media)
- `professional-roles/` - Career information

**Example Files**:
- `environment-setup.md`
- `blog-post-template.md`
- `career-overview.md`

### **4A** - Completed Work
**Purpose**: Historical documents and completed projects
**Location**: `4A/[category]/`
**Naming**: `YYYYMMDD-[original-name]-COMPLETED.md`

**Archive Categories**:
- `completed-projects/` - Finished projects
- `historical-docs/` - Old documentation

**Example Files**:
- `20250727-slack-automation-setup-COMPLETED.md`
- `20250727-channel-consolidation-COMPLETED.md`

## 🚀 **How to Use PARA**

### **Creating New Content**

#### **New Project**
```bash
# Create project directory
mkdir -p 1P/[project-name]

# Create project file with date
touch 1P/[project-name]/20250727-[description].md
```

#### **New Area**
```bash
# Create area file (no date needed)
touch 2A/[area-name]/[area-name]-[topic].md
```

#### **New Resource**
```bash
# Create resource file (no date needed)
touch 3R/[category]/[category]-[description].md
```

### **Date Stamping Rules**
- **ALWAYS use current date** when creating new files with YYYYMMDD prefix
- **NEVER use dates from memory** - always get current date programmatically
- Use `Get-Date -Format "yyyyMMdd"` (PowerShell) or equivalent for current date
- For Projects (1P): `YYYYMMDD-[description].md`
- For Archives (4A): `YYYYMMDD-[description]-COMPLETED.md`
- Areas (2A) and Resources (3R): No date prefix needed

### **File Headers**
Each file should include a header with metadata:

```markdown
---
title: "File Title"
category: "projects|areas|resources|archives"
status: "active|completed|draft"
created: "2025-07-27"
updated: "2025-07-27"
---

# File Title

Content here...
```

### **Moving Files Between Categories**

#### **Project → Archive**
```bash
# Move completed project to archives
mv 1P/[project]/[file].md 4A/completed-projects/[file]-COMPLETED.md
```

#### **Resource → Area**
```bash
# Move reference material to ongoing area
mv 3R/[category]/[file].md 2A/[area]/[file].md
```

## 📋 **AI and Collaborator Guidelines**

### **For AI Assistants**
- **Always check PARA structure** before creating new files
- **Use appropriate naming conventions** for each category
- **Move completed projects** to Archives automatically
- **Maintain file headers** with metadata
- **Update internal links** when moving files

### **For Collaborators**
- **Follow PARA structure** when adding new content
- **Use descriptive filenames** that indicate purpose
- **Keep Projects focused** on specific outcomes
- **Maintain Areas** as ongoing responsibilities
- **Organize Resources** logically by category

### **File Organization Rules**
1. **Projects**: Must have deadlines and clear outcomes
2. **Areas**: Ongoing responsibilities without deadlines
3. **Resources**: Static reference materials
4. **Archives**: Completed work and historical documents

### **Naming Conventions**
- **Projects**: `YYYYMMDD-[description].md`
- **Areas**: `[area-name]-[topic].md`
- **Resources**: `[category]-[description].md`
- **Archives**: `YYYYMMDD-[original-name]-COMPLETED.md`

## 🔄 **Workflow Examples**

### **Starting a New Project**
1. Create project directory: `1P/[project-name]/`
2. Create project file: `YYYYMMDD-[description].md`
3. Add project metadata in header
4. Link from relevant Areas or Resources

### **Completing a Project**
1. Move file to: `4A/completed-projects/`
2. Add `-COMPLETED` suffix to filename
3. Update completion date in header
4. Update any references in Areas or Resources

### **Creating Reference Material**
1. Create file in: `3R/[category]/`
2. Use descriptive filename (no date)
3. Add resource metadata in header
4. Link from relevant Projects or Areas

## 📊 **Maintenance Procedures**

### **Weekly Review**
- Check for completed projects
- Move completed work to Archives
- Update file headers and links

### **Monthly Cleanup**
- Review Archives for old files
- Archive or delete outdated content
- Update documentation links

### **Quarterly Assessment**
- Review Areas for relevance
- Consolidate similar Resources
- Archive old completed projects

## 🎯 **Benefits of PARA System**

### **Clear Organization**
- **Projects**: Focus on specific outcomes
- **Areas**: Maintain ongoing responsibilities
- **Resources**: Easy access to reference materials
- **Archives**: Historical record of completed work

### **Improved Workflow**
- **Easy to find** relevant information
- **Clear status** of all work items
- **Simple maintenance** procedures
- **Scalable structure** for growth

### **Better Collaboration**
- **Consistent organization** for all team members
- **Clear guidelines** for file creation
- **Easy onboarding** for new collaborators
- **AI-friendly structure** for automation

---

**This PARA system ensures efficient knowledge management and clear organization for the Sheridan Richey Brand Ecosystem project!** 🚀 