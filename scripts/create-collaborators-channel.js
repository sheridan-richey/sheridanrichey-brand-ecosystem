#!/usr/bin/env node

/**
 * Create Collaborators Channel Script for The ZAG Collective
 * 
 * Creates a private channel for team coordination and collaboration
 */

const { WebClient } = require('@slack/web-api');
require('dotenv').config();

class CollaboratorsChannelManager {
  constructor() {
    this.slack = new WebClient(process.env.SLACK_BOT_TOKEN);
    this.workspaceName = 'The ZAG Collective';
  }

  async createCollaboratorsChannel() {
    const channelName = 'collaborators';
    const channelPurpose = 'Private channel for team coordination, project planning, and collaboration';
    const channelTopic = 'Team coordination and project collaboration';

    try {
      console.log(`🏗️ Creating private channel: #${channelName}`);
      
      const result = await this.slack.conversations.create({
        name: channelName,
        is_private: true,
        topic: channelTopic,
        purpose: channelPurpose
      });

      if (result.ok) {
        console.log(`✅ Successfully created private channel: #${channelName}`);
        console.log(`   Channel ID: ${result.channel.id}`);
        console.log(`   Purpose: ${channelPurpose}`);
        console.log(`   Topic: ${channelTopic}`);
        return { success: true, channel: result.channel };
      }
      
    } catch (error) {
      if (error.message.includes('name_taken')) {
        console.log(`⚠️  Channel #${channelName} already exists`);
        return { success: false, error: 'Channel already exists' };
      } else {
        console.error(`❌ Error creating channel #${channelName}:`, error.message);
        return { success: false, error: error.message };
      }
    }
  }

  async postCollaboratorsWelcomeMessage(channelId) {
    const welcomeMessage = `🔧 **Welcome to #collaborators!**

This is our private team coordination channel for The ZAG Collective project.

## 🎯 **Purpose**
• **Project coordination** - Website updates, content planning, technical decisions
• **Team communication** - Quick questions, status updates, brainstorming
• **Resource sharing** - Links, documents, tools, and references
• **Strategy discussions** - Brand direction, community growth, future planning

## 👥 **Current Team**
• **Sheridan Richey** - Founder & Brand Strategist
• **Sean** - Technical Lead & Developer (joining soon)

## 📋 **Channel Guidelines**
• **Keep it focused** - This is for team coordination, not general chat
• **Use threads** - Keep main channel clean, use threads for detailed discussions
• **Share context** - Include relevant links, screenshots, or background info
• **Tag appropriately** - Use @sheridan or @sean for specific questions
• **Archive decisions** - Document important decisions and next steps

## 🚀 **Common Topics**
• Website development and deployment
• Content strategy and creation
• Community management and growth
• Technical infrastructure and tools
• Brand development and positioning
• Project timelines and milestones

## 📞 **Quick Actions**
• **Website issues**: Tag @sean for technical problems
• **Content questions**: Tag @sheridan for brand/strategy guidance
• **Urgent matters**: Use @here for immediate attention
• **General updates**: Post directly without tags

Let's build something amazing together! 🚀`;

    try {
      console.log(`📝 Posting welcome message to #collaborators`);
      
      const result = await this.slack.chat.postMessage({
        channel: channelId,
        text: welcomeMessage,
        unfurl_links: false
      });

      if (result.ok) {
        console.log(`✅ Posted welcome message to #collaborators`);
        return { success: true };
      }
      
    } catch (error) {
      console.error(`❌ Error posting welcome message:`, error.message);
      return { success: false, error: error.message };
    }
  }

  async inviteUserToChannel(channelId, userEmail) {
    try {
      console.log(`👤 Inviting ${userEmail} to #collaborators`);
      
      // First, get user ID from email
      const userResult = await this.slack.users.lookupByEmail({
        email: userEmail
      });

      if (!userResult.ok) {
        console.log(`⚠️  User ${userEmail} not found in workspace`);
        return { success: false, error: 'User not found' };
      }

      // Then invite to channel
      const inviteResult = await this.slack.conversations.invite({
        channel: channelId,
        users: userResult.user.id
      });

      if (inviteResult.ok) {
        console.log(`✅ Successfully invited ${userEmail} to #collaborators`);
        return { success: true };
      }
      
    } catch (error) {
      console.error(`❌ Error inviting ${userEmail}:`, error.message);
      return { success: false, error: error.message };
    }
  }

  async setupCollaboratorsChannel() {
    console.log('🔧 Setting up Collaborators Channel for The ZAG Collective...\n');
    
    // Step 1: Create the channel
    const createResult = await this.createCollaboratorsChannel();
    
    if (!createResult.success) {
      if (createResult.error === 'Channel already exists') {
        console.log('📋 Channel already exists, proceeding with setup...');
        // Try to find existing channel
        const listResult = await this.slack.conversations.list({
          types: 'private_channel'
        });
        
        if (listResult.ok) {
          const existingChannel = listResult.channels.find(ch => ch.name === 'collaborators');
          if (existingChannel) {
            console.log(`✅ Found existing channel: #${existingChannel.name} (${existingChannel.id})`);
            createResult.channel = existingChannel;
            createResult.success = true;
          }
        }
      } else {
        console.log('❌ Failed to create or find channel');
        return;
      }
    }

    if (createResult.success) {
      // Step 2: Post welcome message
      await this.postCollaboratorsWelcomeMessage(createResult.channel.id);
      
      // Step 3: Invite Sean (when ready)
      console.log('\n📧 **Next Steps:**');
      console.log('1. Get Sean\'s email address');
      console.log('2. Run: npm run slack:invite-sean [email]');
      console.log('3. Or manually invite Sean through Slack interface');
      
      console.log('\n🎉 Collaborators channel setup complete!');
      console.log(`   Channel: #collaborators`);
      console.log(`   ID: ${createResult.channel.id}`);
      console.log(`   Private: Yes`);
    }
  }
}

// CLI Interface
async function main() {
  const manager = new CollaboratorsChannelManager();
  
  const command = process.argv[2];
  const userEmail = process.argv[3];
  
  switch (command) {
    case 'setup':
      await manager.setupCollaboratorsChannel();
      break;
      
    case 'invite':
      if (!userEmail) {
        console.log('Usage: node scripts/create-collaborators-channel.js invite [email]');
        console.log('Example: node scripts/create-collaborators-channel.js invite sean@example.com');
        break;
      }
      
      // Find the collaborators channel
      const listResult = await manager.slack.conversations.list({
        types: 'private_channel'
      });
      
      if (listResult.ok) {
        const channel = listResult.channels.find(ch => ch.name === 'collaborators');
        if (channel) {
          await manager.inviteUserToChannel(channel.id, userEmail);
        } else {
          console.log('❌ Collaborators channel not found. Run setup first.');
        }
      }
      break;
      
    default:
      console.log('Usage: node scripts/create-collaborators-channel.js [command]');
      console.log('  setup           - Create collaborators channel and post welcome message');
      console.log('  invite [email]  - Invite user to collaborators channel');
      break;
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = CollaboratorsChannelManager; 