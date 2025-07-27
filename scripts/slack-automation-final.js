#!/usr/bin/env node

/**
 * Final Optimized Slack Automation Script for The ZAG Collective
 * 
 * Streamlined to 4 channels: 3 core ZAG Matrix pillars + 1 general
 * Introductions → ACT (network building)
 * Wins & Learnings → GEM (mastery)
 * No dedicated ask channel (use DMs)
 */

const { WebClient } = require('@slack/web-api');
require('dotenv').config();

class FinalSlackAutomation {
  constructor() {
    this.slack = new WebClient(process.env.SLACK_BOT_TOKEN);
    this.workspaceName = 'The ZAG Collective';
  }

  async findChannelByName(channelName) {
    try {
      const result = await this.slack.conversations.list({
        types: 'public_channel,private_channel'
      });

      if (result.ok) {
        return result.channels.find(channel => channel.name === channelName);
      }
    } catch (error) {
      console.error(`❌ Error finding channel #${channelName}:`, error.message);
    }
    return null;
  }

  async updateChannelWithNewPurpose(channelName, newTopic, newPurpose) {
    const channel = await this.findChannelByName(channelName);
    
    if (!channel) {
      console.log(`⚠️  Channel #${channelName} not found, skipping...`);
      return { success: false, error: 'Channel not found' };
    }

    try {
      console.log(`📝 Updating: #${channelName}`);
      
      // Update topic
      await this.slack.conversations.setTopic({
        channel: channel.id,
        topic: newTopic
      });
      
      // Update purpose
      await this.slack.conversations.setPurpose({
        channel: channel.id,
        purpose: newPurpose
      });

      console.log(`✅ Updated: #${channelName}`);
      return { success: true };
      
    } catch (error) {
      console.error(`❌ Error updating #${channelName}:`, error.message);
      return { success: false, error: error.message };
    }
  }

  async markChannelForConsolidation(channelName, consolidationMessage) {
    const channel = await this.findChannelByName(channelName);
    
    if (!channel) {
      console.log(`⚠️  Channel #${channelName} not found, skipping...`);
      return { success: false, error: 'Channel not found' };
    }

    try {
      console.log(`🗑️  Marking for consolidation: #${channelName}`);
      
      const result = await this.slack.conversations.setTopic({
        channel: channel.id,
        topic: consolidationMessage
      });

      if (result.ok) {
        console.log(`✅ Marked #${channelName} for consolidation`);
        return { success: true };
      }
      
    } catch (error) {
      console.error(`❌ Error with #${channelName}:`, error.message);
      return { success: false, error: error.message };
    }
  }

  async executeFinalStructure() {
    console.log('🎯 Executing ZAG Collective Final Structure (4 channels)...\n');
    
    const results = {
      consolidated: [],
      updated: [],
      errors: []
    };

    // Step 1: Mark channels for consolidation
    const channelsToConsolidate = [
      {
        name: 'career-transitions',
        message: '[CONSOLIDATED] This channel is being consolidated into #act-align or #gem-achieve. Career transitions involve both momentum (ACT) and strategic planning (GEM). Please move discussions to the appropriate ZAG Matrix pillar.'
      },
      {
        name: 'wellness-and-balance', 
        message: '[CONSOLIDATED] This channel is being consolidated into #act-align. Wellness is core to physical well-being and relationships. Please move wellness discussions to #act-align.'
      },
      {
        name: 'resources',
        message: '[CONSOLIDATED] This channel is being consolidated. Resources can be shared in the relevant ZAG Matrix pillar channels (#zen-awaken, #act-align, #gem-achieve) where they apply.'
      },
      {
        name: 'introductions',
        message: '[CONSOLIDATED] This channel is being consolidated into #act-align. Introductions are now part of building relationships and momentum. Please move introductions to #act-align.'
      }
    ];

    for (const channel of channelsToConsolidate) {
      const result = await this.markChannelForConsolidation(channel.name, channel.message);
      if (result.success) {
        results.consolidated.push(channel.name);
      } else {
        results.errors.push({ channel: channel.name, error: result.error });
      }
    }

    // Step 2: Update core channels with integrated purposes
    const coreChannelUpdates = [
      {
        name: 'act-align',
        topic: 'ACT: Relationships, momentum + Introductions',
        purpose: 'Physical well-being, relationships, and momentum. Building sustainable energy, strengthening key relationships, and creating momentum in your career and life. **Introduce yourself here** - this is where we build our network and extend ourselves into the community.'
      },
      {
        name: 'gem-achieve',
        topic: 'GEM: Growth Earns Mastery - Strategic growth, investments, mastery + Wins & Learnings',
        purpose: 'Strategic growth, investments, and mastery. Career moves, entrepreneurial ventures, and long-term strategic planning for achieving your goals. **Share your wins and learnings here** - this is where we celebrate growth and mastery.'
      }
    ];

    for (const update of coreChannelUpdates) {
      const result = await this.updateChannelWithNewPurpose(update.name, update.topic, update.purpose);
      if (result.success) {
        results.updated.push(update.name);
      } else {
        results.errors.push({ channel: update.name, error: result.error });
      }
    }

    // Step 3: Post consolidation message to general channel
    await this.postFinalConsolidationMessage();

    return results;
  }

  async postFinalConsolidationMessage() {
    // Try to post to zen-awaken channel since the bot should be in it
    const zenChannel = await this.findChannelByName('zen-awaken');
    
    if (!zenChannel) {
      console.log('⚠️  Zen channel not found, skipping announcement...');
      return;
    }

    const consolidationMessage = {
      channel: zenChannel.id,
      text: "🎯 **ZAG Collective Final Structure - 4 Channels**\n\nWe've streamlined to focus on the core ZAG Matrix pillars with integrated community elements:\n\n**Core ZAG Matrix Pillars:**\n• #zen-awaken - Mental clarity, purpose, and resilience\n• #act-align - Physical well-being, relationships, momentum + **Introductions**\n• #gem-achieve - Strategic growth, investments, mastery + **Wins & Learnings**\n• #all-the-zag-collective - General community discussions\n\n**Why This Structure?**\n• **Introductions → ACT**: Network building is core to relationships and momentum\n• **Wins → GEM**: Success stories demonstrate growth and mastery\n• **No ask channel**: DMs are more personal for direct questions\n• **Community-first**: Encourages peer-to-peer support\n\n**What to do:**\n• Introduce yourself in #act-align (network building)\n• Share wins and learnings in #gem-achieve (mastery)\n• Ask direct questions via DM\n• General chat in #all-the-zag-collective\n\nThis creates deeper, more focused discussions while maintaining community connection! 🚀"
    };

    try {
      await this.slack.chat.postMessage(consolidationMessage);
      console.log('✅ Posted final consolidation message to #zen-awaken');
    } catch (error) {
      console.error('❌ Error posting consolidation message:', error.message);
    }
  }

  async listFinalStructure() {
    console.log('📋 Listing final optimized structure...\n');
    
    try {
      const result = await this.slack.conversations.list({
        types: 'public_channel,private_channel'
      });

      if (result.ok) {
        const finalChannels = ['zen-awaken', 'act-align', 'gem-achieve', 'all-the-zag-collective'];
        
        console.log('🎯 **Final ZAG Collective Structure (4 Channels):**\n');
        
        result.channels.forEach(channel => {
          if (finalChannels.includes(channel.name)) {
            console.log(`✅ #${channel.name} (${channel.is_private ? 'private' : 'public'})`);
            if (channel.topic?.value) {
              console.log(`   Topic: ${channel.topic.value}`);
            }
          }
        });
        
        console.log('\n📊 **Final Structure Summary:**');
        console.log('• 3 Core ZAG Matrix pillars with integrated community elements');
        console.log('• 1 General community channel');
        console.log('• Total: 4 channels (down from 11)');
        console.log('• Focus: Deeper, more meaningful conversations with clear purpose');
        console.log('• Introductions → ACT (network building)');
        console.log('• Wins & Learnings → GEM (mastery)');
        console.log('• Direct Q&A → DMs');
      }
      
      return result.channels;
    } catch (error) {
      console.error('❌ Error listing channels:', error.message);
      return [];
    }
  }
}

// CLI Interface
async function main() {
  const automation = new FinalSlackAutomation();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'finalize':
      const results = await automation.executeFinalStructure();
      
      console.log('\n📊 Finalization Results:');
      console.log(`✅ Channels marked for consolidation: ${results.consolidated.length}`);
      console.log(`✅ Core channels updated: ${results.updated.length}`);
      console.log(`❌ Errors: ${results.errors.length}`);
      
      if (results.consolidated.length > 0) {
        console.log('\n🎉 Successfully marked for consolidation:');
        results.consolidated.forEach(channel => console.log(`  - #${channel}`));
      }
      
      if (results.updated.length > 0) {
        console.log('\n🎉 Successfully updated core channels:');
        results.updated.forEach(channel => console.log(`  - #${channel}`));
      }
      
      if (results.errors.length > 0) {
        console.log('\n❌ Errors encountered:');
        results.errors.forEach(error => {
          console.log(`  - #${error.channel}: ${error.error}`);
        });
      }
      
      break;
      
    case 'list':
      await automation.listFinalStructure();
      break;
      
    default:
      console.log('🎯 Final ZAG Collective Slack Automation (4 Channels)\n');
      console.log('Usage:');
      console.log('  node slack-automation-final.js finalize  - Execute final 4-channel structure');
      console.log('  node slack-automation-final.js list     - List final structure');
      console.log('\nFinal Channel Structure:');
      console.log('  Core ZAG Matrix: #zen-awaken, #act-align, #gem-achieve');
      console.log('  Community: #all-the-zag-collective');
      console.log('  Introductions → ACT (network building)');
      console.log('  Wins & Learnings → GEM (mastery)');
      console.log('  Direct Q&A → DMs');
      break;
  }
}

// Run the script
if (require.main === module) {
  main().catch(console.error);
}

module.exports = FinalSlackAutomation; 