import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/I18nContext'
import { Container } from '../common/Container'

const communityImage =
  'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80'

export function CommunitySection() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden">
      <img src={communityImage} alt="Community-friendly grocery experience" className="h-[300px] w-full object-cover sm:h-[360px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/20" />
      <Container className="absolute inset-0 flex items-center">
        <div className="max-w-2xl text-white">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-brandGreen">{t.commitment.label}</p>
          <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
            {t.commitment.headingLine1}
            <span className="block">{t.commitment.headingLine2}</span>
          </h2>
          <p className="mt-4 text-base text-white/90">{t.commitment.description}</p>
          <Link
            to="/about"
            className="mt-6 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-leafGreen transition hover:bg-brandBlue hover:text-white"
          >
            {t.commitment.aboutLink}
          </Link>
        </div>
      </Container>
    </section>
  )
}
