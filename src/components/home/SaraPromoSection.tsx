import { ArrowRight, CheckCircle2, ExternalLink, IdCard, ShoppingCart } from 'lucide-react'
import { useI18n } from '../../i18n/I18nContext'
import { Container } from '../common/Container'

const stepIcons = [ShoppingCart, IdCard, CheckCircle2] as const

export function SaraPromoSection() {
  const { t } = useI18n()

  return (
    <section className="bg-white pb-14 pt-10 lg:pb-20 lg:pt-14">
      <Container>
        <div className="relative overflow-hidden rounded-[2.4rem] border border-brandGreen/15 bg-gradient-to-br from-[#f6fff7] via-white to-[#ebf7ff] px-6 py-7 shadow-soft lg:px-10 lg:py-10">
          <div aria-hidden="true" className="pointer-events-none absolute -left-10 top-10 h-36 w-24 rotate-[25deg] rounded-[100%_0_100%_0] bg-brandGreen/10" />
          <div aria-hidden="true" className="pointer-events-none absolute right-5 top-4 h-24 w-16 rotate-[-20deg] rounded-[100%_0_100%_0] bg-brandBlue/10" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 right-10 h-48 w-28 rotate-[22deg] rounded-[100%_0_100%_0] bg-brandGreen/10" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
            <div className="relative z-20">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brandGreen">{t.sara.label}</p>

              <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6">
                <img
                  src="/images/logo-sara.svg"
                  alt={t.sara.logoAlt}
                  loading="lazy"
                  className="h-20 w-auto max-w-full sm:h-24"
                />

                <div className="lg:border-l lg:border-brandGreen/25 lg:pl-6">
                  <h2 className="text-3xl font-extrabold leading-tight text-leafGreen md:text-5xl">{t.sara.title}</h2>
                  <p className="mt-3 max-w-3xl text-base text-charcoal/80 md:text-lg">{t.sara.description}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-4">
                {t.sara.steps.map((step, index) => {
                  const Icon = stepIcons[index]
                  return (
                    <div key={step} className="relative text-center">
                      <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full border border-brandGreen/20 bg-[#e8f9e9] text-brandGreen shadow-sm">
                        <Icon size={25} />
                      </span>
                      <p className="mt-2 text-sm font-semibold leading-snug text-leafGreen">{step}</p>
                      {index < t.sara.steps.length - 1 ? (
                        <span className="absolute -right-3 top-8 hidden -translate-y-1/2 text-brandGreen sm:inline-flex">
                          <ArrowRight size={18} />
                        </span>
                      ) : null}
                    </div>
                  )
                })}
              </div>

              <a
                href="https://sara.gov.my/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brandGreen px-6 py-3 text-sm font-semibold text-white transition hover:bg-brandGreen/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandGreen focus-visible:ring-offset-2"
              >
                <ExternalLink size={17} />
                {t.sara.cta}
              </a>

              <p className="mt-3 text-xs text-charcoal/65">{t.sara.disclaimer}</p>
            </div>

            <aside className="relative z-10 mx-auto w-full max-w-[620px] overflow-hidden lg:pl-4 lg:translate-x-8 xl:translate-x-10">
              <img
                src="/images/sara-illustration.png"
                alt={t.sara.basketAlt}
                loading="lazy"
                className="h-[250px] w-full object-contain object-right-center sm:h-[300px] lg:h-[350px]"
              />
            </aside>
          </div>
        </div>
      </Container>
    </section>
  )
}
