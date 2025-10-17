import Link from 'next/link'
import CTA from '@/components/CTA'

export const metadata = {
  title: 'How It Works | Btab - Launch Your Store in Minutes',
  description: 'Learn how to launch your online store with Btab in 6 simple steps. From sign-up to first sale.',
}

export default function HowItWorks() {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-btab-primary to-btab-secondary text-white">
        <div className="section-container text-center">
          <h1 className="heading-xl mb-4">Launch Your Store in Minutes, Not Months</h1>
          <p className="text-xl text-blue-100">From sign-up to first sale in 6 simple steps</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container max-w-4xl">
          <div className="space-y-16">
            {[
              {
                step: 1,
                title: 'Sign Up & Get Your API Key',
                time: '2-3 minutes',
                description: 'Create your free vendor account and receive your unique API key instantly. No credit card required.',
                details: ['Full dashboard access', 'Browse complete catalog', 'View wholesale pricing', 'API documentation']
              },
              {
                step: 2,
                title: 'Browse the Catalog',
                time: '15-30 minutes',
                description: 'Explore 1000s of premium products with detailed specs, wholesale prices, and suggested retail prices.',
                details: ['High-res product images', 'Detailed specifications', 'Margin calculations', 'Inventory status']
              },
              {
                step: 3,
                title: 'Curate Your Selection',
                time: '30-60 minutes',
                description: 'Choose products that fit your brand. Add to "My Products" and optionally set custom retail prices.',
                details: ['Niche specialist (5-15 products)', 'Diverse marketplace (20-40 products)', 'Premium only (10-20 items)', 'Full control over pricing']
              },
              {
                step: 4,
                title: 'Launch Your Store',
                time: 'Minutes to hours',
                description: 'Choose your path: use existing website (free), hosted site ($29-$199/mo), or dashboard only.',
                details: ['Free API integration', 'Basic tier ($29/mo)', 'Standard tier ($79/mo)', 'Premium tier ($199/mo)']
              },
              {
                step: 5,
                title: 'Start Selling',
                time: 'Ongoing',
                description: 'Customers browse your store, place orders, and you earn the margin between wholesale and retail.',
                details: ['You set the prices', '30-60% margins typical', 'Zero transaction fees', 'Real-time tracking']
              },
              {
                step: 6,
                title: 'We Handle Everything Else',
                time: '24-48 hours fulfillment',
                description: 'Btab manages inventory, warehousing, order fulfillment, shipping, and customer support.',
                details: ['Order processing', 'Quality control', 'Secure packaging', 'Shipping & tracking']
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-btab-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">Time required: {item.time}</p>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {item.details.map((detail) => (
                      <li key={detail} className="text-sm flex items-start">
                        <span className="text-btab-accent mr-2">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <h2 className="heading-lg text-center mb-12">Revenue Timeline</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { month: 'Month 1', sales: '5-15 units', focus: 'Learning' },
              { month: 'Month 3', sales: '15-30 units', focus: 'Momentum' },
              { month: 6, sales: '30-50 units', focus: 'Growth' },
              { month: 'Month 12', sales: '50-100+ units', focus: 'Established' },
            ].map((timeline) => (
              <div key={timeline.month} className="bg-white p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">{timeline.month}</h3>
                <p className="text-2xl text-btab-accent font-bold mb-2">{timeline.sales}/mo</p>
                <p className="text-sm text-gray-600">Focus: {timeline.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Get Started?"
        description="Join successful vendors earning $5K-$50K+/month with zero inventory investment."
        primaryText="Create Free Account"
        primaryHref="https://dashboard.btab.app/register"
        secondaryText="View Pricing"
        secondaryHref="/pricing"
        dark
      />
    </>
  )
}
