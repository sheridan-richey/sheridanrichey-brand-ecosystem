'use client'

export default function TestDeploymentPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Deployment Test Page</h1>
        
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Image Tests:</h2>
            <div className="space-y-2">
              <div>
                <p className="font-medium">Hero Image:</p>
                <img 
                  src="/sheridan-headshot.jpg" 
                  alt="Test Hero" 
                  className="w-32 h-32 object-cover rounded"
                  onError={(e) => {
                    console.error('Hero image failed to load');
                    e.currentTarget.style.border = '2px solid red';
                  }}
                  onLoad={() => {
                    console.log('Hero image loaded successfully');
                  }}
                />
              </div>
              
              <div>
                <p className="font-medium">Blog Image:</p>
                <img 
                  src="/sheridan-blog.jpg" 
                  alt="Test Blog" 
                  className="w-32 h-32 object-cover rounded"
                  onError={(e) => {
                    console.error('Blog image failed to load');
                    e.currentTarget.style.border = '2px solid red';
                  }}
                  onLoad={() => {
                    console.log('Blog image loaded successfully');
                  }}
                />
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-2">Environment Info:</h2>
            <div className="bg-gray-50 p-4 rounded">
              <p><strong>NODE_ENV:</strong> {process.env.NODE_ENV}</p>
              <p><strong>VERCEL_ENV:</strong> {process.env.VERCEL_ENV}</p>
              <p><strong>VERCEL_URL:</strong> {process.env.VERCEL_URL}</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-2">Test Links:</h2>
            <div className="space-y-2">
              <a 
                href="/sheridan-headshot.jpg" 
                target="_blank" 
                className="block text-blue-600 hover:underline"
              >
                Direct link to hero image
              </a>
              <a 
                href="/sheridan-blog.jpg" 
                target="_blank" 
                className="block text-blue-600 hover:underline"
              >
                Direct link to blog image
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 