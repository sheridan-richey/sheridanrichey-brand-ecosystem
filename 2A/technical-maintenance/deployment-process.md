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
BEEHIIV_PUBLICATION_ID=your-beehiiv-publication-id
BEEHIIV_API_KEY=your-beehiiv-api-key
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
BEEHIIV_PUBLICATION_ID=your-beehiiv-publication-id
BEEHIIV_API_KEY=your-beehiiv-api-key
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

### Primary: Git Pipeline (Recommended)
- **Trigger:** Push to `main` → Vercel deploys to Production automatically
- **Pull Requests:** Each PR creates a Preview deployment link
- **Checks:** Build, lint, and E2E tests must pass before merge

### Manual (Fallback Only)
1. **Build locally:** `npm run build`
2. **Test locally:** `npm run start`
3. **Deploy (temporary override):** `vercel --prod`
4. **Follow-up:** Open a PR to land the same change in `main` to realign with Git history

## Newsletter Integration

### API Configuration
- **Endpoint:** `/api/newsletter`
- **Custom Fields:** Object format for Beehiiv compatibility
- **UTM Attribution:** Enhanced with page path tracking

### UTM Parameters Sent
```typescript
{
  utm_source: 'website',
  utm_medium: 'newsletter_page',
  utm_campaign: pagePath || 'zag_community',
  utm_content: 'newsletter_signup_form'
}
```

### Custom Fields Mapping
```typescript
{
  custom_fields: {
    first_name: string,
    role: string,
    source: 'website_signup'
  }
}
```

## Content Updates
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

### Beehiiv Attribution
- **UTM Tracking:** Automatic via API integration
- **Page Path Attribution:** Enhanced tracking for different entry points
- **Custom Field Analytics:** Subscriber segmentation and personalization

## Troubleshooting

### Common Issues
1. **Build Failures:** Check for missing dependencies
2. **Image 404s:** Verify assets in `public/` directory
3. **Domain Issues:** Check DNS configuration
4. **Environment Variables:** Verify in Vercel dashboard
5. **Newsletter API:** Check Beehiiv credentials and custom field setup

### Support Resources
- **Vercel Documentation:** https://vercel.com/docs
- **Next.js Documentation:** https://nextjs.org/docs
- **Beehiiv API Documentation:** https://developers.beehiiv.com/docs
- **Domain Issues:** Contact domain registrar

---

**This file is the persistent source of truth for deployment. I will reference it automatically for all future deployment questions.** 