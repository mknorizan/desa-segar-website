import { Link } from 'react-router-dom'
import { outlets } from '../../data/outlets'
import { useI18n } from '../../i18n/I18nContext'
import { Container } from '../common/Container'
import { SectionHeading } from '../common/SectionHeading'
import { OutletCard } from '../outlets/OutletCard'

export function OutletHighlights() {
  const { language, t } = useI18n()

  return (
    <section className="bg-[linear-gradient(180deg,#eaf7ff_0%,#f7fcff_100%)] py-14 lg:py-20">
      <Container>
        <SectionHeading
          label={t.outlets.label}
          titleLine1={t.outlets.headingLine1}
          titleLine2={t.outlets.headingLine2}
          description={t.outlets.description}
          action={
            <Link
              to="/outlets"
              className="inline-flex rounded-full border border-brandGreen px-5 py-2 text-sm font-semibold text-leafGreen transition hover:bg-brandGreen/10"
            >
              {t.outlets.viewAll}
            </Link>
          }
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {outlets.slice(0, 4).map((outlet) => (
            <OutletCard
              key={outlet.id}
              outlet={outlet}
              language={language}
              directionsLabel={t.outlets.getDirections}
              showMap={true}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
