# Environment Variables Setup for Sean

## 📋 **Instructions**
1. Create a `.env.local` file in the `website/` directory
2. Copy the variables below and fill in the actual values
3. Get the actual values from Sheridan via secure channel

## 🔧 **Environment Variables Template**

```bash
# =============================================================================
# WEBSITE CONFIGURATION
# =============================================================================

# Site Information
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Sheridan Richey"
NEXT_PUBLIC_SITE_DESCRIPTION="Personal brand ecosystem for Sheridan Richey - ZAG Matrix framework for Awakened Technologists"

# =============================================================================
# NEWSLETTER (BEEHIIV) INTEGRATION
# =============================================================================

# Beehiiv API Configuration
BEEHIIV_API_KEY=your_beehiiv_api_key_here
BEEHIIV_PUBLICATION_ID=your_publication_id_here
BEEHIIV_WEBHOOK_SECRET=your_webhook_secret_here

# =============================================================================
# SLACK COMMUNITY INTEGRATION
# =============================================================================

# Slack Bot Configuration
SLACK_BOT_TOKEN=xoxb-your-slack-bot-token-here
SLACK_SIGNING_SECRET=your_slack_signing_secret_here
SLACK_WORKSPACE_NAME="The ZAG Collective"

# =============================================================================
# ANALYTICS & TRACKING
# =============================================================================

# Google Analytics (Optional)
GOOGLE_ANALYTICS_ID=your_google_analytics_id_here

# =============================================================================
# DEPLOYMENT & HOSTING
# =============================================================================

# Vercel Configuration (Auto-configured)
VERCEL_URL=your_vercel_url_here
VERCEL_ENV=development

# =============================================================================
# CONTENT MANAGEMENT
# =============================================================================

# Content Layer Configuration
CONTENTLAYER_CONFIG_PATH=./contentlayer.config.ts

# =============================================================================
# DEVELOPMENT SETTINGS
# =============================================================================

# Development Mode
NODE_ENV=development
NEXT_TELEMETRY_DISABLED=1
```

## 🚀 **Setup Steps for Sean**

### **Step 1: Create Environment File**
```bash
cd website
# Create .env.local manually with the template below
# (No .env.example exists - use the template in this documentation)
```

### **Step 2: Get Actual Values**
Contact Sheridan for the actual values:
- Email: sheridan@sheridanrichey.com
- Phone: 801.518.2714
- Slack: @sheridan (in ZAG Collective)

### **Step 3: Test Setup**
```bash
cd website
npm run dev
```

## ⚠️ **Important Notes**

1. **Never commit `.env.local`** to version control
2. **Keep API keys secure** - don't share them publicly
3. **Restart dev server** after making changes
4. **Test all integrations** after setup

## 🔍 **Troubleshooting**

### **Common Issues:**
- **"Module not found"** → Check that you're in the `website/` directory
- **"API key invalid"** → Verify the key is correct and has proper permissions
- **"Environment variable not found"** → Ensure `.env.local` is in the right location

### **Getting Help:**
- Check the console for specific error messages
- Review the documentation in `SETUP_FOR_SEAN.md`
- Contact Sheridan for assistance

## 📞 **Contact Information**

**Sheridan Richey**
- Email: sheridan@sheridanrichey.com
- Phone: 801.518.2714
- GitHub: @sheridan-richey
- Slack: @sheridan (in ZAG Collective)

---

**This template ensures Sean has everything needed for a successful development environment setup!** 🎯 