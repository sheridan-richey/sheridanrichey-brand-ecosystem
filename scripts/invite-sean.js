#!/usr/bin/env node

/**
 * Invite Sean Hokanson to The ZAG Collective Slack Workspace
 * 
 * Sends an invitation email to Sean to join The ZAG Collective Slack workspace
 */

const { WebClient } = require('@slack/web-api');
require('dotenv').config();

class SeanInviter {
  constructor() {
    this.slack = new WebClient(process.env.SLACK_BOT_TOKEN);
  }

  async inviteSeanToWorkspace() {
    try {
      console.log('👤 Inviting Sean Hokanson to The ZAG Collective...\n');
      
      // Sean's email address
      const seanEmail = 'sean.hokanson@gmail.com'; // Sean's actual email
      
      console.log(`📧 Sending invitation to: ${seanEmail}`);
      
      // Send workspace invitation
      const inviteResult = await this.slack.admin.users.invite({
        email: seanEmail,
        channel_ids: '', // Will be added to default channels
        real_name: 'Sean Hokanson',
        resend: true // Resend invitation if already sent
      });
      
      if (inviteResult.ok) {
        console.log('✅ Successfully sent invitation to Sean!');
        console.log('📧 Check Sean\'s email for the invitation link');
        console.log('💡 Sean will need to click the link to join the workspace');
        
        // Provide additional information
        console.log('\n📋 Next Steps:');
        console.log('1. Sean will receive an email invitation');
        console.log('2. He should click the "Join The ZAG Collective" link');
        console.log('3. He\'ll be added to the default channels:');
        console.log('   - #zen-awaken (Mental clarity, purpose, resilience)');
        console.log('   - #act-align (Relationships, momentum + Introductions)');
        console.log('   - #gem-achieve (Strategic growth, investments, mastery)');
        console.log('   - #all-the-zag-collective (General community discussions)');
        console.log('4. He should introduce himself in #act-align');
        
      } else {
        console.log('❌ Failed to send invitation');
        console.log('Error:', inviteResult.error);
      }
      
    } catch (error) {
      console.error('❌ Error inviting Sean:', error.message);
      
      if (error.message.includes('already_invited')) {
        console.log('✅ Sean has already been invited to the workspace');
        console.log('📧 Check if he received the invitation email');
        console.log('💡 You can resend the invitation if needed');
      } else if (error.message.includes('already_in_team')) {
        console.log('✅ Sean is already a member of The ZAG Collective');
        console.log('🔍 You can look him up in the workspace');
      } else if (error.message.includes('invalid_email')) {
        console.log('❌ Invalid email address');
        console.log('💡 Please check Sean\'s email address and try again');
      } else if (error.message.includes('not_authed')) {
        console.log('❌ Bot token not authorized for admin actions');
        console.log('💡 Check your SLACK_BOT_TOKEN permissions');
      }
    }
  }

  async checkWorkspaceInfo() {
    try {
      console.log('🔍 Checking workspace information...\n');
      
      const teamInfo = await this.slack.team.info();
      
      if (teamInfo.ok) {
        console.log(`🏢 Workspace: ${teamInfo.team.name}`);
        console.log(`🌐 Domain: ${teamInfo.team.domain}`);
        console.log(`👥 Members: ${teamInfo.team.num_members}`);
        console.log(`🔗 Invite URL: https://${teamInfo.team.domain}.slack.com`);
      }
      
    } catch (error) {
      console.error('❌ Error getting workspace info:', error.message);
    }
  }
}

// Run the invite
async function main() {
  const inviter = new SeanInviter();
  
  // Check workspace info first
  await inviter.checkWorkspaceInfo();
  console.log('\n' + '='.repeat(50) + '\n');
  
  // Send invitation
  await inviter.inviteSeanToWorkspace();
}

if (require.main === module) {
  main().catch(console.error);
} 