import Link from 'next/link'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-btab-primary to-btab-secondary text-white">
        <div className="section-container text-center">
          <h1 className="heading-xl mb-6">
            Turn Products Into Profit, Without the Inventory
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Launch your online store in minutes without inventory, warehousing, or logistics.
            Access 1000s of premium products, set your prices, and start selling today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://dashboard.btab.app/register" className="bg-white text-btab-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Start Selling Today
            </Link>
            <Link href="/how-it-works" className="border-2 border-white text-white hover:bg-white hover:text-btab-primary font-semibold px-8 py-4 rounded-lg transition-all text-lg">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="heading-lg text-center mb-16">Three Simple Steps to Start Selling</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-btab-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="heading-sm mb-4">Select</h3>
              <p className="text-gray-600 mb-4">Browse Our Curated Catalog</p>
              <p className="text-gray-600">
                Choose from 1000s of premium products across music equipment, keyboards, electronics, and more.
                Every product pre-vetted for quality and market demand.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Vintage synthesizers ($10,000 - $60,000)</li>
                <li>• Mechanical keyboards ($30 - $300)</li>
                <li>• Digital pianos ($800 - $5,000)</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-btab-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="heading-sm mb-4">Sell</h3>
              <p className="text-gray-600 mb-4">Set Your Prices, Build Your Brand</p>
              <p className="text-gray-600">
                Use our API to create your custom storefront, or choose a hosted solution.
                You control your pricing and margins—we provide the infrastructure.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Control your brand 100%</li>
                <li>• Set your own retail prices</li>
                <li>• Earn 30-60% margins</li>
                <li>• No transaction fees</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-btab-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="heading-sm mb-4">Earn</h3>
              <p className="text-gray-600 mb-4">We Handle Everything Else</p>
              <p className="text-gray-600">
                Focus on marketing while we manage fulfillment, inventory, shipping, and customer order tracking.
                You make the sale, we do the rest.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Order fulfillment: 24-48 hours</li>
                <li>• Standard shipping: 3-5 days</li>
                <li>• Real-time order tracking</li>
                <li>• Returns & support handled</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <h2 className="heading-lg text-center mb-4">Premium Products Ready to Sell</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Curated selection with transparent pricing and healthy margins
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Moog Minimoog Model D</h3>
              <p className="text-sm text-gray-600 mb-4">Vintage Synthesizer</p>
              <div className="space-y-2">
                <p className="text-sm">Wholesale: <span className="font-semibold">$2,999</span></p>
                <p className="text-sm">Suggested Retail: <span className="font-semibold">$4,499</span></p>
                <p className="text-lg text-btab-accent font-bold">Your Profit: $1,500</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Roland Jupiter-8</h3>
              <p className="text-sm text-gray-600 mb-4">Vintage Synthesizer</p>
              <div className="space-y-2">
                <p className="text-sm">Wholesale: <span className="font-semibold">$12,999</span></p>
                <p className="text-sm">Suggested Retail: <span className="font-semibold">$19,999</span></p>
                <p className="text-lg text-btab-accent font-bold">Your Profit: $7,000</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">RGB Gaming Keyboard</h3>
              <p className="text-sm text-gray-600 mb-4">Mechanical Keyboard</p>
              <div className="space-y-2">
                <p className="text-sm">Wholesale: <span className="font-semibold">$79</span></p>
                <p className="text-sm">Suggested Retail: <span className="font-semibold">$149</span></p>
                <p className="text-lg text-btab-accent font-bold">Your Profit: $70</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/products" className="btn-primary">
              Browse Full Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Hosting Tiers */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="heading-lg text-center mb-4">Choose the Perfect Plan for Your Business</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Start free or choose a hosted solution
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <p className="text-3xl font-bold text-btab-primary mb-4">$29<span className="text-lg text-gray-600">/mo</span></p>
              <p className="text-sm text-gray-600 mb-4">Perfect for side hustles</p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm">✓ Static HTML</li>
                <li className="text-sm">✓ 5MB storage</li>
                <li className="text-sm">✓ Btab subdomain</li>
                <li className="text-sm">✓ SSL included</li>
              </ul>
              <Link href="/pricing" className="btn-secondary block">
                Learn More
              </Link>
            </div>

            <div className="border-2 border-btab-primary rounded-lg p-6 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-btab-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Standard</h3>
              <p className="text-3xl font-bold text-btab-primary mb-4">$79<span className="text-lg text-gray-600">/mo</span></p>
              <p className="text-sm text-gray-600 mb-4">Perfect for growing stores</p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm">✓ Next.js SSG</li>
                <li className="text-sm">✓ 50MB storage</li>
                <li className="text-sm">✓ SEO-optimized</li>
                <li className="text-sm">✓ SSL included</li>
              </ul>
              <Link href="/pricing" className="btn-primary block">
                Get Started
              </Link>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <p className="text-3xl font-bold text-btab-primary mb-4">$199<span className="text-lg text-gray-600">/mo</span></p>
              <p className="text-sm text-gray-600 mb-4">Perfect for established brands</p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm">✓ Full Next.js SSR</li>
                <li className="text-sm">✓ Unlimited storage</li>
                <li className="text-sm">✓ Custom domain</li>
                <li className="text-sm">✓ Priority support</li>
              </ul>
              <Link href="/pricing" className="btn-secondary block">
                Learn More
              </Link>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6 bg-gray-50">
              <h3 className="text-2xl font-bold mb-2">Free API</h3>
              <p className="text-3xl font-bold text-btab-primary mb-4">$0<span className="text-lg text-gray-600">/mo</span></p>
              <p className="text-sm text-gray-600 mb-4">Perfect for developers</p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm">✓ Full API access</li>
                <li className="text-sm">✓ Self-hosted</li>
                <li className="text-sm">✓ Your domain</li>
                <li className="text-sm">✓ Complete control</li>
              </ul>
              <Link href="/api-docs" className="btn-secondary block">
                View API Docs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <h2 className="heading-lg text-center mb-12">Real Vendors, Real Results</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <blockquote className="text-gray-600 mb-4 italic">
                "I started selling vintage synthesizers as a side business. Basic tier costs me $29/month,
                but I'm making $22,000/month in profit. It's incredible."
              </blockquote>
              <p className="font-semibold">Jessica L.</p>
              <p className="text-sm text-gray-600 mb-4">Vintage Synth Seller</p>
              <div className="text-sm space-y-1">
                <p>Tier: Basic ($29/mo)</p>
                <p>Products: 10 vintage synthesizers</p>
                <p className="font-semibold text-btab-accent">Monthly Revenue: $22,000</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <blockquote className="text-gray-600 mb-4 italic">
                "I was making 5% commissions with affiliate links. Now I earn 40% margins with my own branded store.
                Five times the revenue, full brand control."
              </blockquote>
              <p className="font-semibold">Mark T.</p>
              <p className="text-sm text-gray-600 mb-4">YouTube Creator (100K subscribers)</p>
              <div className="text-sm space-y-1">
                <p>Previous: $2,500/mo (5% commission)</p>
                <p className="font-semibold text-btab-accent">Now: $12,000/mo (40% margins)</p>
                <p>5x revenue increase</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <blockquote className="text-gray-600 mb-4 italic">
                "Closing my physical store and going online with Btab reduced my overhead from $4,000 to $199/month.
                Same revenue, better life."
              </blockquote>
              <p className="font-semibold">Elite Audio</p>
              <p className="text-sm text-gray-600 mb-4">Premium Keyboard Store</p>
              <div className="text-sm space-y-1">
                <p>Overhead: $4,000/mo → $199/mo</p>
                <p className="font-semibold text-btab-accent">Monthly Revenue: $45,000</p>
                <p>Customer Reach: Nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Btab */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="heading-lg text-center mb-12">Why Btab?</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">🚀 Launch in Minutes</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>No inventory investment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>No warehouse setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>API key + instant access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Start selling same day</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">💰 Transparent Pricing</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>See exact wholesale costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Set your own retail prices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Control your margins</span>
                </li>
                <li className="flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Zero transaction fees</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">🎨 Full Brand Control</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>White-label platform</span>
                </li>
                <li className="flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Custom domain options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Your branding, your store</span>
                </li>
                <li className="flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>No Btab logos required</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">📈 Scale With Confidence</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Start Basic ($29/mo)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Grow to Premium ($199/mo)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Handle traffic spikes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>99.9% uptime SLA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Start?"
        description="No inventory investment. No warehousing. No logistics headaches. Just products ready to sell and infrastructure ready to ship."
        primaryText="Get Your Free API Key"
        primaryHref="https://dashboard.btab.app/register"
        secondaryText="Browse Product Catalog"
        secondaryHref="/products"
        dark
      />
    </>
  )
}
