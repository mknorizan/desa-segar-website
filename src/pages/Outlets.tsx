import { useMemo, useState } from 'react'
import type { ChangeEvent } from 'react'
import { Container } from '../components/common/Container'
import { OutletCard } from '../components/outlets/OutletCard'
import { outlets } from '../data/outlets'
import { usePageMeta } from '../hooks/usePageMeta'
import { useI18n } from '../i18n/I18nContext'

export function OutletsPage() {
  const { language, t } = useI18n()
  const [query, setQuery] = useState('')

  usePageMeta(t.pages.outlets.title, t.pages.outlets.intro)

  const filteredOutlets = useMemo(() => {
    if (!query.trim()) {
      return outlets
    }

    const keyword = query.trim().toLowerCase()
    return outlets.filter((outlet) => {
      const searchValue = `${outlet.name} ${outlet.location[language]}`.toLowerCase()
      return searchValue.includes(keyword)
    })
  }, [query, language])

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <section className="bg-[linear-gradient(180deg,#eaf7ff_0%,#f7fcff_100%)] py-14 lg:py-20">
      <Container>
        <h1 className="text-4xl font-extrabold text-leafGreen md:text-5xl">{t.pages.outlets.title.split('|')[0].trim()}</h1>
        <p className="mt-4 max-w-3xl text-lg text-charcoal/80">{t.pages.outlets.intro}</p>

        <div className="mt-8">
          <label htmlFor="outlet-search" className="mb-2 block text-sm font-semibold text-leafGreen">
            {t.outlets.filterLabel}
          </label>
          <input
            id="outlet-search"
            type="search"
            value={query}
            onChange={onSearch}
            placeholder={t.outlets.filterPlaceholder}
            className="w-full max-w-lg rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brandBlue focus:outline-none focus:ring-2 focus:ring-brandBlue/40"
          />
        </div>

        {filteredOutlets.length > 0 ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredOutlets.map((outlet) => (
              <OutletCard
                key={outlet.id}
                outlet={outlet}
                language={language}
                directionsLabel={t.outlets.getDirections}
                showMap
              />
            ))}
          </div>
        ) : (
          <p className="mt-8 rounded-xl bg-white p-5 text-charcoal/75 shadow-soft">{t.pages.outlets.noResult}</p>
        )}
      </Container>
    </section>
  )
}
