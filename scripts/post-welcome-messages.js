#!/usr/bin/env node

/**
 * Post Welcome Messages Script for The ZAG Collective
 * 
 * Posts welcome messages to all channels in the ZAG Collective
 */

const { WebClient } = require('@slack/web-api');
require('dotenv').config();

class WelcomeMessagePoster {
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

  async postWelcomeMessage(channelName, message) {
    const channel = await this.findChannelByName(channelName);
    
    if (!channel) {
      console.log(`⚠️  Channel #${channelName} not found, skipping...`);
      return { success: false, error: 'Channel not found' };
    }

    try {
      console.log(`📝 Posting welcome message to: #${channelName}`);
      
      const result = await this.slack.chat.postMessage({
        channel: channel.id,
        text: message,
        unfurl_links: false
      });

      if (result.ok) {
        console.log(`✅ Posted welcome message to #${channelName}`);
        return { success: true };
      }
      
    } catch (error) {
      console.error(`❌ Error posting to #${channelName}:`, error.message);
      return { success: false, error: error.message };
    }
  }

  async postAllWelcomeMessages() {
    console.log('🎉 Posting Welcome Messages to The ZAG Collective...\n');
    
    const messages = {
      'all-the-zag-collective': `🎉 **Welcome to The ZAG Collective!**

You've joined a community of Awakened Technologists who are applying the ZAG Matrix framework to transform their careers and lives.

## 🏗️ **Our Structure (4 Channels)**

**Core ZAG Matrix Pillars:**
• #zen-awaken - Mental clarity, purpose, and resilience
• #act-align - Relationships, momentum + **Introductions**
• #gem-achieve - Strategic growth, investments, mastery + **Wins & Learnings**
• #all-the-zag-collective - General community discussions

## 🚀 **Getting Started**

1. **Introduce yourself in #act-align** - Tell us about your journey and what you hope to achieve
2. **Share wins and learnings in #gem-achieve** - Celebrate your growth and help others learn
3. **Ask questions via DM** - Direct questions to @sheridan for personalized guidance
4. **Engage in discussions** - Share insights, ask questions, and support others

## 🎯 **Community Guidelines**

• **Be professional but approachable** - We're building meaningful connections
• **Connect everything to the ZAG Matrix** - How does this relate to ZEN, ACT, or GEM?
• **Share specific examples** - Real experiences help everyone learn
• **Support others** - We're all on this journey together
• **Use DMs for direct questions** - Keep the main channels focused on community discussions

## 💡 **The ZAG Matrix Framework**

**ZEN (Zeal Evolves Now)**: Finding clarity, purpose, and mental resilience
**ACT (Activate Core Thrust)**: Building physical well-being, relationships, and momentum  
**GEM (Growth Earns Mastery)**: Strategic moves, investments, and entrepreneurial growth

## 📞 **Need Help?**

• **Quick questions**: DM @sheridan
• **Technical issues**: Post in #all-the-zag-collective
• **Framework questions**: Ask in the relevant pillar channel
• **General discussion**: Use #all-the-zag-collective

## 🎉 **Welcome to the Community!**

We're excited to have you here. Let's build something amazing together! 🚀`,

      'zen-awaken': `🧘 **Welcome to #zen-awaken!**

This is where we explore mental clarity, purpose, and resilience through the ZEN framework.

**Share here:**
• Breakthroughs in finding your path
• Questions about awakening to new possibilities
• Support for others in their mental clarity journey
• Meditation, mindfulness, and purpose-finding insights

**Remember:** ZEN is about "Zeal Evolves Now" - how are you evolving your mindset and finding clarity?`,

      'act-align': `💪 **Welcome to #act-align!**

This is where we build relationships, momentum, and physical well-being through the ACT framework.

**Share here:**
• **Introduce yourself** - Tell us about your journey
• Relationship building strategies
• Physical well-being and energy management
• Momentum-building techniques
• Network expansion and community building

**Remember:** ACT is about "Activate Core Thrust" - how are you building sustainable energy and relationships?`,

      'gem-achieve': `🏆 **Welcome to #gem-achieve!**

This is where we celebrate strategic growth, investments, and mastery through the GEM framework.

**Share here:**
• **Wins and learnings** - Celebrate your achievements
• Career moves and strategic decisions
• Investment insights and opportunities
• Entrepreneurial ventures and growth
• Long-term planning and mastery development

**Remember:** GEM is about "Growth Earns Mastery" - how are you strategically growing and achieving mastery?`
    };

    const results = {
      posted: [],
      errors: []
    };

    for (const [channelName, message] of Object.entries(messages)) {
      const result = await this.postWelcomeMessage(channelName, message);
      
      if (result.success) {
        results.posted.push(channelName);
      } else {
        results.errors.push({ channel: channelName, error: result.error });
      }
      
      // Small delay between messages
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    return results;
  }
}

// CLI Interface
async function main() {
  const poster = new WelcomeMessagePoster();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'post':
      const results = await poster.postAllWelcomeMessages();
      
      console.log('\n📊 Welcome Message Results:');
      console.log(`✅ Messages posted: ${results.posted.length}`);
      console.log(`❌ Errors: ${results.errors.length}`);
      
      if (results.posted.length > 0) {
        console.log('\n🎉 Successfully posted to:');
        results.posted.forEach(channel => console.log(`  - #${channel}`));
      }
      
      if (results.errors.length > 0) {
        console.log('\n❌ Errors encountered:');
        results.errors.forEach(error => {
          console.log(`  - #${error.channel}: ${error.error}`);
        });
      }
      
      break;
      
    default:
      console.log('Usage: node scripts/post-welcome-messages.js post');
      console.log('  post  - Post welcome messages to all channels');
      break;
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = WelcomeMessagePoster; 