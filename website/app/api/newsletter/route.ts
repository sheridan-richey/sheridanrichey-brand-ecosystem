
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, role, ctaSource } = body

    // Debug logging
    console.log('Newsletter signup request:', { email, name, role, ctaSource })

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Beehiiv API integration
    const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID
    const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY

    if (!BEEHIIV_PUBLICATION_ID || !BEEHIIV_API_KEY) {
      console.error('Beehiiv credentials not configured')
      return NextResponse.json(
        { error: 'Newsletter service not configured' },
        { status: 500 }
      )
    }

    // Prepare subscriber data for Beehiiv
    const subscriberData = {
      email: email,
      custom_fields: [
        { name: 'first_name', value: name || '' },
        { name: 'role', value: role || '' },
        { name: 'source', value: 'website_signup' },
        { name: 'cta_source', value: ctaSource || 'newsletter_page' }
      ],
      reactivate_existing: false,
      send_welcome_email: true,
      utm_source: 'website',
      utm_medium: 'newsletter_page',
      utm_campaign: 'zag_community'
    }

    console.log('Subscriber data for Beehiiv:', subscriberData)

    // Submit to Beehiiv API
    const response = await fetch(`https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BEEHIIV_API_KEY}`
      },
      body: JSON.stringify(subscriberData)
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Beehiiv API error:', errorData)
      console.error('Response status:', response.status)
      
      // Handle specific error cases
      if (response.status === 409) {
        return NextResponse.json(
          { error: 'You are already subscribed to our newsletter!' },
          { status: 409 }
        )
      }
      
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter' },
        { status: 500 }
      )
    }

    const result = await response.json()
    console.log('Newsletter signup successful:', result)

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to the ZAG Community newsletter!',
      subscriber: result
    })

  } catch (error) {
    console.error('Newsletter signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 