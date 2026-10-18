import { Gem, Leaf, Store, Users } from 'lucide-react'
import { useI18n } from '../../i18n/I18nContext'
import { Container } from '../common/Container'

const icons = [Leaf, Gem, Store, Users]
const whyImage = '/images/why/fresh-and-produce.jpg'

export function WhyChooseUs() {
  const { t } = useI18n()

  return (
    <section className="bg-white py-14 lg:py-20">
      <Container>
        <p className="mb-2 text-xs font-bold tracking-[0.2em] text-brandGreen">{t.whyChoose.label}</p>
        <h2 className="mb-10 text-3xl font-extrabold text-leafGreen md:text-4xl">
          {t.whyChoose.headingLine1} <span className="text-brandBlue">{t.whyChoose.headingLine2}</span>
        </h2>

        <div className="grid items-stretch gap-8 lg:grid-cols-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {t.whyChoose.items.map((item, index) => {
              const Icon = icons[index]
              return (
                <article key={item.title} className="rounded-2xl border border-brandGreen/15 p-5">
                  <Icon className="mb-4 text-brandGreen" size={28} />
                  <h3 className="text-lg font-bold text-leafGreen">{item.title}</h3>
                  <p className="mt-2 text-sm text-charcoal/80">{item.description}</p>
                </article>
              )
            })}
          </div>

          <aside className="relative overflow-hidden rounded-[2.5rem] rounded-bl-[5rem] border border-brandGreen/20 bg-softMint lg:col-span-4">
            <img
              src={whyImage}
              alt="Supermarket interior representing Desa Segar customer experience"
              loading="lazy"
              className="h-72 w-full object-cover object-center sm:h-80 lg:h-full"
            />
            <div className="pointer-events-none absolute -left-5 top-10 h-20 w-10 rounded-full bg-brandGreen/20" />
          </aside>
        </div>
      </Container>
    </section>
  )
}
