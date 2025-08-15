# Beehiiv Setup Guide for ZAG Navigator Newsletter
**Created:** 2025-07-27  
**Status:** Active  
**Purpose:** Step-by-step guide for Beehiiv account and publication setup

## Overview
This guide will walk through setting up the Beehiiv account and publication for "The ZAG Navigator" newsletter, targeting "Alex, the Awakened Technologist" with ZAG Matrix framework content.

## Step 1: Account Creation

### 1.1 Sign Up for Beehiiv
- **URL:** https://beehiiv.com
- **Plan Selection:** Start with **Starter Plan** ($42/month)
  - Includes 2,500 subscribers
  - API access included
  - Custom domain support
  - Can upgrade to Growth Plan later if needed

### 1.2 Account Setup
- **Email:** Use sheridan@sheridanrichey.com
- **Password:** Use secure password manager
- **Company:** "Sheridan Richey Brand Ecosystem"
- **Role:** "Founder & Personal Brand Strategist"

## Step 2: Publication Creation

### 2.1 Create New Publication
- **Publication Name:** "The ZAG Navigator"
- **Tagline:** "Weekly insights for awakened technologists"
- **Description:** "Join a community of mid-career professionals discovering clarity, momentum, and mastery through the ZAG Matrix framework. Weekly insights from Sheridan Richey's executive career and entrepreneurial journey."

### 2.2 Publication Settings
- **Domain:** Use beehiiv subdomain initially (zag-navigator.beehiiv.com)
- **Custom Domain:** Later upgrade to newsletter.sheridanrichey.com
- **Timezone:** Pacific Time (PST/PDT)
- **Language:** English (US)

## Step 3: Branding Configuration

### 3.1 Publication Branding
- **Logo:** Use ZAG Matrix logo (from assets/logos/)
- **Colors:** 
  - Primary: ZAG Matrix blue (#1E40AF)
  - Secondary: Professional gray (#6B7280)
  - Accent: Success green (#10B981)
- **Font:** System fonts (Inter, Arial, sans-serif)

### 3.2 Email Branding
- **Sender Name:** "Sheridan Richey"
- **Sender Email:** sheridan@sheridanrichey.com
- **Reply-to:** sheridan@sheridanrichey.com
- **From Address:** "Sheridan Richey via The ZAG Navigator"

## Step 4: API Configuration

### 4.1 Get API Credentials
1. Navigate to **Settings** → **API** in Beehiiv dashboard
2. Click **"Generate New API Key"**
3. **Copy the API Key** (store securely)
4. **Get Publication ID** from URL: `https://app.beehiiv.com/pubs/pub_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`
   - The `pub_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX` part is your Publication ID

### 4.2 Environment Variables Setup
Add these to Vercel environment variables:
```bash
BEEHIIV_PUBLICATION_ID=pub_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
BEEHIIV_API_KEY=your_api_key_here
```

Add to local `.env.local` for development:
```bash
BEEHIIV_PUBLICATION_ID=pub_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
BEEHIIV_API_KEY=your_api_key_here
DEBUG_NEWSLETTER=true
```

## Step 5: Email Template Setup

### 5.1 Welcome Email Template
**Subject Line:** "Welcome to The ZAG Navigator - Your Journey Begins"

**Template Structure:**
```
Hi [First Name],

Welcome to The ZAG Navigator! I'm Sheridan Richey, and I'm excited to have you join our community of awakened technologists.

You're about to discover the ZAG Matrix framework - a proven system for finding clarity, building momentum, and achieving mastery in your career and life.

What to expect:
• Weekly insights from my executive career journey
• Practical strategies for mid-career transformation
• ZAG Matrix framework applications
• Community spotlights and success stories
• Exclusive resources and tools

Your first resource: [Link to ZAG Matrix overview]

Ready to begin your journey?

Best regards,
Sheridan Richey
Founder, The ZAG Navigator
```

### 5.2 Email Sequence Planning
1. **Welcome Email** (Immediate)
2. **ZAG Matrix Overview** (Day 3)
3. **First Weekly Newsletter** (Day 7)
4. **Engagement Sequence** (Ongoing)

## Step 6: Custom Fields Setup

### 6.1 Required Custom Fields
Configure these in Beehiiv:
- `first_name` (Text)
- `role` (Text)
- `source` (Text) - Default: "website_signup"
- `utm_source` (Text)
- `utm_medium` (Text)
- `utm_campaign` (Text)

### 6.2 Field Mapping
The API route already maps these fields:
- `name` → `first_name`
- `role` → `role`
- `source` → Always "website_signup"
- UTM parameters from form submission

## Step 7: Testing Setup

### 7.1 Test Subscriber
- **Email:** test@sheridanrichey.com
- **Name:** "Test User"
- **Role:** "Software Engineer"

### 7.2 Test Flow
1. Submit signup through website form
2. Verify subscriber appears in Beehiiv dashboard
3. Check welcome email delivery
4. Validate custom fields capture
5. Test unsubscribe functionality

## Step 8: Analytics Setup

### 8.1 Beehiiv Analytics
- Enable subscriber analytics
- Set up conversion tracking
- Monitor email performance metrics

### 8.2 Website Analytics
- Track newsletter signup conversions
- Monitor signup sources
- Set up goal tracking in Google Analytics

## Step 9: Security & Compliance

### 9.1 Data Privacy
- Update privacy policy for newsletter
- Ensure GDPR compliance
- Set up data retention policies

### 9.2 Email Authentication
- Set up SPF records
- Configure DKIM authentication
- Implement DMARC policy

## Step 10: Launch Preparation

### 10.1 Pre-Launch Checklist
- [ ] Account created and configured
- [ ] Publication branded and set up
- [ ] API credentials configured
- [ ] Environment variables set
- [ ] Welcome email template created
- [ ] Custom fields configured
- [ ] Test signup flow working
- [ ] Analytics tracking functional
- [ ] Privacy policy updated
- [ ] Email authentication configured

### 10.2 Launch Sequence
1. **Soft Launch:** Test with small group
2. **Full Launch:** Open to all website visitors
3. **Promotion:** Share across social channels
4. **Monitoring:** Track performance and engagement

## Troubleshooting

### Common Issues
1. **API Key Not Working:** Regenerate API key
2. **Subscribers Not Appearing:** Check publication ID
3. **Emails Not Sending:** Verify sender email configuration
4. **Custom Fields Missing:** Check field configuration in Beehiiv

### Support Resources
- **Beehiiv Documentation:** https://docs.beehiiv.com
- **API Reference:** https://docs.beehiiv.com/reference
- **Support Email:** support@beehiiv.com

## Next Steps After Setup

1. **Create Lead Magnet:** AI Prompt Engineer Guide
2. **Set Up Email Automation:** Welcome sequence
3. **Integrate Across Site:** Newsletter signup components
4. **Launch First Newsletter:** ZAG Matrix introduction
5. **Monitor Performance:** Track engagement metrics

---

**This guide ensures a professional, branded newsletter setup that aligns with the ZAG Matrix framework and serves "Alex, the Awakened Technologist."** 