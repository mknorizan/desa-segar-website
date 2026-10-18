import { Link } from 'react-router-dom'
import { categories } from '../../data/categories'
import { useI18n } from '../../i18n/I18nContext'
import { Container } from '../common/Container'
import { SectionHeading } from '../common/SectionHeading'
import { CategoryCard } from '../products/CategoryCard'

export function ProductCategories() {
  const { language, t } = useI18n()

  return (
    <section className="bg-softMint py-14 lg:py-20">
      <Container>
        <SectionHeading
          label={t.products.label}
          titleLine1={t.products.headingLine1}
          titleLine2={t.products.headingLine2}
          description={t.products.description}
          action={
            <Link
              to="/products"
              className="inline-flex rounded-full border border-brandGreen px-5 py-2 text-sm font-semibold text-leafGreen transition hover:bg-brandGreen/10"
            >
              {t.products.viewAll}
            </Link>
          }
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} language={language} />
          ))}
        </div>
      </Container>
    </section>
  )
}
