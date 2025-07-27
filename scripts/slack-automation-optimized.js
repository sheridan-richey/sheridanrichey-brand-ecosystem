#!/usr/bin/env node

/**
 * Optimized Slack Automation Script for The ZAG Collective
 * 
 * Streamlined channel structure focused on the 3 main ZAG Matrix pillars
 * to drive concentrated, meaningful discussions.
 */

const { WebClient } = require('@slack/web-api');
require('dotenv').config();

class OptimizedSlackAutomation {
  constructor() {
    this.slack = new WebClient(process.env.SLACK_BOT_TOKEN);
    this.workspaceName = 'The ZAG Collective';
  }

  // Streamlined ZAG Matrix channel configuration
  getOptimizedChannelConfig() {
    return {
      // Core ZAG Matrix pillars - THE MAIN FOCUS
      'zen-awaken': {
        description: 'Mental clarity, purpose, and resilience. Share breakthroughs in finding your path, ask questions about awakening to new possibilities, and support others in their mental clarity journey.',
        purpose: 'ZEN: Zeal Evolves Now - Mental clarity, purpose, and resilience',
        isPrivate: false
      },
      'act-align': {
        description: 'Physical well-being, relationships, and momentum. Building sustainable energy, strengthening key relationships, and creating momentum in your career and life.',
        purpose: 'ACT: Activate Core Thrust - Physical well-being, relationships, and momentum',
        isPrivate: false
      },
      'gem-achieve': {
        description: 'Strategic growth, investments, and mastery. Career moves, entrepreneurial ventures, and long-term strategic planning for achieving your goals.',
        purpose: 'GEM: Growth Earns Mastery - Strategic growth, investments, and mastery',
        isPrivate: false
      },
      
      // Essential community channels (minimal)
      'introductions': {
        description: 'Get to know your fellow Awakened Technologists. Share your background, current challenges, and what you hope to achieve through the ZAG Matrix framework.',
        purpose: 'Member introductions and community building',
        isPrivate: false
      },
      'wins-and-learnings': {
        description: 'Celebrate successes and share lessons learned from applying the ZAG Matrix. This is where we build each other up and learn from real-world applications.',
        purpose: 'Success stories and learning from ZAG Matrix experiences',
        isPrivate: false
      },
      'ask-sheridan': {
        description: 'Direct access to ask questions and get insights from my executive experience and ZAG Matrix expertise. For specific guidance on your journey.',
        purpose: 'Direct Q&A with Sheridan Richey',
        isPrivate: false
      }
    };
  }

  async cleanupExistingChannels() {
    console.log('🧹 Cleaning up existing channels...\n');
    
    const channelsToRemove = [
      'career-transitions',
      'entrepreneurial-journey', 
      'wellness-and-balance',
      'events-and-meetups'
    ];

    const results = {
      removed: [],
      errors: []
    };

    for (const channelName of channelsToRemove) {
      try {
        console.log(`🗑️  Attempting to archive: #${channelName}`);
        
        // Note: Slack doesn't allow programmatic deletion, only archiving
        // We'll set a clear topic indicating it's being consolidated
        const result = await this.slack.conversations.setTopic({
          channel: channelName,
          topic: `[CONSOLIDATED] This channel is being consolidated into the main ZAG Matrix pillars. Please move discussions to #zen-awaken, #act-align, or #gem-achieve as appropriate.`
        });

        if (result.ok) {
          console.log(`✅ Marked #${channelName} for consolidation`);
          results.removed.push(channelName);
        }
        
      } catch (error) {
        console.error(`❌ Error with #${channelName}:`, error.message);
        results.errors.push({ channel: channelName, error: error.message });
      }
    }

    return results;
  }

  async createOptimizedChannels() {
    console.log('🎯 Creating optimized ZAG Collective channels...\n');
    
    const channels = this.getOptimizedChannelConfig();
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

  async postConsolidationMessage() {
    const consolidationMessage = {
      channel: 'general', // or a specific channel
      text: "🎯 **ZAG Collective Channel Consolidation**\n\nWe've streamlined our channels to focus on the core ZAG Matrix pillars:\n\n**Core Pillars:**\n• #zen-awaken - Mental clarity, purpose, and resilience\n• #act-align - Physical well-being, relationships, and momentum\n• #gem-achieve - Strategic growth, investments, and mastery\n\n**Community Channels:**\n• #introductions - Get to know each other\n• #wins-and-learnings - Share successes and learnings\n• #ask-sheridan - Direct Q&A\n\n**Why This Change?**\nWe're consolidating to drive more focused, meaningful discussions around the ZAG Matrix framework. This will help us build deeper connections and provide more targeted support.\n\n**What to do:**\n• Career transition discussions → #act-align or #gem-achieve\n• Wellness topics → #act-align\n• Entrepreneurial discussions → #gem-achieve\n• General community chat → #introductions or #wins-and-learnings\n\nLet's make the most of these focused spaces! 🚀"
    };

    try {
      await this.slack.chat.postMessage(consolidationMessage);
      console.log('✅ Posted consolidation message');
    } catch (error) {
      console.error('❌ Error posting consolidation message:', error.message);
    }
  }

  async listOptimizedChannels() {
    console.log('📋 Listing optimized channels...\n');
    
    try {
      const result = await this.slack.conversations.list({
        types: 'public_channel,private_channel'
      });

      if (result.ok) {
        const optimizedChannels = ['zen-awaken', 'act-align', 'gem-achieve', 'introductions', 'wins-and-learnings', 'ask-sheridan'];
        
        console.log('🎯 **Optimized ZAG Collective Structure:**\n');
        
        result.channels.forEach(channel => {
          if (optimizedChannels.includes(channel.name)) {
            console.log(`✅ #${channel.name} (${channel.is_private ? 'private' : 'public'})`);
            if (channel.topic?.value) {
              console.log(`   Topic: ${channel.topic.value}`);
            }
          }
        });
        
        console.log('\n📊 **Channel Consolidation Summary:**');
        console.log('• 3 Core ZAG Matrix pillars for focused discussions');
        console.log('• 3 Essential community channels for support');
        console.log('• Total: 6 channels (down from 11)');
        console.log('• Focus: Deeper, more meaningful conversations');
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
  const automation = new OptimizedSlackAutomation();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'consolidate':
      console.log('🎯 Starting ZAG Collective channel consolidation...\n');
      
      // Step 1: Clean up existing channels
      const cleanupResults = await automation.cleanupExistingChannels();
      
      // Step 2: Create optimized channels (will skip existing ones)
      const createResults = await automation.createOptimizedChannels();
      
      // Step 3: Post consolidation message
      await automation.postConsolidationMessage();
      
      console.log('\n📊 Consolidation Results:');
      console.log(`✅ Channels marked for consolidation: ${cleanupResults.removed.length}`);
      console.log(`✅ Optimized channels ready: ${createResults.created.length + createResults.existing.length}`);
      console.log(`❌ Errors: ${cleanupResults.errors.length + createResults.errors.length}`);
      
      break;
      
    case 'list':
      await automation.listOptimizedChannels();
      break;
      
    case 'cleanup':
      await automation.cleanupExistingChannels();
      break;
      
    default:
      console.log('🎯 Optimized ZAG Collective Slack Automation\n');
      console.log('Usage:');
      console.log('  node slack-automation-optimized.js consolidate  - Consolidate to 6 focused channels');
      console.log('  node slack-automation-optimized.js list        - List optimized channels');
      console.log('  node slack-automation-optimized.js cleanup     - Mark channels for consolidation');
      console.log('\nOptimized Channel Structure:');
      console.log('  Core ZAG Matrix: #zen-awaken, #act-align, #gem-achieve');
      console.log('  Community: #introductions, #wins-and-learnings, #ask-sheridan');
      break;
  }
}

// Run the script
if (require.main === module) {
  main().catch(console.error);
}

module.exports = OptimizedSlackAutomation; 