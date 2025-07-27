#!/usr/bin/env node

/**
 * Slack Automation Script for The ZAG Collective
 * 
 * This script automates the creation and management of Slack channels
 * for The ZAG Collective workspace based on the ZAG Matrix framework.
 */

const { WebClient } = require('@slack/web-api');
require('dotenv').config();

class SlackAutomation {
  constructor() {
    this.slack = new WebClient(process.env.SLACK_BOT_TOKEN);
    this.workspaceName = 'The ZAG Collective';
  }

  // ZAG Matrix channel configuration
  getChannelConfig() {
    return {
      // Core ZAG Matrix channels
      'zen-awaken': {
        description: 'Discussions on finding clarity and awakening to a new path. Share breakthroughs, ask questions, and support others in their mental clarity journey.',
        purpose: 'Mental clarity, purpose, and resilience through the ZEN framework',
        isPrivate: false
      },
      'act-align': {
        description: 'Building momentum and aligning your life. Physical well-being, relationship building, and creating sustainable momentum in your career and life.',
        purpose: 'Physical well-being, relationships, and momentum through the ACT framework',
        isPrivate: false
      },
      'gem-achieve': {
        description: 'Strategic growth and achieving your goals. Career moves, investments, entrepreneurial ventures, and long-term strategic planning.',
        purpose: 'Strategic growth, investments, and mastery through the GEM framework',
        isPrivate: false
      },
      
      // Community channels
      'introductions': {
        description: 'Get to know your fellow Awakened Technologists. Share your background, current challenges, and what you hope to achieve through the community.',
        purpose: 'Member introductions and community building',
        isPrivate: false
      },
      'wins-and-learnings': {
        description: 'Celebrate successes and share lessons learned. This is where we build each other up and learn from real-world applications of the ZAG Matrix.',
        purpose: 'Success stories and learning from experiences',
        isPrivate: false
      },
      'ask-sheridan': {
        description: 'Direct access to ask questions and get insights from my executive experience and ZAG Matrix expertise.',
        purpose: 'Direct Q&A with Sheridan Richey',
        isPrivate: false
      },
      
      // Specialized channels
      'career-transitions': {
        description: 'Support and guidance for mid-career professionals navigating transitions. Share experiences, ask for advice, and celebrate milestones.',
        purpose: 'Career transition support and guidance',
        isPrivate: false
      },
      'entrepreneurial-journey': {
        description: 'For those exploring or building entrepreneurial ventures. Share ideas, challenges, and victories in the entrepreneurial space.',
        purpose: 'Entrepreneurial growth and support',
        isPrivate: false
      },
      'wellness-and-balance': {
        description: 'Physical and mental wellness strategies. Share tips, challenges, and support for maintaining balance in demanding careers.',
        purpose: 'Wellness and work-life balance',
        isPrivate: false
      },
      
      // Resource channels
      'resources': {
        description: 'Share helpful resources, tools, books, and articles that support the ZAG Matrix framework and personal growth.',
        purpose: 'Resource sharing and recommendations',
        isPrivate: false
      },
      'events-and-meetups': {
        description: 'Announcements for community events, virtual meetups, webinars, and networking opportunities.',
        purpose: 'Event coordination and announcements',
        isPrivate: false
      }
    };
  }

  async createChannels() {
    console.log('🚀 Creating Slack channels for The ZAG Collective...\n');
    
    const channels = this.getChannelConfig();
    const results = {
      created: [],
      existing: [],
      errors: []
    };

    for (const [channelName, config] of Object.entries(channels)) {
      try {
        console.log(`📝 Creating channel: #${channelName}`);
        
        const result = await this.slack.conversations.create({
          name: channelName,
          is_private: config.isPrivate,
          topic: config.purpose,
          purpose: config.description
        });

        if (result.ok) {
          console.log(`✅ Created: #${channelName}`);
          results.created.push(channelName);
          
          // Set channel description
          await this.slack.conversations.setTopic({
            channel: result.channel.id,
            topic: config.purpose
          });
          
          await this.slack.conversations.setPurpose({
            channel: result.channel.id,
            purpose: config.description
          });
          
        } else {
          console.log(`⚠️  Channel already exists: #${channelName}`);
          results.existing.push(channelName);
        }
        
      } catch (error) {
        console.error(`❌ Error creating #${channelName}:`, error.message);
        results.errors.push({ channel: channelName, error: error.message });
      }
    }

    return results;
  }

  async listChannels() {
    console.log('📋 Listing existing channels...\n');
    
    try {
      const result = await this.slack.conversations.list({
        types: 'public_channel,private_channel'
      });

      if (result.ok) {
        console.log('Current channels:');
        result.channels.forEach(channel => {
          console.log(`- #${channel.name} (${channel.is_private ? 'private' : 'public'})`);
          if (channel.topic?.value) {
            console.log(`  Topic: ${channel.topic.value}`);
          }
        });
      }
      
      return result.channels;
    } catch (error) {
      console.error('❌ Error listing channels:', error.message);
      return [];
    }
  }

  async inviteUsersToChannels(userIds, channelNames) {
    console.log('👥 Inviting users to channels...\n');
    
    const results = {
      invited: [],
      errors: []
    };

    for (const channelName of channelNames) {
      try {
        const result = await this.slack.conversations.invite({
          channel: channelName,
          users: userIds.join(',')
        });

        if (result.ok) {
          console.log(`✅ Invited users to #${channelName}`);
          results.invited.push(channelName);
        } else {
          console.log(`⚠️  Could not invite to #${channelName}: ${result.error}`);
          results.errors.push({ channel: channelName, error: result.error });
        }
      } catch (error) {
        console.error(`❌ Error inviting to #${channelName}:`, error.message);
        results.errors.push({ channel: channelName, error: error.message });
      }
    }

    return results;
  }

  async createWelcomeMessage(channelId) {
    const welcomeMessage = {
      channel: channelId,
      text: "Welcome to The ZAG Collective! 🎉\n\nThis is where Awakened Technologists come together to apply the ZAG Matrix framework in their lives and careers.\n\n**Quick Start Guide:**\n• Introduce yourself in #introductions\n• Explore the ZAG Matrix channels (#zen-awaken, #act-align, #gem-achieve)\n• Share wins and learnings in #wins-and-learnings\n• Ask questions in #ask-sheridan\n\n**Community Guidelines:**\n• Be professional but approachable\n• Share your experiences and insights\n• Support others in their journey\n• Connect everything back to the ZAG Matrix framework\n\nLooking forward to seeing you in the community!"
    };

    try {
      await this.slack.chat.postMessage(welcomeMessage);
      console.log('✅ Posted welcome message');
    } catch (error) {
      console.error('❌ Error posting welcome message:', error.message);
    }
  }

  async generateInvitationLink() {
    try {
      const result = await this.slack.admin.inviteRequests.approve({
        invite_request_id: 'your_invite_request_id' // This would need to be dynamic
      });
      
      if (result.ok) {
        console.log('✅ Generated invitation link');
        return result.invite_request;
      }
    } catch (error) {
      console.error('❌ Error generating invitation link:', error.message);
    }
  }
}

// CLI Interface
async function main() {
  const automation = new SlackAutomation();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'create':
      console.log('🎯 Creating ZAG Collective channels...\n');
      const results = await automation.createChannels();
      
      console.log('\n📊 Results:');
      console.log(`✅ Created: ${results.created.length} channels`);
      console.log(`⚠️  Existing: ${results.existing.length} channels`);
      console.log(`❌ Errors: ${results.errors.length} channels`);
      
      if (results.created.length > 0) {
        console.log('\n🎉 Successfully created channels:');
        results.created.forEach(channel => console.log(`  - #${channel}`));
      }
      
      if (results.errors.length > 0) {
        console.log('\n❌ Errors encountered:');
        results.errors.forEach(error => {
          console.log(`  - #${error.channel}: ${error.error}`);
        });
      }
      break;
      
    case 'list':
      await automation.listChannels();
      break;
      
    case 'invite':
      const userIds = process.argv[3]?.split(',') || [];
      const channelNames = process.argv[4]?.split(',') || [];
      
      if (userIds.length === 0 || channelNames.length === 0) {
        console.log('Usage: node slack-automation.js invite "user1,user2" "channel1,channel2"');
        process.exit(1);
      }
      
      await automation.inviteUsersToChannels(userIds, channelNames);
      break;
      
    default:
      console.log('🚀 ZAG Collective Slack Automation\n');
      console.log('Usage:');
      console.log('  node slack-automation.js create    - Create all ZAG Matrix channels');
      console.log('  node slack-automation.js list      - List existing channels');
      console.log('  node slack-automation.js invite    - Invite users to channels');
      console.log('\nEnvironment Variables Required:');
      console.log('  SLACK_BOT_TOKEN - Your Slack bot token with appropriate permissions');
      break;
  }
}

// Run the script
if (require.main === module) {
  main().catch(console.error);
}

module.exports = SlackAutomation; 