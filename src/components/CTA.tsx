import Link from 'next/link'

interface CTAProps {
  title: string
  description?: string
  primaryText: string
  primaryHref: string
  secondaryText?: string
  secondaryHref?: string
  dark?: boolean
}

export default function CTA({
  title,
  description,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
  dark = false
}: CTAProps) {
  return (
    <section className={`section-padding ${dark ? 'bg-btab-dark text-white' : 'bg-gray-50'}`}>
      <div className="section-container text-center">
        <h2 className="heading-lg mb-4">{title}</h2>
        {description && (
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryHref} className="btn-primary text-lg px-8 py-4">
            {primaryText}
          </Link>
          {secondaryText && secondaryHref && (
            <Link href={secondaryHref} className={`btn-secondary text-lg px-8 py-4 ${dark ? 'border-white text-white hover:bg-white hover:text-btab-dark' : ''}`}>
              {secondaryText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
