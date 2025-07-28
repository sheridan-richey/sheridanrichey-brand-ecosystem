# Test Workflow Guide

## 🎯 **Overview**
This document outlines the testing strategy and workflow for the Sheridan Richey Brand Ecosystem project. Tests are designed to validate functionality before deployment, not to trigger deployments themselves.

## 🧪 **Test Types**

### **E2E Tests (Playwright)**
- **Location**: `tests/e2e/`
- **Purpose**: Test critical user flows and functionality
- **Scope**: Navigation, forms, blog posts, responsive design
- **Trigger**: Manual or CI/CD pipeline

### **Unit Tests (Future)**
- **Location**: `website/__tests__/` (when added)
- **Purpose**: Test individual components and functions
- **Scope**: React components, utility functions
- **Trigger**: Manual or CI/CD pipeline

## 🚀 **Test Commands**

### **Root Level Commands**
```bash
# Run E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui

# Run E2E tests in debug mode
npm run test:e2e:debug

# Show test report
npm run test:e2e:report

# Pre-deployment testing (tests + build)
npm run test:pre-deploy
```

### **Website Level Commands**
```bash
cd website

# Run E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui

# Run E2E tests in debug mode
npm run test:e2e:debug

# Show test report
npm run test:e2e:report
```

## 📋 **Test Workflow**

### **Development Workflow**
1. **Make changes** to website code
2. **Run tests locally** to validate changes
3. **Fix any issues** found by tests
4. **Commit changes** when tests pass
5. **Deploy** (tests don't trigger deployment)

### **Pre-Deployment Testing**
```bash
# Before deploying, run:
npm run test:pre-deploy

# This will:
# 1. Run all E2E tests
# 2. Build the website
# 3. Only proceed if both pass
```

### **CI/CD Integration (Future)**
```yaml
# Example GitHub Actions workflow
name: Test and Deploy
on:
  push:
    branches: [main]
    paths: ['website/**']

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run test:e2e
      - run: npm run build
      
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - # Deploy only if tests pass
```

## 🎯 **Why Tests Don't Trigger Deployments**

### **1. Tests Are Validation Tools**
- Tests check if code works correctly
- They don't change the website content
- Deployment should only happen for actual changes

### **2. Test Files Change Frequently**
- Test results, reports, and configurations change often
- Would cause unnecessary deployments
- Test files are excluded via `.vercelignore`

### **3. Proper CI/CD Flow**
- Tests should run **before** deployment
- Only deploy if tests pass
- Tests validate, deployment delivers

## 📁 **Test File Organization**

### **Excluded from Deployment**
```
tests/                    # E2E test files
website/test-results/     # Test output
website/playwright-report/ # Test reports
website/coverage/         # Coverage reports
```

### **Included in Deployment**
```
website/app/              # Next.js pages
website/components/       # React components
website/posts/           # Blog content
website/public/          # Static assets
```

## 🔧 **Test Configuration**

### **Playwright Configuration**
- **File**: `playwright.config.js`
- **Tests**: `tests/e2e/`
- **Reports**: `website/playwright-report/`
- **Results**: `website/test-results/`

### **Test Environment**
- **Base URL**: `http://localhost:3000` (dev)
- **Production URL**: `https://sheridanrichey.com` (CI)
- **Browsers**: Chromium, Firefox, Safari
- **Mobile**: Responsive testing enabled

## 📊 **Test Coverage**

### **Critical User Flows**
- [x] Homepage navigation
- [x] Blog post reading
- [x] Contact form submission
- [x] Newsletter signup
- [x] ZAG Matrix page
- [x] Responsive design

### **Future Test Areas**
- [ ] Component unit tests
- [ ] API endpoint testing
- [ ] Performance testing
- [ ] Accessibility testing
- [ ] SEO validation

## 🚨 **Troubleshooting**

### **Common Issues**
1. **Tests fail locally but pass in CI**
   - Check environment variables
   - Verify local dependencies
   - Clear test cache

2. **Tests timeout**
   - Increase timeout in config
   - Check for slow operations
   - Verify test environment

3. **Tests pass but deployment fails**
   - Run `npm run test:pre-deploy`
   - Check build logs
   - Verify all dependencies

## 📝 **Best Practices**

### **For Developers**
1. **Run tests before committing** website changes
2. **Write tests for new features**
3. **Update tests when changing functionality**
4. **Use descriptive test names**
5. **Keep tests focused and fast**

### **For Deployment**
1. **Always run tests before deploying**
2. **Don't deploy if tests fail**
3. **Monitor test results**
4. **Update tests as needed**

---

**Tests validate quality, deployments deliver value!** 🚀 