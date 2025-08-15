import { NextRequest, NextResponse } from 'next/server'

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

    // For now, we'll log the contact form submission
    // In production, you would integrate with an email service like Resend, SendGrid, or Nodemailer
    console.log('📧 Contact Form Submission:')
    console.log('From:', name, `<${email}>`)
    console.log('Subject:', subject)
    console.log('Message:', message)
    console.log('Newsletter Signup:', newsletterSignup)
    console.log('Community Code:', communityCode)
    console.log('Source:', source)

    // TODO: Integrate with email service
    // Example with Resend:
    // const { Resend } = require('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // 
    // const { data, error } = await resend.emails.send({
    //   from: 'Contact Form <noreply@sheridanrichey.com>',
    //   to: ['sheridan@sheridanrichey.com'],
    //   subject: `Contact Form: ${subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //     ${communityCode ? `<p><strong>Community Code:</strong> ${communityCode}</p>` : ''}
    //     ${source ? `<p><strong>Source:</strong> ${source}</p>` : ''}
    //     <p><strong>Newsletter Signup:</strong> ${newsletterSignup ? 'Yes' : 'No'}</p>
    //   `
    // })

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000))

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
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
