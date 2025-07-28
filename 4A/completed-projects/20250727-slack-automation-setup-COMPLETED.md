# Slack Automation Setup Guide for The ZAG Collective

## 🎯 Overview

This guide will help you set up automated Slack channel creation and management for The ZAG Collective workspace using the ZAG Matrix framework.

## 🚀 Quick Start

### 1. Create a Slack App

1. **Go to [api.slack.com/apps](https://api.slack.com/apps)**
2. **Click "Create New App"**
3. **Choose "From scratch"**
4. **Enter app details:**
   - **App Name:** ZAG Collective Automation
   - **Workspace:** Select your ZAG Collective workspace
5. **Click "Create App"**

### 2. Configure Bot Token Scopes

In your Slack app settings, go to **OAuth & Permissions** and add these scopes:

#### **Bot Token Scopes (Required)**
```
channels:read          # View basic information about public channels
channels:write         # Manage public channels
channels:manage        # Manage public channels
groups:read           # View basic information about private channels
groups:write          # Manage private channels
chat:write            # Send messages as the bot
users:read            # View people in the workspace
users:read.email      # View email addresses of people in the workspace
```

#### **User Token Scopes (Optional - for advanced features)**
```
channels:read
channels:write
groups:read
groups:write
```

### 3. Install the App

1. **Go to "OAuth & Permissions"**
2. **Click "Install to Workspace"**
3. **Authorize the app**
4. **Copy the "Bot User OAuth Token"** (starts with `xoxb-`)

### 4. Environment Setup

#### **Create `.env` file in project root:**
```bash
# Slack Configuration
SLACK_BOT_TOKEN=xoxb-your-bot-token-here
SLACK_WORKSPACE_NAME=The ZAG Collective

# Optional: For advanced features
SLACK_USER_TOKEN=xoxp-your-user-token-here
```

#### **Install dependencies:**
```bash
npm install @slack/web-api dotenv
```

### 5. Run the Automation

#### **Create all ZAG Matrix channels:**
```bash
node scripts/slack-automation.js create
```

#### **List existing channels:**
```bash
node scripts/slack-automation.js list
```

#### **Invite users to channels:**
```bash
node scripts/slack-automation.js invite "user1,user2" "zen-awaken,act-align"
```

## 📋 Channel Structure

The automation creates these channels based on the ZAG Matrix framework:

### **Core ZAG Matrix Channels**
- `#zen-awaken` - Mental clarity, purpose, and resilience
- `#act-align` - Physical well-being, relationships, and momentum
- `#gem-achieve` - Strategic growth, investments, and mastery

### **Community Channels**
- `#introductions` - Member introductions and community building
- `#wins-and-learnings` - Success stories and learning from experiences
- `#ask-sheridan` - Direct Q&A with Sheridan Richey

### **Specialized Channels**
- `#career-transitions` - Career transition support and guidance
- `#entrepreneurial-journey` - Entrepreneurial growth and support
- `#wellness-and-balance` - Wellness and work-life balance

### **Resource Channels**
- `#resources` - Resource sharing and recommendations
- `#events-and-meetups` - Event coordination and announcements

## 🔧 Advanced Configuration

### **Custom Channel Configuration**

Edit `scripts/slack-automation.js` to modify channel settings:

```javascript
getChannelConfig() {
  return {
    'your-custom-channel': {
      description: 'Your channel description',
      purpose: 'Your channel purpose',
      isPrivate: false  // Set to true for private channels
    }
  };
}
```

### **Automated Welcome Messages**

The script can post welcome messages to new channels:

```javascript
await automation.createWelcomeMessage(channelId);
```

### **Bulk User Invitations**

Invite multiple users to multiple channels:

```javascript
const userIds = ['U1234567890', 'U0987654321'];
const channelNames = ['zen-awaken', 'act-align', 'gem-achieve'];
await automation.inviteUsersToChannels(userIds, channelNames);
```

## 🎯 Integration with Your Workflow

### **GitHub Actions Integration**

Create `.github/workflows/slack-setup.yml`:

```yaml
name: Slack Channel Setup

on:
  workflow_dispatch:
  push:
    branches: [main]
    paths: ['scripts/slack-automation.js']

jobs:
  setup-slack:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: node scripts/slack-automation.js create
        env:
          SLACK_BOT_TOKEN: ${{ secrets.SLACK_BOT_TOKEN }}
```

### **Package.json Scripts**

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "slack:create": "node scripts/slack-automation.js create",
    "slack:list": "node scripts/slack-automation.js list",
    "slack:invite": "node scripts/slack-automation.js invite",
    "slack:setup": "npm run slack:create && npm run slack:list"
  }
}
```

## 🔒 Security Best Practices

### **Token Management**
- **Never commit tokens** to version control
- **Use environment variables** for all sensitive data
- **Rotate tokens regularly** for security
- **Use least privilege** - only grant necessary permissions

### **Workspace Security**
- **Review app permissions** regularly
- **Monitor bot activity** in workspace
- **Limit bot access** to necessary channels only
- **Use private channels** for sensitive discussions

## 🚨 Troubleshooting

### **Common Issues**

#### **"Missing scopes" error**
- **Solution:** Add required scopes in Slack app settings
- **Check:** OAuth & Permissions → Scopes

#### **"Channel already exists" error**
- **Solution:** This is normal - script skips existing channels
- **Check:** Use `npm run slack:list` to see current channels

#### **"Invalid token" error**
- **Solution:** Verify your bot token is correct
- **Check:** OAuth & Permissions → Bot User OAuth Token

#### **"Permission denied" error**
- **Solution:** Ensure bot has workspace admin permissions
- **Check:** Workspace settings → Apps → App permissions

### **Debug Mode**

Enable debug logging:

```bash
DEBUG=slack* node scripts/slack-automation.js create
```

## 📊 Monitoring and Analytics

### **Track Channel Activity**
- Monitor channel member counts
- Track message activity
- Measure engagement levels
- Identify popular channels

### **Community Health Metrics**
- New member onboarding
- Channel participation rates
- Question response times
- Member retention rates

## 🎉 Success Metrics

### **Automation Success**
- ✅ All ZAG Matrix channels created
- ✅ Channel descriptions and purposes set
- ✅ Welcome messages posted
- ✅ Member invitations sent

### **Community Growth**
- 📈 Member engagement in channels
- 📈 Quality of discussions
- 📈 Member retention and satisfaction
- 📈 Content generation from community

## 🔄 Maintenance

### **Regular Tasks**
- **Monthly:** Review channel activity and engagement
- **Quarterly:** Update channel descriptions and purposes
- **Annually:** Review and update bot permissions
- **As needed:** Add new channels based on community needs

### **Updates and Improvements**
- Monitor Slack API changes
- Update automation scripts
- Add new features based on community feedback
- Optimize channel structure

---

**🎯 Ready to automate your ZAG Collective Slack workspace!**

This automation will create a professional, organized community structure that supports the ZAG Matrix framework and serves "Alex, the Awakened Technologist" effectively. 