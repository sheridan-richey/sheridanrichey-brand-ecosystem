'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function NewsletterTest() {
  const [testResult, setTestResult] = useState<string>('')
  const [isTesting, setIsTesting] = useState(false)

  const testNewsletterAPI = async () => {
    setIsTesting(true)
    setTestResult('Testing...')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'test@example.com',
          name: 'Test User',
          role: 'software-engineer'
        })
      })

      const result = await response.json()
      
      if (response.ok) {
        setTestResult(`✅ Success: ${result.message}`)
      } else {
        setTestResult(`❌ Error: ${result.error}`)
      }
    } catch (error) {
      setTestResult(`❌ Network Error: ${error}`)
    } finally {
      setIsTesting(false)
    }
  }

  const checkEnvironment = () => {
    const hasPublicationId = process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID
    const hasApiKey = process.env.NEXT_PUBLIC_BEEHIIV_API_KEY
    
    setTestResult(`Environment Check:
    Publication ID: ${hasPublicationId ? '✅ Set' : '❌ Missing'}
    API Key: ${hasApiKey ? '✅ Set' : '❌ Missing'}
    
    Note: API keys should be server-side only, not exposed to client.`)
  }

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Newsletter Integration Test</h3>
      
      <div className="space-y-4">
        <Button 
          onClick={checkEnvironment}
          variant="outline"
          className="mr-2"
        >
          Check Environment
        </Button>
        
        <Button 
          onClick={testNewsletterAPI}
          disabled={isTesting}
          variant="outline"
        >
          {isTesting ? 'Testing...' : 'Test API'}
        </Button>
        
        {testResult && (
          <div className="mt-4 p-4 bg-white rounded border">
            <pre className="text-sm whitespace-pre-wrap">{testResult}</pre>
          </div>
        )}
      </div>
    </div>
  )
} 