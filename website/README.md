# Sheridan Richey Website

The official website for Sheridan Richey's personal brand, built with Next.js 13 and featuring the ZAG Matrix framework for career transformation.

## 🎯 **Website Overview**

**URL:** [sheridanrichey.com](https://sheridanrichey.com)  
**Purpose:** Personal branding, ZAG Matrix framework showcase, and community building for awakened technologists

## 🚀 **Quick Start**

### **Development**
```bash
# From the root directory
npm run dev

# Or from the website directory
cd website
npm run dev
```

### **Build & Deploy**
```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
npm run deploy:website
```

## 🏗️ **Website Structure**

```
website/
├── app/                    # Next.js 13 app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── blog/              # Blog pages
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── posts/                 # Blog content (MDX files)
├── contentlayer.config.ts # Content management config
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## 📝 **Content Management**

### **Blog Posts**
- **Location:** `posts/` directory
- **Format:** MDX with frontmatter
- **Categories:** ZEN, ACT, GEM (ZAG Matrix framework)
- **Sync:** Content is synced from `../content/blog/`

### **Adding New Posts**
1. Create MDX file in `posts/` directory
2. Add frontmatter metadata:
   ```yaml
   ---
   title: "Your Post Title"
   description: "Brief description for SEO"
   date: 2024-01-20
   category: "ZEN" # ZEN, ACT, GEM
   tags: ["tag1", "tag2"]
   featured: false
   ---
   ```
3. Write content using Markdown/MDX
4. Preview at `http://localhost:3000/blog/your-post-title`

## 🎨 **Design System**

### **Colors**
- **Primary:** Blue gradient (#0ea5e9 to #0284c7)
- **Secondary:** Gray scale (#64748b to #0f172a)
- **Accent:** Yellow (#eab308)

### **Typography**
- **Font:** Inter (Google Fonts)
- **Headings:** Bold, gradient text
- **Body:** Clean, readable secondary colors

### **Components**
- **Buttons:** Primary (blue) and Secondary (gray)
- **Cards:** Clean white cards with shadows
- **Navigation:** Sticky header with mobile menu

## 🔧 **Technical Stack**

- **Framework:** Next.js 13 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX with Contentlayer
- **Deployment:** Vercel

## 📊 **SEO & Performance**

### **SEO Features**
- Meta tags and Open Graph
- Structured data
- Sitemap generation
- Image optimization

### **Performance**
- Image optimization
- Code splitting
- Font optimization
- Core Web Vitals optimization

## 🚀 **Deployment**

### **Vercel (Recommended)**
1. Connect GitHub repository to Vercel
2. Set root directory to `website/`
3. Deploy automatically on push

### **Environment Variables**
```env
NEXT_PUBLIC_SITE_URL=https://sheridanrichey.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📈 **Analytics**

### **Google Analytics**
- Page views and user behavior
- Content performance
- Traffic sources

### **Vercel Analytics**
- Performance metrics
- Core Web Vitals
- Real user monitoring

## 🔄 **Content Workflow**

### **Content Creation Flow:**
1. Write content in `../content/blog/` (organized by ZAG)
2. Sync to `posts/` for website publishing
3. Preview and test locally
4. Deploy to production

### **Content Categories:**
- **ZEN:** Clarity, purpose, mental resilience
- **ACT:** Physical well-being, relationships, momentum  
- **GEM:** Strategic growth, investments, mastery

## 🎯 **Key Features**

- **Responsive Design:** Mobile-first approach
- **Fast Performance:** Optimized images and code
- **SEO Optimized:** Meta tags and structured data
- **Content Management:** Easy MDX-based blog system
- **Modern Stack:** Next.js 13, TypeScript, Tailwind CSS
- **Accessibility:** WCAG compliant components

## 🤝 **Development**

### **Available Scripts**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### **Adding New Pages**
1. Create directory in `app/`
2. Add `page.tsx` for the route
3. Update navigation in `components/Header.tsx`

## 📞 **Support**

For technical issues or questions:
- **Email:** sheridan@sheridanrichey.com
- **GitHub Issues:** Create issue in main repository

---

**Part of the Sheridan Richey Personal Brand Ecosystem**

*Built with Next.js and ❤️ for awakened technologists everywhere.* 