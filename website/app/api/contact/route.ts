import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message, newsletterSignup, communityCode, source } = body

    // Debug logging
    console.log('Contact form submission:', { name, email, subject, message, newsletterSignup, communityCode, source })

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      )
    }

    // Debug: Check environment variables
    console.log('🔍 Environment Variables Check:')
    console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY)
    console.log('RESEND_API_KEY length:', process.env.RESEND_API_KEY?.length || 0)
    console.log('RESEND_API_KEY starts with re_:', process.env.RESEND_API_KEY?.startsWith('re_') || false)
    console.log('FROM_EMAIL:', process.env.FROM_EMAIL)
    console.log('TO_EMAIL:', process.env.TO_EMAIL)

    // Check if API key is missing
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY is missing!')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Initialize Resend
    console.log('🚀 Initializing Resend...')
    const resend = new Resend(process.env.RESEND_API_KEY)
    console.log('✅ Resend initialized')

    // Prepare email data
    const emailData = {
      from: process.env.FROM_EMAIL || 'Contact Form <noreply@sheridanrichey.com>',
      to: [process.env.TO_EMAIL || 'sheridan@sheridanrichey.com'],
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #374151;">Name:</strong> ${name}</p>
            <p><strong style="color: #374151;">Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
            <p><strong style="color: #374151;">Subject:</strong> ${subject}</p>
            <p><strong style="color: #374151;">Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #2563eb;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; font-size: 14px;">
            ${communityCode ? `<p><strong>Community Code:</strong> <code style="background: #e5e7eb; padding: 2px 6px; border-radius: 4px;">${communityCode}</code></p>` : ''}
            ${source ? `<p><strong>Source:</strong> ${source}</p>` : ''}
            <p><strong>Newsletter Signup:</strong> ${newsletterSignup ? '✅ Yes' : '❌ No'}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
            <p>This email was sent from the contact form on sheridanrichey.com</p>
            <p>Sent at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
${communityCode ? `Community Code: ${communityCode}` : ''}
${source ? `Source: ${source}` : ''}
Newsletter Signup: ${newsletterSignup ? 'Yes' : 'No'}

Sent from sheridanrichey.com at ${new Date().toLocaleString()}
      `
    }

    console.log('📧 Email data prepared:', {
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject,
      htmlLength: emailData.html.length,
      textLength: emailData.text.length
    })

    // Send email using Resend
    console.log('📤 Sending email via Resend...')
    const { data, error } = await resend.emails.send(emailData)

    if (error) {
      console.error('❌ Resend email error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    console.log('✅ Email sent successfully via Resend:', data)
    console.log('📧 Email ID:', data?.id)

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! I\'ll get back to you soon.',
      submission: {
        name,
        email,
        subject,
        message,
        newsletterSignup,
        communityCode,
        source
      }
    })

  } catch (error) {
    console.error('❌ Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
