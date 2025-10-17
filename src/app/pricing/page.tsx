import Link from 'next/link'
import CTA from '@/components/CTA'

export const metadata = {
  title: 'Pricing | Btab - Simple, Transparent Pricing',
  description: 'Choose the perfect plan for your business. From $29/mo to free API access. No transaction fees, no hidden costs.',
}

export default function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-btab-primary to-btab-secondary text-white">
        <div className="section-container text-center">
          <h1 className="heading-xl mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            No transaction fees. No setup fees. No hidden costs.
          </p>
        </div>
      </section>

      {/* Tier Comparison */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="heading-lg text-center mb-12">Choose Your Tier</h2>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Basic */}
            <div className="border-2 border-gray-200 rounded-lg p-6 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <p className="text-4xl font-bold text-btab-primary mb-2">
                $29
                <span className="text-lg text-gray-600">/mo</span>
              </p>
              <p className="text-sm text-gray-600 mb-6">Perfect for side hustles</p>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="text-sm flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Static HTML website</span>
                </li>
                <li className="text-sm flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>5MB storage</span>
                </li>
                <li className="text-sm flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>yourname.vendors.btab.app</span>
                </li>
                <li className="text-sm flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>SSL certificate included</span>
                </li>
                <li className="text-sm flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Full catalog access</span>
                </li>
              </ul>

              <div className="text-sm text-gray-600 mb-4">
                <p className="font-semibold mb-1">Break-even: 1-2 sales/month</p>
              </div>

              <Link href="#signup" className="btn-secondary block text-center">
                Choose Basic
              </Link>
            </div>

            {/* Standard */}
            <div className="border-2 border-btab-primary rounded-lg p-6 flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-btab-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Standard</h3>
              <p className="text-4xl font-bold text-btab-primary mb-2">
                $79
                <span className="text-lg text-gray-600">/mo</span>
              </p>
              <p className="text-sm text-gray-600 mb-6">Perfect for growing stores</p>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="text-sm flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Next.js SSG (Static Site Generation)</span>
                </li>
                <li className="text-sm flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>50MB storage</span>
                </li>
                <li className="text-sm flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>SEO-optimized pages</span>
                </li>
                <li className="text-sm flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Professional templates</span>
                </li>
                <li className="text-sm flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Lightning-fast load times</span>
                </li>
              </ul>

              <div className="text-sm text-gray-600 mb-4">
                <p className="font-semibold mb-1">Break-even: 3-5 sales/month</p>
              </div>

              <Link href="#signup" className="btn-primary block text-center">
                Choose Standard
              </Link>
            </div>

            {/* Premium */}
            <div className="border-2 border-gray-200 rounded-lg p-6 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <p className="text-4xl font-bold text-btab-primary mb-2">
                $199
                <span className="text-lg text-gray-600">/mo</span>
              </p>
              <p className="text-sm text-gray-600 mb-6">Perfect for established brands</p>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="text-sm flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Full Next.js SSR</span>
                </li>
                <li className="text-sm flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Unlimited storage</span>
                </li>
                <li className="text-sm flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Custom domain support</span>
                </li>
                <li className="text-sm flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Advanced order management</span>
                </li>
                <li className="text-sm flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>

              <div className="text-sm text-gray-600 mb-4">
                <p className="font-semibold mb-1">Break-even: 8-10 sales/month</p>
              </div>

              <Link href="#signup" className="btn-secondary block text-center">
                Choose Premium
              </Link>
            </div>

            {/* Free API */}
            <div className="border-2 border-gray-200 rounded-lg p-6 flex flex-col bg-gray-50">
              <h3 className="text-2xl font-bold mb-2">Free API</h3>
              <p className="text-4xl font-bold text-btab-primary mb-2">
                $0
                <span className="text-lg text-gray-600">/mo</span>
              </p>
              <p className="text-sm text-gray-600 mb-6">Perfect for developers</p>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="text-sm flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Full API access (unlimited)</span>
                </li>
                <li className="text-sm flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Self-hosted</span>
                </li>
                <li className="text-sm flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Your own domain</span>
                </li>
                <li className="text-sm flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Complete control</span>
                </li>
                <li className="text-sm flex items-start">
                  <span className="text-btab-accent mr-2">✓</span>
                  <span>Full documentation</span>
                </li>
              </ul>

              <div className="text-sm text-gray-600 mb-4">
                <p className="font-semibold mb-1">Best for existing websites</p>
              </div>

              <Link href="/api-docs" className="btn-secondary block text-center">
                View API Docs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Examples */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <h2 className="heading-lg text-center mb-12">Real Revenue Examples</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Conservative (Part-Time)</h3>
              <div className="space-y-2 text-sm mb-6">
                <p>Products: 10 sales/month</p>
                <p>Avg margin: $500/unit</p>
                <p>Tier: Basic ($29/mo)</p>
              </div>
              <p className="text-3xl font-bold text-btab-accent mb-2">$4,971/mo</p>
              <p className="text-gray-600">$59,652/year</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-btab-primary">
              <h3 className="text-xl font-bold mb-4">Moderate Growth</h3>
              <div className="space-y-2 text-sm mb-6">
                <p>Products: 25 sales/month</p>
                <p>Avg margin: $800/unit</p>
                <p>Tier: Standard ($79/mo)</p>
              </div>
              <p className="text-3xl font-bold text-btab-accent mb-2">$19,921/mo</p>
              <p className="text-gray-600">$239,052/year</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Established Store</h3>
              <div className="space-y-2 text-sm mb-6">
                <p>Products: 60 sales/month</p>
                <p>Avg margin: $900/unit</p>
                <p>Tier: Premium ($199/mo)</p>
              </div>
              <p className="text-3xl font-bold text-btab-accent mb-2">$53,801/mo</p>
              <p className="text-gray-600">$645,612/year</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="heading-lg text-center mb-12">What's Included (All Tiers)</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4 text-btab-accent">✓ Always Included</h3>
              <ul className="space-y-2">
                <li>Unlimited API requests</li>
                <li>SSL certificate (automatic)</li>
                <li>Access to full product catalog</li>
                <li>Order management system</li>
                <li>Vendor dashboard</li>
                <li>Email support</li>
                <li>API documentation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-red-600">✗ Never Charged</h3>
              <ul className="space-y-2">
                <li>Transaction fees (0%)</li>
                <li>Setup fees</li>
                <li>Per-order fees</li>
                <li>API usage fees</li>
                <li>Bandwidth overages</li>
                <li>Payment processing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="section-container max-w-3xl">
          <h2 className="heading-lg text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I change tiers later?</h3>
              <p className="text-gray-600">
                Yes! Upgrade or downgrade anytime. Billing is prorated, and migrations are seamless.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">
                The Free (API Only) tier is available immediately with no credit card required.
                For hosted tiers, start with Basic ($29) to test the platform.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">What happens if I cancel?</h3>
              <p className="text-gray-600">
                Your site remains active until the end of your billing period. You can export your
                data anytime. No cancellation fees.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Can I use my own domain on Standard tier?</h3>
              <p className="text-gray-600">
                Custom domains are available on Premium tier only. Basic and Standard use Btab subdomains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Start?"
        description="Choose your plan today. No contracts, upgrade or downgrade anytime."
        primaryText="Get Started Now"
        primaryHref="#signup"
        secondaryText="View All Features"
        secondaryHref="/how-it-works"
        dark
      />
    </>
  )
}
