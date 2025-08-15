# 🚀 Resend Email Integration Setup Guide

## Overview
This guide walks you through setting up Resend for your contact form emails on sheridanrichey.com.

## ✅ What's Already Done
- ✅ Resend package installed (`npm install resend`)
- ✅ Contact API updated with Resend integration
- ✅ Environment file template created (`.env.local`)
- ✅ Test script created (`test-resend.js`)
- ✅ Dotenv package installed for environment support

## 🔑 Step 1: Get Your Resend API Key

1. **Go to [resend.com](https://resend.com)** and sign up/login
2. **Navigate to API Keys** in your dashboard
3. **Create a new API key** (or use existing)
4. **Copy the API key** (starts with `re_`)

## 🔧 Step 2: Configure Environment Variables

1. **Open your `.env.local` file** in the website directory
2. **Replace the placeholder** with your actual API key:

```bash
# Resend API Configuration
RESEND_API_KEY=re_your_actual_api_key_here
FROM_EMAIL=noreply@sheridanrichey.com
TO_EMAIL=sheridan@sheridanrichey.com
```

## 📧 Step 3: Verify Domain (Optional but Recommended)

1. **In Resend dashboard**, go to Domains
2. **Add your domain**: `sheridanrichey.com`
3. **Follow DNS setup instructions** (add TXT records)
4. **Wait for verification** (usually 5-10 minutes)

## 🧪 Step 4: Test the Integration

1. **Run the test script**:
   ```bash
   node test-resend.js
   ```

2. **Expected output**:
   ```
   🧪 Testing Resend Configuration...

   Environment Variables:
   RESEND_API_KEY: ✅ Set
   FROM_EMAIL: noreply@sheridanrichey.com
   TO_EMAIL: sheridan@sheridanrichey.com

   📧 Sending test email...
   ✅ Test email sent successfully!
   Email ID: [some_id]
   
   🎉 Your Resend integration is working perfectly!
   ```

## 🌐 Step 5: Test on Website

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Go to your contact page** and submit a test form
3. **Check your email** for the contact form submission
4. **Check the console** for success/error messages

## 🔍 Troubleshooting

### Common Issues:

#### ❌ "RESEND_API_KEY is missing"
- **Solution**: Check your `.env.local` file exists and has the correct API key
- **Verify**: Run `type .env.local` to see the file contents

#### ❌ "Unauthorized" or "Invalid API key"
- **Solution**: Verify your API key is correct in Resend dashboard
- **Check**: Make sure you copied the full key starting with `re_`

#### ❌ "Domain not verified"
- **Solution**: Either verify your domain in Resend or use a verified domain
- **Alternative**: Use `onboarding@resend.dev` as FROM_EMAIL for testing

#### ❌ "Rate limit exceeded"
- **Solution**: Check your Resend plan limits
- **Free tier**: 3,000 emails/month

## 📊 Monitoring & Analytics

1. **Resend Dashboard**: Track email delivery, opens, clicks
2. **Console Logs**: Check your Next.js console for email status
3. **Email Delivery**: Monitor your inbox for contact form submissions

## 🚀 Production Deployment

### Vercel Deployment:
1. **Add environment variables** in Vercel dashboard:
   - `RESEND_API_KEY`
   - `FROM_EMAIL`
   - `TO_EMAIL`

2. **Deploy**: Your changes will automatically deploy

### Other Platforms:
- Add the same environment variables to your hosting platform
- Ensure `.env.local` is in your `.gitignore` (already done)

## 💰 Cost Information

- **Free Tier**: 3,000 emails/month
- **Paid Plans**: Start at $20/month for 50,000 emails
- **Your Usage**: Contact forms typically use <100 emails/month

## 🎯 Next Steps

1. **Test thoroughly** with the test script
2. **Verify on website** with real contact form
3. **Monitor delivery** in Resend dashboard
4. **Consider domain verification** for better deliverability

## 📞 Support

- **Resend Docs**: [docs.resend.com](https://docs.resend.com)
- **Resend Support**: Available in dashboard
- **Your Implementation**: Check console logs and test script output

---

**🎉 Congratulations!** Your contact form now sends real emails via Resend.
