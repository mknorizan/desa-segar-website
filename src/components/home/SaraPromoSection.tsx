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

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
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

              <div className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-5">
                {t.sara.steps.map((step, index) => {
                  const Icon = stepIcons[index]
                  return (
                    <div key={step} className="relative rounded-2xl border border-brandGreen/20 bg-white/90 p-3.5">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brandGreen/12 text-brandGreen">
                        <Icon size={18} />
                      </span>
                      <p className="mt-2 text-sm font-semibold leading-snug text-leafGreen">{step}</p>
                      {index < t.sara.steps.length - 1 ? (
                        <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-brandGreen/20 bg-white p-1.5 text-brandGreen sm:inline-flex">
                          <ArrowRight size={13} />
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

            <aside className="relative mx-auto flex h-full min-h-[300px] w-full max-w-[470px] items-end justify-center lg:min-h-[350px]">
              <div aria-hidden="true" className="absolute right-9 top-6 h-16 w-24 rotate-[-10deg] rounded-xl border border-brandBlue/25 bg-white/95 p-2 shadow-lg">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-brandBlue">{t.sara.myKad}</p>
                <div className="mt-2 h-2 w-11 rounded bg-brandBlue/35" />
                <div className="mt-1 h-2 w-14 rounded bg-brandGreen/35" />
              </div>

              <div className="relative w-[92%] max-w-[390px]">
                <div className="absolute -top-8 left-0 h-20 w-20 rounded-full bg-lime-200/80 blur-sm" />
                <div className="absolute -top-12 right-3 h-24 w-24 rounded-full bg-brandBlue/20 blur-sm" />

                <div className="absolute left-5 top-8 h-16 w-12 rounded-lg bg-[#BFE06A] shadow-md" />
                <div className="absolute left-20 top-5 h-18 w-11 rounded-t-[1rem] rounded-b-md bg-amber-400 shadow-md" />
                <div className="absolute left-32 top-10 h-14 w-10 rounded-lg bg-white shadow-md" />
                <div className="absolute right-16 top-8 h-12 w-12 rounded-full bg-[#83C54D] shadow-md" />
                <div className="absolute right-6 top-12 h-11 w-11 rounded-full bg-[#67B53A] shadow-md" />

                <div className="absolute right-20 top-2 rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-brandGreen shadow-md">Rice</div>
                <div className="absolute right-1 top-2 rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-brandGreen shadow-md">Oil</div>

                <div className="relative mt-16 rounded-[1.4rem] border-4 border-[#0c8b4c] bg-[#11a45a] px-6 pb-6 pt-10 shadow-xl">
                  <div className="absolute -top-4 left-9 right-9 h-5 rounded-full border-4 border-[#0c8b4c] bg-[#E9FFF0]" />
                  <div className="grid grid-cols-5 gap-1.5">
                    {Array.from({ length: 15 }).map((_, index) => (
                      <span key={index} className="h-2.5 rounded-full bg-[#0a7a43]/55" />
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  )
}
