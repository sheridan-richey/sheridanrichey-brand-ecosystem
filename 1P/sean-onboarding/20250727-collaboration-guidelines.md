# Collaboration Guidelines for Sean Hokanson

## 🎯 **Overview**
This document outlines the collaboration standards, workflows, and expectations for working on the Sheridan Richey Brand Ecosystem project. This is a **flexible, ad-hoc collaboration** designed for off-hours work with no fixed schedules or urgent deadlines.

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

### **Asynchronous Communication**
- **Email** for longer-form updates and planning (primary)
- **GitHub Issues/PRs** for code-related discussions and progress tracking
- **Slack DM** for quick questions when both online (secondary)
- **No scheduled meetings** - we'll communicate when it fits our schedules

### **Response Expectations**
- **Email**: 24-48 hour response time (best effort)
- **GitHub Issues**: Address within a few days when working on the project
- **Slack**: When online and available (no pressure for immediate response)
- **No urgent deadlines** - this is a flexible, low-pressure collaboration

### **Emergency Contact**
- **Email**: sheridan@sheridanrichey.com (primary)
- **Phone**: 801.518.2714 (only for critical technical issues)
- **GitHub**: @sheridan-richey (for project discussions)

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
- **Quality of contributions** (not speed)
- **Code review efficiency** when reviews happen
- **Brand consistency** in deliverables
- **Clear communication** via GitHub and email
- **Sustainable, low-pressure collaboration** rhythm

## 🚀 **Development Workflow**

### **Flexible Work Pattern**
1. **Work when it fits your schedule** - evenings, weekends, whenever available
2. **Pull latest changes** when starting work on the project
3. **Pick tasks that interest you** or align with your availability
4. **Commit and push** when you have meaningful progress
5. **Update via email or GitHub Issues** when you have updates to share

### **No Fixed Schedule**
- **No daily check-ins** required
- **No weekly planning meetings** scheduled
- **Work at your own pace** - this is designed to be sustainable
- **Communicate when you have something to share** or need input

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
- [ ] Comfortable communication rhythm established
- [ ] Understanding of brand guidelines demonstrated

### **Long-term (Ongoing)**
- [ ] Consistent high-quality deliverables
- [ ] Sustainable, low-pressure collaboration
- [ ] Brand consistency maintained
- [ ] Positive impact on project when working on it

---

**These guidelines ensure smooth collaboration and consistent quality across the Sheridan Richey Brand Ecosystem project!** 🚀 