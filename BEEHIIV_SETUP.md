# Beehiiv Newsletter Integration Setup

This guide will help you set up the Beehiiv integration for the ZAG Community newsletter.

## Prerequisites

1. A Beehiiv account (sign up at [beehiiv.com](https://beehiiv.com))
2. A publication created in Beehiiv
3. Access to your Vercel environment variables

## Step 1: Create Your Beehiiv Publication

1. Log into your Beehiiv account
2. Create a new publication (if you haven't already)
3. Note down your **Publication ID** (found in the URL: `https://app.beehiiv.com/pubs/pub_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`)

## Step 2: Get Your API Key

1. In your Beehiiv dashboard, go to **Settings** → **API**
2. Generate a new API key
3. Copy the API key (you'll only see it once!)

## Step 3: Configure Environment Variables

Add these environment variables to your Vercel project:

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

```
BEEHIIV_PUBLICATION_ID=pub_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
BEEHIIV_API_KEY=your_api_key_here
```

**Replace the placeholder values with your actual Beehiiv credentials.**

## Step 4: Test the Integration

1. Deploy your changes to production
2. Visit `/newsletter` on your website
3. Try submitting the form with a test email
4. Check your Beehiiv dashboard to confirm the subscriber was added

## Step 5: Customize Your Newsletter

### Welcome Email
- Go to **Settings** → **Email** in Beehiiv
- Customize your welcome email template
- Include ZAG Matrix branding and messaging

### Custom Fields
The integration automatically captures:
- `first_name` - User's first name
- `role` - User's current role
- `source` - Set to "website_signup"

### UTM Parameters
The integration includes:
- `utm_source=website`
- `utm_medium=newsletter_page`
- `utm_campaign=zag_community`

## Step 6: Optional Enhancements

### Add to Other Pages
You can add newsletter signup forms to other pages by:

1. Creating a reusable component
2. Using the same API endpoint (`/api/newsletter`)
3. Styling to match the page design

### Analytics
Track newsletter performance in Beehiiv:
- Open rates
- Click-through rates
- Subscriber growth
- Engagement metrics

## Troubleshooting

### Common Issues

**"Newsletter service not configured"**
- Check that both environment variables are set
- Ensure the API key is correct
- Verify the publication ID is valid

**"You are already subscribed"**
- This is normal behavior for existing subscribers
- Beehiiv prevents duplicate subscriptions

**"Failed to subscribe"**
- Check the Vercel function logs
- Verify your Beehiiv account is active
- Ensure your publication is published

### Debug Mode

To enable debug logging, add this environment variable:
```
DEBUG_NEWSLETTER=true
```

## Security Notes

- Never commit API keys to your repository
- Use environment variables for all sensitive data
- Regularly rotate your API keys
- Monitor API usage in your Beehiiv dashboard

## Support

If you encounter issues:
1. Check the Vercel function logs
2. Verify your Beehiiv credentials
3. Test the API directly using curl or Postman
4. Contact Beehiiv support if needed

---

**Need help?** The integration is designed to be robust and user-friendly. Most issues can be resolved by checking the environment variables and API credentials. 