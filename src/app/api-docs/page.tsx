import CTA from '@/components/CTA'

export const metadata = {
  title: 'API Documentation | Btab - Developer-Friendly RESTful API',
  description: 'Complete API reference for the Btab platform. Build custom integrations with our RESTful API.',
}

export default function APIDocs() {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-btab-primary to-btab-secondary text-white">
        <div className="section-container text-center">
          <h1 className="heading-xl mb-4">Developer-Friendly RESTful API</h1>
          <p className="text-xl text-blue-100">Build exactly what you want with complete control</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container max-w-4xl">
          <h2 className="heading-md mb-8">Quick Start</h2>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-8 overflow-x-auto">
            <pre className="text-sm">
{`# Get your API key from dashboard
curl https://api.btab.app/api/v1/products \\
  -H "Authorization: Bearer btab_live_xxxxxxxxxxxxx"`}
            </pre>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-xl font-bold mb-4">Base URL</h3>
              <code className="bg-gray-100 px-3 py-2 rounded block">
                https://api.btab.app/api/v1
              </code>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Authentication</h3>
              <code className="bg-gray-100 px-3 py-2 rounded block">
                Authorization: Bearer YOUR_KEY
              </code>
            </div>
          </div>

          <h2 className="heading-md mb-8">Core Endpoints</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-btab-primary pl-6">
              <h3 className="text-lg font-bold mb-2">GET /products</h3>
              <p className="text-gray-600 mb-4">Retrieve all available products in the catalog</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                <pre>
{`{
  "success": true,
  "data": [
    {
      "id": "prod_001",
      "name": "Moog Minimoog Model D",
      "wholesalePrice": 2999.00,
      "suggestedRetailPrice": 4499.00,
      "inStock": true
    }
  ],
  "count": 52
}`}
                </pre>
              </div>
            </div>

            <div className="border-l-4 border-btab-primary pl-6">
              <h3 className="text-lg font-bold mb-2">GET /my-products</h3>
              <p className="text-gray-600 mb-4">Retrieve your curated product selection</p>
            </div>

            <div className="border-l-4 border-btab-primary pl-6">
              <h3 className="text-lg font-bold mb-2">POST /orders</h3>
              <p className="text-gray-600 mb-4">Submit a new order for fulfillment</p>
            </div>

            <div className="border-l-4 border-btab-primary pl-6">
              <h3 className="text-lg font-bold mb-2">GET /orders</h3>
              <p className="text-gray-600 mb-4">Retrieve order history with tracking</p>
            </div>
          </div>

          <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Features</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start">
                <span className="text-btab-accent mr-2">✓</span>
                <span>RESTful architecture</span>
              </li>
              <li className="flex items-start">
                <span className="text-btab-accent mr-2">✓</span>
                <span>JSON responses</span>
              </li>
              <li className="flex items-start">
                <span className="text-btab-accent mr-2">✓</span>
                <span>Bearer token auth</span>
              </li>
              <li className="flex items-start">
                <span className="text-btab-accent mr-2">✓</span>
                <span>Rate limiting: 1,000/hour</span>
              </li>
              <li className="flex items-start">
                <span className="text-btab-accent mr-2">✓</span>
                <span>99.9% uptime SLA</span>
              </li>
              <li className="flex items-start">
                <span className="text-btab-accent mr-2">✓</span>
                <span>Complete documentation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTA
        title="Start Building Today"
        description="Get your free API key and start integrating Btab into your application."
        primaryText="Get API Key"
        primaryHref="#signup"
        dark
      />
    </>
  )
}
