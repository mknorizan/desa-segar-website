import { Container } from '../components/common/Container'
import { CategoryCard } from '../components/products/CategoryCard'
import { categories } from '../data/categories'
import { usePageMeta } from '../hooks/usePageMeta'
import { useI18n } from '../i18n/I18nContext'

export function ProductsPage() {
  const { language, t } = useI18n()
  usePageMeta(t.pages.products.title, t.pages.products.intro)

  return (
    <section className="bg-softMint py-14 lg:py-20">
      <Container>
        <h1 className="text-4xl font-extrabold text-leafGreen md:text-5xl">{t.pages.products.title.split('|')[0].trim()}</h1>
        <p className="mt-4 max-w-3xl text-lg text-charcoal/80">{t.pages.products.intro}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} language={language} />
          ))}
        </div>
      </Container>
    </section>
  )
}
