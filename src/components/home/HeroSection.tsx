import { Leaf, MapPin, ShoppingCart, Tag } from 'lucide-react'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { useI18n } from '../../i18n/I18nContext'

const heroImage = '/images/hero/desa-segar-supermarket-1.jpeg'

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Subtle decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-brandGreen/[0.06]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[44%] top-12 hidden h-36 w-20 rotate-[-30deg] rounded-[100%_0_100%_0] bg-brandGreen/[0.08] lg:block"
      />

      {/* Normalized, responsive SVG clipping shape */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute h-0 w-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath
            id="desa-segar-hero-clip"
            clipPathUnits="objectBoundingBox"
          >
            <path
              d="
                M 0.22 0
                H 1
                V 1
                H 0.28
                C 0.05 0.98, -0.04 0.84, 0.08 0.65
                C 0.18 0.49, -0.02 0.40, 0.08 0.23
                C 0.15 0.12, 0.19 0.06, 0.22 0
                Z
              "
            />
          </clipPath>
        </defs>
      </svg>

      <Container className="relative">
        <div className="grid items-center gap-8 pb-12 pt-0 lg:min-h-[540px] lg:grid-cols-[48%_52%] lg:gap-0 lg:pb-16 xl:min-h-[610px]">

          {/* Left content */}
          <div className="relative z-10 lg:pr-4">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-leafGreen">
              {t.hero.label}
            </p>

            <h1 className="max-w-[620px] text-[clamp(2.5rem,4.5vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight text-leafGreen">
              {t.hero.titleLine1}
              <span className="block text-brandBlue">
                {t.hero.titleLine2}
              </span>
            </h1>

            <p className="mt-6 max-w-[460px] text-base leading-relaxed text-charcoal/85 md:text-lg">
              {t.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/outlets" className="gap-2">
                <MapPin size={17} />
                {t.hero.primaryCta}
              </Button>

              <Button to="/products" variant="outline">
                {t.hero.secondaryCta}
              </Button>
            </div>

            {/* Brand highlights */}
            <ul className="mt-10 grid max-w-[560px] grid-cols-1 gap-4 text-xs font-medium text-charcoal sm:grid-cols-3 sm:gap-5">
              <li className="flex items-center gap-3">
                <Leaf
                  className="shrink-0 text-brandGreen"
                  size={23}
                  strokeWidth={2}
                />
                <span>{t.hero.highlights[0]}</span>
              </li>

              <li className="flex items-center gap-3">
                <Tag
                  className="shrink-0 text-brandGreen"
                  size={23}
                  strokeWidth={2}
                />
                <span>{t.hero.highlights[1]}</span>
              </li>

              <li className="flex items-center gap-3">
                <ShoppingCart
                  className="shrink-0 text-brandGreen"
                  size={23}
                  strokeWidth={2}
                />
                <span>{t.hero.highlights[2]}</span>
              </li>
            </ul>
          </div>

          {/* Right image */}
          <div className="relative h-[330px] w-full sm:h-[430px] lg:h-[540px] xl:h-[610px]">
            <div
              className="absolute inset-0 overflow-hidden lg:-right-[max(0px,calc((100vw_-_100%)_/_2))] lg:-left-10"
              style={{
                clipPath: 'url(#desa-segar-hero-clip)',
                WebkitClipPath: 'url(#desa-segar-hero-clip)',
              }}
            >
              <img
                src={heroImage}
                alt="Fresh groceries at Desa Segar supermarket"
                className="h-full w-full object-cover object-center"
                style={{ objectPosition: 'center center' }}
                fetchPriority="high"
              />
            </div>

            {/* Organic leaf accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-4 bottom-8 hidden h-24 w-12 rotate-[-35deg] rounded-[100%_0_100%_0] bg-brandGreen/20 lg:block"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
