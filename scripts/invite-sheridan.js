#!/usr/bin/env node

/**
 * Invite Sheridan to Collaborators Channel
 * 
 * Invites Sheridan to the private collaborators channel
 */

const { WebClient } = require('@slack/web-api');
require('dotenv').config();

class SheridanInviter {
  constructor() {
    this.slack = new WebClient(process.env.SLACK_BOT_TOKEN);
  }

  async inviteSheridanToCollaborators() {
    try {
      console.log('👤 Inviting Sheridan to #collaborators...\n');
      
      // Sheridan's email (you can change this if needed)
      const sheridanEmail = 'sheridan@sheridanrichey.com';
      
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
      
      // Get Sheridan's user ID from email
      console.log(`🔍 Looking up user: ${sheridanEmail}`);
      
      const userResult = await this.slack.users.lookupByEmail({
        email: sheridanEmail
      });
      
      if (!userResult.ok) {
        console.log(`❌ User ${sheridanEmail} not found in workspace`);
        console.log('💡 Make sure you\'re using the same email address you used to join the Slack workspace');
        return;
      }
      
      const sheridanUserId = userResult.user.id;
      console.log(`✅ Found Sheridan: ${userResult.user.real_name} (${sheridanUserId})`);
      
      // Check if already a member
      const membersResult = await this.slack.conversations.members({
        channel: collaboratorsChannel.id
      });
      
      if (membersResult.ok && membersResult.members.includes(sheridanUserId)) {
        console.log('✅ Sheridan is already a member of #collaborators');
        console.log('   You should be able to see it in your Slack sidebar');
        return;
      }
      
      // Invite to channel
      console.log('🤖 Inviting Sheridan to #collaborators...');
      
      const inviteResult = await this.slack.conversations.invite({
        channel: collaboratorsChannel.id,
        users: sheridanUserId
      });
      
      if (inviteResult.ok) {
        console.log('✅ Successfully invited Sheridan to #collaborators');
        console.log('   Refresh your Slack app to see the channel');
        console.log('   Look for "#collaborators" in your channel list');
      } else {
        console.log('❌ Failed to invite Sheridan to the channel');
      }
      
    } catch (error) {
      console.error('❌ Error inviting Sheridan:', error.message);
      
      if (error.message.includes('already_in_channel')) {
        console.log('✅ Sheridan is already in the channel');
      } else if (error.message.includes('user_not_found')) {
        console.log('💡 Try using a different email address or check your Slack workspace membership');
      }
    }
  }
}

// Run the invite
async function main() {
  const inviter = new SheridanInviter();
  await inviter.inviteSheridanToCollaborators();
}

if (require.main === module) {
  main().catch(console.error);
} 