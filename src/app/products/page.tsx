import Link from 'next/link'
import CTA from '@/components/CTA'

export const metadata = {
  title: 'Products | Btab - 52+ Premium Products Ready to Sell',
  description: '52+ curated products across music equipment, keyboards, and electronics. Transparent pricing and healthy margins.',
}

export default function Products() {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-btab-primary to-btab-secondary text-white">
        <div className="section-container text-center">
          <h1 className="heading-xl mb-4">52+ Premium Products Ready to Sell</h1>
          <p className="text-xl text-blue-100">Curated. Pre-vetted. Ready for your store.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <h2 className="heading-lg text-center mb-12">Browse by Category</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-4">🎹 Music Equipment</h3>
              <p className="text-gray-600 mb-4">30 premium products</p>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Vintage Synthesizers (13)</strong> - Moog, Roland, Sequential, Oberheim</li>
                <li><strong>Electric Pianos (3)</strong> - Fender Rhodes, Wurlitzer, Clavinet</li>
                <li><strong>Organs (1)</strong> - Hammond B3 with Leslie</li>
                <li><strong>Samplers (2)</strong> - E-MU, Fairlight</li>
                <li><strong>Digital Pianos (1)</strong> - Casio Celviano</li>
                <li><strong>Specialty Keyboards (10)</strong> - Mellotron and more</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">Price range: $49 - $60,000</p>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-4">⌨️ Computer Keyboards</h3>
              <p className="text-gray-600 mb-4">14 premium products</p>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Mechanical Gaming (6)</strong> - RGB, Cherry MX switches</li>
                <li><strong>Ergonomic (4)</strong> - Split designs, wrist rests</li>
                <li><strong>Specialty Devices (4)</strong> - Gaming keypads, numeric pads</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">Price range: $29 - $189</p>
            </div>
          </div>

          <h3 className="heading-md text-center mb-8">Featured Products with Margins</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Moog Minimoog', wholesale: 2999, retail: 4499, profit: 1500 },
              { name: 'Roland Jupiter-8', wholesale: 12999, retail: 19999, profit: 7000 },
              { name: 'Sequential Prophet-5', wholesale: 8999, retail: 13999, profit: 5000 },
              { name: 'Yamaha DX7', wholesale: 1299, retail: 2199, profit: 900 },
              { name: 'RGB Gaming Keyboard', wholesale: 79, retail: 149, profit: 70 },
              { name: 'Ergonomic Split Keyboard', wholesale: 119, retail: 199, profit: 80 },
            ].map((product) => (
              <div key={product.name} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg mb-3">{product.name}</h4>
                <div className="space-y-1 text-sm">
                  <p>Wholesale: <span className="font-semibold">${product.wholesale.toLocaleString()}</span></p>
                  <p>Retail: <span className="font-semibold">${product.retail.toLocaleString()}</span></p>
                  <p className="text-btab-accent font-bold">Your Profit: ${product.profit.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Browse the Full Catalog?"
        description="Sign up free to access complete product details, high-resolution images, and real-time inventory status."
        primaryText="Create Free Account"
        primaryHref="#signup"
        dark
      />
    </>
  )
}
