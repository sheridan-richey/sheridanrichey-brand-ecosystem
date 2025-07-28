#!/usr/bin/env node

/**
 * Check and Invite to Collaborators Channel
 * 
 * Checks if you're in the collaborators channel and invites you if needed
 */

const { WebClient } = require('@slack/web-api');
require('dotenv').config();

class CollaboratorsChannelChecker {
  constructor() {
    this.slack = new WebClient(process.env.SLACK_BOT_TOKEN);
  }

  async checkAndInviteToCollaborators() {
    try {
      console.log('🔍 Checking collaborators channel access...\n');
      
      // Get your user info
      const authTest = await this.slack.auth.test();
      const currentUserId = authTest.user_id;
      const currentUserEmail = authTest.user;
      
      console.log(`👤 Current user: ${currentUserEmail} (${currentUserId})`);
      
      // Find the collaborators channel
      const listResult = await this.slack.conversations.list({
        types: 'private_channel'
      });
      
      if (!listResult.ok) {
        console.log('❌ Could not list private channels');
        return;
      }
      
      const collaboratorsChannel = listResult.channels.find(ch => ch.name === 'collaborators');
      
      if (!collaboratorsChannel) {
        console.log('❌ Collaborators channel not found');
        return;
      }
      
      console.log(`📋 Found collaborators channel: #${collaboratorsChannel.name} (${collaboratorsChannel.id})`);
      
      // Check if you're a member
      const membersResult = await this.slack.conversations.members({
        channel: collaboratorsChannel.id
      });
      
      if (!membersResult.ok) {
        console.log('❌ Could not check channel members');
        return;
      }
      
      const isMember = membersResult.members.includes(currentUserId);
      
      if (isMember) {
        console.log('✅ You are already a member of #collaborators');
        console.log('   You should be able to see it in your Slack sidebar');
      } else {
        console.log('❌ You are not a member of #collaborators');
        console.log('🤖 Attempting to invite you...');
        
        try {
          const inviteResult = await this.slack.conversations.invite({
            channel: collaboratorsChannel.id,
            users: currentUserId
          });
          
          if (inviteResult.ok) {
            console.log('✅ Successfully invited you to #collaborators');
            console.log('   Refresh your Slack app to see the channel');
          } else {
            console.log('❌ Failed to invite you to the channel');
          }
        } catch (error) {
          console.log(`❌ Error inviting you: ${error.message}`);
          console.log('💡 You may need to manually join the channel in Slack');
        }
      }
      
    } catch (error) {
      console.error('❌ Error checking collaborators channel:', error.message);
    }
  }
}

// Run the check
async function main() {
  const checker = new CollaboratorsChannelChecker();
  await checker.checkAndInviteToCollaborators();
}

if (require.main === module) {
  main().catch(console.error);
} 