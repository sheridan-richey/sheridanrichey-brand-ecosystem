# Environment Setup for Slack Automation

> **Supplementary / legacy:** Slack automation env vars for optional tooling. **Collaboration norms:** [`.cursor/rules/collaboration-standards.mdc`](../../../.cursor/rules/collaboration-standards.mdc). **Secrets:** never commit tokens; production env is documented in [AGENTS.md](../../../AGENTS.md) and [`.cursor/rules/testing-deployment.mdc`](../../../.cursor/rules/testing-deployment.mdc). If the project no longer runs this automation, treat this as historical reference only.

## 🔧 **Required Environment Variables**

Create a `.env` file in your project root with these variables:

```bash
# Slack Configuration
SLACK_BOT_TOKEN=xoxb-your-bot-token-here
SLACK_WORKSPACE_NAME=The ZAG Collective

# Optional: For advanced features
SLACK_USER_TOKEN=xoxp-your-user-token-here

# Webhook Configuration (for automated member onboarding)
SLACK_SIGNING_SECRET=your-signing-secret-here
WEBHOOK_PORT=3001

# Other project variables
NODE_ENV=development
```

## 📋 **How to Get These Values**

### **SLACK_BOT_TOKEN**
1. Go to your Slack app settings
2. Navigate to **OAuth & Permissions**
3. Copy the **Bot User OAuth Token** (starts with `xoxb-`)

### **SLACK_SIGNING_SECRET**
1. Go to your Slack app settings
2. Navigate to **Basic Information**
3. Copy the **Signing Secret**

### **SLACK_USER_TOKEN (Optional)**
1. Go to your Slack app settings
2. Navigate to **OAuth & Permissions**
3. Copy the **User OAuth Token** (starts with `xoxp-`)

## 🔒 **Security Notes**

- **Never commit your `.env` file** to version control
- **Add `.env` to your `.gitignore`** file
- **Use different tokens** for development and production
- **Rotate tokens regularly** for security

## 🚀 **Quick Test**

Once you have your `.env` file set up, test the automation:

```bash
# Install dependencies
npm install

# Test channel creation
npm run slack:create

# List existing channels
npm run slack:list
```

## 📝 **GitHub Secrets Setup**

For GitHub Actions automation, add these secrets to your repository:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add these secrets:
   - `SLACK_BOT_TOKEN`: Your bot token
   - `SLACK_SIGNING_SECRET`: Your signing secret

## ✅ **Verification Checklist**

- [ ] Slack app created
- [ ] Bot token scopes configured
- [ ] App installed to workspace
- [ ] `.env` file created with correct values
- [ ] Dependencies installed (`npm install`)
- [ ] Test run successful (`npm run slack:create`)
- [ ] GitHub secrets configured (if using GitHub Actions) 