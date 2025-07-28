# Collaboration Guidelines for Sean Hokanson

## 🎯 **Overview**
This document outlines the collaboration standards, workflows, and expectations for working on the Sheridan Richey Brand Ecosystem project.

## 🔄 **Git Workflow**

### **Branch Strategy**
- **main**: Primary development branch (protected)
- **feature/[name]**: New features and enhancements
- **fix/[name]**: Bug fixes and corrections
- **docs/[name]**: Documentation updates

### **Commit Message Standards**
```
type(scope): description

Examples:
feat(website): add new ZAG Matrix component
fix(blog): resolve MDX rendering issue
docs(setup): update environment variables guide
style(components): improve button styling
refactor(automation): simplify Slack channel creation
```

### **Pull Request Process**
1. **Create feature branch** from main
2. **Make focused changes** (one feature per PR)
3. **Write descriptive PR title** and description
4. **Request review** from Sheridan
5. **Address feedback** and iterate
6. **Merge** after approval

## 🎨 **Code Standards**

### **TypeScript & React**
- Use TypeScript strict mode
- Prefer functional components with hooks
- Use proper type definitions
- Follow Next.js 13+ App Router patterns

### **Styling**
- Use Tailwind CSS for styling
- Follow responsive design principles
- Maintain consistent spacing and typography
- Use brand colors from the design system

### **File Organization**
- Components in `/website/components/`
- Pages in `/website/app/`
- Blog posts in `/website/posts/`
- Content in `/content/` directory
- Tests in `/tests/` directory

### **Naming Conventions**
- Components: PascalCase (e.g., `ZagMatrixSidebar.tsx`)
- Files: kebab-case (e.g., `zag-matrix-page.tsx`)
- Functions: camelCase (e.g., `handleNewsletterSignup`)
- Constants: UPPER_SNAKE_CASE (e.g., `ZAG_MATRIX_PILLARS`)

## 🏷️ **Brand Consistency**

### **ZAG Matrix Framework**
Every piece of content must connect to the ZAG Matrix:
- **ZEN (Zeal Evolves Now)**: Mental clarity, purpose, resilience
- **ACT (Activate Core Thrust)**: Physical well-being, relationships, momentum
- **GEM (Growth Earns Mastery)**: Strategic growth, investments, entrepreneurship

### **Target Audience**
All content serves "Alex, the Awakened Technologist":
- Mid-career professional
- Achieved success but seeking greater purpose
- Interested in holistic well-being and entrepreneurial growth

### **Tone & Voice**
- Professional but approachable
- Confident and knowledgeable
- Focus on actionable insights
- Include specific examples from Sheridan's career

## 📞 **Communication Protocols**

### **Daily Communication**
- **Slack DM** for quick questions and updates
- **Email** for formal updates and planning
- **GitHub Issues/PRs** for code-related discussions

### **Weekly Sync Meetings**
- **Duration**: 30 minutes
- **Format**: Video call or phone
- **Agenda**: 
  - Review progress from last week
  - Discuss current priorities
  - Address any blockers
  - Plan next week's tasks

### **Emergency Contact**
- **Phone**: 801.518.2714 (Sheridan)
- **Email**: sheridan@sheridanrichey.com
- **Slack**: @sheridan (in ZAG Collective)

## 🧪 **Testing Requirements**

### **Code Quality**
- Write self-documenting code with clear comments
- Include JSDoc comments for complex functions
- Test critical user flows with Playwright
- Ensure responsive design on multiple screen sizes

### **Content Quality**
- Validate brand consistency in all deliverables
- Ensure ZAG Matrix framework integration
- Test accessibility compliance
- Verify SEO optimization

## 📋 **Project Management**

### **Task Prioritization**
1. **Critical bugs** and security issues
2. **High-priority features** aligned with brand goals
3. **Content updates** and blog posts
4. **Technical improvements** and optimizations
5. **Documentation** and process improvements

### **Success Metrics**
Track these to measure collaboration effectiveness:
- Time to first contribution
- Code review efficiency
- Feature development velocity
- Brand consistency in deliverables
- Team communication quality

## 🚀 **Development Workflow**

### **Daily Routine**
1. **Pull latest changes** from main branch
2. **Check for any urgent issues** or updates
3. **Work on assigned tasks** or pick from backlog
4. **Commit and push** changes regularly
5. **Update progress** in Slack or email

### **Weekly Planning**
1. **Review completed work** from previous week
2. **Plan priorities** for upcoming week
3. **Identify any blockers** or dependencies
4. **Update project documentation** as needed

## 🎯 **Quality Assurance**

### **Before Submitting PRs**
- [ ] Code follows TypeScript and React best practices
- [ ] All tests pass
- [ ] Responsive design works on multiple screen sizes
- [ ] Brand consistency maintained
- [ ] ZAG Matrix framework integrated appropriately
- [ ] Documentation updated if needed

### **Code Review Checklist**
- [ ] Functionality works as expected
- [ ] Code is readable and well-documented
- [ ] Performance considerations addressed
- [ ] Security best practices followed
- [ ] Accessibility requirements met

## 📚 **Resources & References**

### **Key Documents**
- `SETUP_FOR_SEAN.md` - Complete setup guide
- `FINISHING_TOUCHES_PLAN.md` - Current project status
- `ENV_EXAMPLE.md` - Environment variables setup
- `FINAL_CHANNEL_STRATEGY.md` - Slack community structure

### **External Resources**
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [ZAG Matrix Framework](internal documentation)

## 🎉 **Success Indicators**

### **Short-term (First Month)**
- [ ] First contribution completed successfully
- [ ] Development environment fully operational
- [ ] Regular communication established
- [ ] Understanding of brand guidelines demonstrated

### **Long-term (Ongoing)**
- [ ] Consistent high-quality deliverables
- [ ] Efficient collaboration workflow
- [ ] Brand consistency maintained
- [ ] Positive impact on project velocity

---

**These guidelines ensure smooth collaboration and consistent quality across the Sheridan Richey Brand Ecosystem project!** 🚀 