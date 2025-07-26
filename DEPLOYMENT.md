# DEPLOYMENT.md

## Deployment Platform
- **Platform:** Vercel (Recommended for Next.js)
- **Production URL:** https://sheridanrichey.com
- **Staging URL:** https://sheridanrichey-git-main-sheridanrichey.vercel.app

## Pre-Deployment Checklist

### 1. Environment Variables Setup
Create `.env.local` file in the `website/` directory:
```env
NEXT_PUBLIC_SITE_URL=https://sheridanrichey.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-vercel-analytics-id
```

### 2. Required Assets
Ensure these files exist in `website/public/`:
- `favicon.svg` - Site favicon
- `sheridan-headshot.jpg` - Hero section image
- `assets/SVG/Logo-Zoomed-Locked.svg` - Header logo
- `robots.txt` - SEO robots file
- `sitemap.xml` - SEO sitemap

### 3. Domain Configuration
- **Primary Domain:** sheridanrichey.com
- **WWW Redirect:** www.sheridanrichey.com → sheridanrichey.com
- **SSL Certificate:** Automatic via Vercel

## Deployment Commands

### Local Development
```bash
cd website
npm install
npm run dev
```

### Production Build Test
```bash
cd website
npm run build
npm run start
```

### Vercel Deployment
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Deploy preview
vercel
```

## Vercel Configuration

### Project Settings
- **Framework Preset:** Next.js
- **Root Directory:** `website`
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### Environment Variables (Vercel Dashboard)
```
NEXT_PUBLIC_SITE_URL=https://sheridanrichey.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-vercel-analytics-id
```

### Domain Configuration
1. **Add Custom Domain:** sheridanrichey.com
2. **Configure DNS Records:**
   - Type: A
   - Name: @
   - Value: 76.76.19.19
   - Type: CNAME
   - Name: www
   - Value: sheridanrichey.com

## Deployment Workflow

### Automatic Deployment
- **Trigger:** Push to `main` branch
- **Platform:** Vercel
- **Status:** Automatic builds and deployments

### Manual Deployment
1. **Build locally:** `npm run build`
2. **Test locally:** `npm run start`
3. **Deploy:** `vercel --prod`

### Content Updates
- **Blog Posts:** Add MDX files to `posts/` directory
- **Images:** Add to `public/` directory
- **Components:** Edit React components in `components/`
- **Pages:** Edit pages in `app/` directory

## Performance Optimization

### Build Optimization
- **Image Optimization:** Next.js automatic
- **Code Splitting:** Automatic via Next.js
- **Font Optimization:** Google Fonts with `display: swap`
- **CSS Optimization:** Tailwind CSS purging

### SEO Optimization
- **Meta Tags:** Configured in `layout.tsx`
- **Open Graph:** Social media sharing
- **Structured Data:** JSON-LD for rich snippets
- **Sitemap:** Auto-generated via Next.js

## Monitoring & Analytics

### Vercel Analytics
- **Performance:** Core Web Vitals
- **Real User Monitoring:** User experience metrics
- **Error Tracking:** Automatic error reporting

### Google Analytics
- **Page Views:** User behavior tracking
- **Content Performance:** Blog post analytics
- **Traffic Sources:** Marketing attribution

## Troubleshooting

### Common Issues
1. **Build Failures:** Check for missing dependencies
2. **Image 404s:** Verify assets in `public/` directory
3. **Domain Issues:** Check DNS configuration
4. **Environment Variables:** Verify in Vercel dashboard

### Support Resources
- **Vercel Documentation:** https://vercel.com/docs
- **Next.js Documentation:** https://nextjs.org/docs
- **Domain Issues:** Contact domain registrar

---
**This file is the persistent source of truth for deployment. I will reference it automatically for all future deployment questions.** 