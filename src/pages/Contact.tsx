import { useMemo, useState } from 'react'
import { ExternalLink, Leaf, Mail, MapPin, MessageCircle, Phone, Printer, Send } from 'lucide-react'
import { Container } from '../components/common/Container'
import { buildWhatsAppLink, headOfficeContact } from '../data/company'
import { usePageMeta } from '../hooks/usePageMeta'
import { useI18n } from '../i18n/I18nContext'

export function ContactPage() {
  const { t } = useI18n()
  usePageMeta(t.pages.contact.title, t.pages.contact.intro)

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [hasBlurredEmail, setHasBlurredEmail] = useState(false)

  const whatsappLink = useMemo(
    () => buildWhatsAppLink(t.pages.contact.whatsappExampleMessage),
    [t.pages.contact.whatsappExampleMessage],
  )

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const showEmailError = hasBlurredEmail && email.length > 0 && !isEmailValid

  const mapQuery = encodeURIComponent(
    `${headOfficeContact.companyName}, ${headOfficeContact.addressLine1} ${headOfficeContact.addressLine2}`,
  )
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-softMint/35 via-white to-softMint/20 py-14 lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -left-14 top-24 h-36 w-20 rotate-[-28deg] rounded-[100%_0_100%_0] bg-brandGreen/[0.08]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-8 top-28 hidden h-40 w-24 rotate-[22deg] rounded-[100%_0_100%_0] bg-brandGreen/[0.08] lg:block" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-1/2 hidden h-56 w-24 -translate-y-1/2 rotate-[18deg] rounded-[100%_0_100%_0] bg-brandGreen/[0.05] xl:block" />

      <Container>
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-leafGreen">{t.pages.contact.eyebrow}</p>
        <h1 className="mt-2 text-4xl font-extrabold text-leafGreen md:text-5xl">{t.pages.contact.title.split('|')[0].trim()}</h1>
        <p className="mt-4 max-w-3xl text-lg text-charcoal/80">{t.pages.contact.intro}</p>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_1fr]">
          <article className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100 lg:p-7">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brandGreen/12 text-brandGreen">
                <MessageCircle size={20} />
              </span>
              <div>
                <h2 className="text-3xl font-extrabold text-leafGreen">{t.pages.contact.leftCardTitle}</h2>
                <p className="mt-2 max-w-2xl text-charcoal/75">{t.pages.contact.leftCardDescription}</p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <section className="rounded-2xl bg-[#EAF8F0] p-4">
                <h3 className="flex items-center gap-2 text-2xl font-bold text-leafGreen">
                  <MessageCircle size={20} className="text-brandGreen" />
                  {t.pages.contact.whatsappTitle}
                </h3>
                <p className="mt-2 text-sm text-charcoal/80">{t.pages.contact.whatsappDescription}</p>

                <div className="mt-3 rounded-xl bg-brandGreen/8 p-3 text-sm text-charcoal/80">
                  <p className="font-semibold text-leafGreen">{t.pages.contact.whatsappExampleLabel}</p>
                  <p className="mt-2 italic leading-relaxed">"{t.pages.contact.whatsappExampleMessage}"</p>
                </div>

                {whatsappLink ? (
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brandGreen px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brandGreen/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandGreen focus-visible:ring-offset-2"
                  >
                    <MessageCircle size={17} />
                    {t.pages.contact.whatsappButton}
                  </a>
                ) : (
                  <>
                    <button
                      type="button"
                      disabled
                      className="mt-3 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-brandGreen/55 px-5 py-2.5 text-sm font-semibold text-white"
                    >
                      <MessageCircle size={17} />
                      {t.pages.contact.whatsappButton}
                    </button>
                    <p className="mt-2 text-xs text-charcoal/70">{t.pages.contact.whatsappUnavailable}</p>
                  </>
                )}
              </section>

              <section className="rounded-2xl bg-[#EDF8FE] p-4">
                <h3 className="flex items-center gap-2 text-2xl font-bold text-brandBlue">
                  <Mail size={20} />
                  {t.pages.contact.emailTitle}
                </h3>
                <p className="mt-2 text-sm text-charcoal/80">{t.pages.contact.emailDescription}</p>

                <form className="mt-3 space-y-2.5" noValidate>
                  <div>
                    <label htmlFor="contact-email" className="mb-1 block text-sm font-semibold text-charcoal/80">
                      {t.pages.contact.emailLabel}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      onBlur={() => setHasBlurredEmail(true)}
                      placeholder={t.pages.contact.emailPlaceholder}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-charcoal outline-none transition placeholder:text-charcoal/45 focus-visible:border-brandBlue focus-visible:ring-2 focus-visible:ring-brandBlue/25"
                    />
                    {showEmailError ? <p className="mt-1 text-xs text-red-600">{t.pages.contact.emailInvalid}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="mb-1 block text-sm font-semibold text-charcoal/80">
                      {t.pages.contact.messageLabel}
                    </label>
                    <textarea
                      id="contact-message"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      rows={2}
                      placeholder={t.pages.contact.messagePlaceholder}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-charcoal outline-none transition placeholder:text-charcoal/45 focus-visible:border-brandBlue focus-visible:ring-2 focus-visible:ring-brandBlue/25"
                    />
                  </div>

                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-brandBlue/55 px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    <Send size={16} />
                    {t.pages.contact.sendEmail}
                  </button>
                  <p className="text-xs text-charcoal/70">{t.pages.contact.emailComingSoon}</p>
                </form>
              </section>
            </div>
          </article>

          <article className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100 lg:p-7">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brandGreen/12 text-brandGreen">
                <Phone size={19} />
              </span>
              <div>
                <h2 className="text-3xl font-extrabold text-leafGreen">{t.pages.contact.enquiryTitle}</h2>
                <p className="mt-2 text-charcoal/75">{t.pages.contact.enquiryDescription}</p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div className="mx-auto w-full max-w-[460px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <iframe
                  title={t.pages.contact.mapTitle}
                  src={mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full"
                />
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-brandBlue transition hover:bg-brandBlue/10"
                >
                  <ExternalLink size={16} />
                  {t.pages.contact.mapLink}
                </a>
              </div>

              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brandGreen/12 text-brandGreen">
                    <Phone size={16} />
                  </span>
                  <div>
                    <p className="font-bold text-leafGreen">{t.pages.contact.phoneLabel}</p>
                    <a href={`tel:${headOfficeContact.phone}`} className="text-charcoal transition hover:text-brandBlue hover:underline">
                      {headOfficeContact.phone}
                    </a>
                    <p className="text-sm text-charcoal/65">({t.pages.contact.phoneHoursLabel})</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brandGreen/12 text-brandGreen">
                    <Printer size={16} />
                  </span>
                  <div>
                    <p className="font-bold text-leafGreen">{t.pages.contact.faxLabel}</p>
                    <p className="text-charcoal">{headOfficeContact.fax}</p>
                  </div>
                </div>
                </div>

                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brandGreen/12 text-brandGreen">
                    <MapPin size={16} />
                  </span>
                  <div>
                    <p className="font-bold text-leafGreen">{t.pages.contact.headOfficeLabel}</p>
                    <p className="font-semibold text-charcoal">{headOfficeContact.companyName}</p>
                    <p className="text-charcoal/85">{headOfficeContact.addressLine1}</p>
                    <p className="text-charcoal/85">{headOfficeContact.addressLine2}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-2xl bg-[#EAF8F0] px-4 py-3">
              <Leaf className="mt-0.5 shrink-0 text-brandGreen" size={18} />
              <div>
                <p className="font-bold text-leafGreen">{t.pages.contact.closingTitle}</p>
                <p className="text-sm text-charcoal/70">{t.pages.contact.closingDescription}</p>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  )
}
