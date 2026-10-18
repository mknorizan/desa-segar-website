import { Beef, Fish, House, Leaf, ShoppingBasket } from 'lucide-react'
import type { CategoryItem, Language } from '../../types/content'

const icons = {
  leaf: Leaf,
  fish: Fish,
  beef: Beef,
  house: House,
  'shopping-basket': ShoppingBasket,
} as const

export function CategoryCard({
  category,
  language,
  className = '',
}: {
  category: CategoryItem
  language: Language
  className?: string
}) {
  const Icon = icons[category.icon as keyof typeof icons] || Leaf

  return (
    <article className={`overflow-hidden rounded-2xl bg-white shadow-soft transition hover:-translate-y-1 ${className}`}>
      <img
        src={category.image}
        alt={category.title[language]}
        loading="lazy"
        className="h-40 w-full object-cover"
      />
      <div className="p-5">
        <div className="mb-3 flex items-center gap-3 text-leafGreen">
          <Icon size={24} strokeWidth={1.8} />
          <h3 className="text-lg font-bold leading-tight text-leafGreen">{category.title[language]}</h3>
        </div>
        <p className="text-sm text-charcoal/80">{category.description[language]}</p>
      </div>
    </article>
  )
}
