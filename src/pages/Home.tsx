import { CommunitySection } from '../components/home/CommunitySection'
import { HeroSection } from '../components/home/HeroSection'
import { OutletHighlights } from '../components/home/OutletHighlights'
import { ProductCategories } from '../components/home/ProductCategories'
import { WhyChooseUs } from '../components/home/WhyChooseUs'
import { useI18n } from '../i18n/I18nContext'
import { usePageMeta } from '../hooks/usePageMeta'

export function HomePage() {
  const { t } = useI18n()
  usePageMeta(t.pages.home.title, t.pages.home.description)

  return (
    <>
      <HeroSection />
      <ProductCategories />
      <WhyChooseUs />
      <OutletHighlights />
      <CommunitySection />
    </>
  )
}
