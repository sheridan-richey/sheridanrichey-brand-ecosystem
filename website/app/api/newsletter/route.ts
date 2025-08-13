import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, role } = body

    // Debug logging
    console.log('Newsletter signup request body:', body)
    console.log('Extracted fields:', { email, name, role })

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Beehiiv API integration
    // You'll need to replace this with your actual Beehiiv publication ID and API key
    const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID
    const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY

    if (!BEEHIIV_PUBLICATION_ID || !BEEHIIV_API_KEY) {
      console.error('Beehiiv credentials not configured')
      return NextResponse.json(
        { error: 'Newsletter service not configured' },
        { status: 500 }
      )
    }

    // Prepare subscriber data for Beehiiv (object form first)
    const subscriberDataObject = {
      email: email,
      custom_fields: {
        first_name: name || '',
        role: role || '',
        source: 'website_signup'
      },
      reactivate_existing: false,
      send_welcome_email: true,
      utm_source: 'website',
      utm_medium: 'newsletter_page',
      utm_campaign: 'zag_community'
    }

    // Debug logging
    console.log('Subscriber data (object form) being sent to Beehiiv:', subscriberDataObject)

    const beehiivUrl = `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`

    async function postToBeehiiv(payload: unknown) {
      return fetch(beehiivUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${BEEHIIV_API_KEY}`
        },
        body: JSON.stringify(payload)
      })
    }

    // Try object form first
    let response = await postToBeehiiv(subscriberDataObject)

    // If Beehiiv rejects, try array form with name/value keys
    if (!response.ok) {
      let errorData: any
      try {
        errorData = await response.json()
      } catch (_) {
        errorData = { error: 'Unknown error parsing Beehiiv response' }
      }
      console.error('Beehiiv API error (object form):', errorData)
      console.error('Response status:', response.status)
      console.error('Response headers:', Object.fromEntries(response.headers.entries()))

      // Only attempt a fallback for validation-type failures
      if (response.status >= 400 && response.status < 500) {
        const subscriberDataArray = {
          email: email,
          custom_fields: [
            { name: 'first_name', value: name || '' },
            { name: 'role', value: role || '' },
            { name: 'source', value: 'website_signup' }
          ],
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: 'website',
          utm_medium: 'newsletter_page',
          utm_campaign: 'zag_community'
        }

        console.log('Retrying with array form for custom_fields:', subscriberDataArray)
        response = await postToBeehiiv(subscriberDataArray)
      }
    }

    if (!response.ok) {
      let errorData: any
      try {
        errorData = await response.json()
      } catch (_) {
        errorData = { error: 'Unknown error parsing Beehiiv response' }
      }
      console.error('Beehiiv API error (after fallback if any):', errorData)
      console.error('Response status:', response.status)
      console.error('Response headers:', Object.fromEntries(response.headers.entries()))

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
    console.log('Beehiiv API success response:', result)

    // Return success response
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