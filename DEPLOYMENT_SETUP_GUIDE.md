# Complete Deployment Setup Guide for Sheridan Richey Website

## 🚀 Quick Start Checklist

### Phase 1: Environment Setup
- [ ] Install Node.js and npm
- [ ] Install Git (if not already installed)
- [ ] Create Vercel account
- [ ] Install Vercel CLI

### Phase 2: Local Development
- [ ] Install project dependencies
- [ ] Add missing assets (headshot, logo)
- [ ] Test build locally
- [ ] Test development server

### Phase 3: Deployment
- [ ] Configure Vercel project
- [ ] Set up custom domain
- [ ] Deploy to production
- [ ] Verify deployment

---

## 📋 Detailed Setup Instructions

### 1. Install Node.js and npm

**Option A: Download from Official Site**
1. Go to [nodejs.org](https://nodejs.org)
2. Download the LTS version (recommended)
3. Run the installer and follow the prompts
4. Verify installation:
   ```powershell
   node --version
   npm --version
   ```

**Option B: Using Chocolatey (if installed)**
```powershell
choco install nodejs
```

**Option C: Using Winget (Windows 10/11)**
```powershell
winget install OpenJS.NodeJS
```

### 2. Install Git (if needed)
```powershell
winget install Git.Git
```

### 3. Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub, GitLab, or Bitbucket
3. Complete account setup

### 4. Install Vercel CLI
```powershell
npm install -g vercel
```

### 5. Local Development Setup

**Navigate to website directory:**
```powershell
cd "C:\Users\Chattan\OneDrive\Documents\1P\SLR.com\website"
```

**Install dependencies:**
```powershell
npm install
```

**Add missing assets:**
- Copy your headshot to: `public/sheridan-headshot.jpg`
- Copy your logo to: `public/assets/SVG/Logo-Zoomed-Locked.svg`

**Test build:**
```powershell
npm run build
```

**Start development server:**
```powershell
npm run dev
```

### 6. Vercel Deployment

**Login to Vercel:**
```powershell
vercel login
```

**Deploy to production:**
```powershell
vercel --prod
```

**Or use the deployment script:**
```powershell
.\deploy.ps1
```

---

## 🌐 Domain Configuration

### DNS Settings for sheridanrichey.com
Configure these records with your domain registrar:

**A Record:**
- Name: `@`
- Value: `76.76.19.19`

**CNAME Record:**
- Name: `www`
- Value: `sheridanrichey.com`

### Vercel Domain Setup
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Domains
4. Add custom domain: `sheridanrichey.com`
5. Follow DNS verification steps

---

## 🔧 Environment Variables

Create `.env.local` file in the `website/` directory:
```env
NEXT_PUBLIC_SITE_URL=https://sheridanrichey.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-vercel-analytics-id
```

**Add to Vercel Dashboard:**
1. Go to Project Settings → Environment Variables
2. Add the same variables there

---

## 📁 Required Assets

### Current Status
- ✅ Favicon: `public/favicon.svg` (placeholder created)
- ✅ Logo: `public/assets/SVG/Logo-Zoomed-Locked.svg` (placeholder created)
- ❌ Headshot: `public/sheridan-headshot.jpg` (needed)
- ✅ Robots.txt: `public/robots.txt` (created)
- ✅ Sitemap: `public/sitemap.xml` (created)

### To Add
1. **Headshot Image:**
   - File: `sheridan-headshot.jpg`
   - Location: `website/public/`
   - Size: 400x500px recommended
   - Format: JPG

2. **Logo:**
   - Replace placeholder with actual logo
   - Location: `website/public/assets/SVG/Logo-Zoomed-Locked.svg`
   - Format: SVG preferred

---

## 🚨 Troubleshooting

### Common Issues

**"npm not recognized"**
- Node.js not installed or not in PATH
- Solution: Reinstall Node.js and restart terminal

**Build failures**
- Check for missing dependencies
- Run `npm install` again
- Check for TypeScript errors

**Image 404 errors**
- Verify assets are in `public/` directory
- Check file names match exactly
- Ensure proper file permissions

**Domain not working**
- Check DNS propagation (can take 24-48 hours)
- Verify DNS records are correct
- Check Vercel domain configuration

### Support Resources
- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Node.js Docs:** https://nodejs.org/docs

---

## 🎯 Next Steps After Deployment

1. **Test all pages** on live site
2. **Set up Google Analytics** (if desired)
3. **Configure email forms** (contact page)
4. **Set up newsletter signup** integration
5. **Add blog content** regularly
6. **Monitor performance** via Vercel Analytics

---

## 📞 Need Help?

If you encounter issues:
1. Check the troubleshooting section above
2. Review Vercel deployment logs
3. Test locally first with `npm run dev`
4. Check browser console for errors

**Your website will be live at:** https://sheridanrichey.com 