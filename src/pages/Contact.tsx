import { Link } from 'react-router-dom'
import { Container } from '../components/common/Container'
import { company } from '../data/company'
import { usePageMeta } from '../hooks/usePageMeta'
import { useI18n } from '../i18n/I18nContext'

export function ContactPage() {
  const { t } = useI18n()
  usePageMeta(t.pages.contact.title, t.pages.contact.intro)

  const hasContact = company.contactEmail || company.contactPhone || company.whatsappLink

  return (
    <section className="bg-softMint/40 py-14 lg:py-20">
      <Container>
        <h1 className="text-4xl font-extrabold text-leafGreen md:text-5xl">{t.pages.contact.title.split('|')[0].trim()}</h1>
        <p className="mt-4 max-w-3xl text-lg text-charcoal/80">{t.pages.contact.intro}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-bold text-leafGreen">{t.pages.contact.enquiry}</h2>
            {hasContact ? (
              <ul className="mt-4 space-y-3 text-charcoal/85">
                {company.contactEmail ? <li>Email: {company.contactEmail}</li> : null}
                {company.contactPhone ? <li>Phone: {company.contactPhone}</li> : null}
                {company.whatsappLink ? (
                  <li>
                    WhatsApp:{' '}
                    <a href={company.whatsappLink} target="_blank" rel="noreferrer" className="text-brandBlue hover:underline">
                      {company.whatsappLink}
                    </a>
                  </li>
                ) : null}
              </ul>
            ) : (
              <p className="mt-4 whitespace-pre-line text-charcoal/80">{t.footer.placeholderContact}</p>
            )}
          </article>

          <article className="rounded-2xl bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-bold text-leafGreen">{t.nav.outlets}</h2>
            <p className="mt-4 text-charcoal/80">{t.pages.outlets.intro}</p>
            <Link to="/outlets" className="mt-5 inline-flex text-sm font-semibold text-brandBlue hover:underline">
              {t.pages.contact.outletsLink}
            </Link>
          </article>
        </div>
      </Container>
    </section>
  )
}
