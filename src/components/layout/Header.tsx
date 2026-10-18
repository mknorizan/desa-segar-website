import { Menu, MapPin, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navigationItems } from '../../data/navigation'
import { useI18n } from '../../i18n/I18nContext'
import { Button } from '../common/Button'
import { Container } from '../common/Container'

export function Header() {
  const { language, setLanguage, t } = useI18n()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brandBlue/10 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <NavLink to="/" className="shrink-0" aria-label={t.siteName}>
          <img src="/images/desa-segar-logo-enhanced.jpeg" alt="Pasaraya Desa Segar logo" className="h-12 w-auto" />
        </NavLink>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navigationItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition hover:text-brandBlue ${
                  isActive ? 'text-brandBlue' : 'text-charcoal'
                }`
              }
            >
              {t.nav[item.key as keyof typeof t.nav] as string}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="rounded-full border border-slate-200 p-1">
            <button
              type="button"
              onClick={() => setLanguage('bm')}
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                language === 'bm' ? 'bg-brandBlue text-white' : 'text-charcoal'
              }`}
              aria-label="Switch to Bahasa Malaysia"
            >
              {t.common.languageBm}
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                language === 'en' ? 'bg-brandBlue text-white' : 'text-charcoal'
              }`}
              aria-label="Switch to English"
            >
              {t.common.languageEn}
            </button>
          </div>
          <Button to="/outlets" className="gap-2">
            <MapPin size={16} />
            {t.nav.findOutlets}
          </Button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-charcoal lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t.nav.close : t.nav.menu}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-slate-100 bg-white lg:hidden">
          <Container className="py-4">
            <nav className="mb-4 flex flex-col gap-3" aria-label="Mobile primary">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.key}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-1 text-sm font-semibold text-charcoal hover:bg-brandBlue/10 hover:text-brandBlue"
                >
                  {t.nav[item.key as keyof typeof t.nav] as string}
                </NavLink>
              ))}
            </nav>
            <div className="mb-4 flex gap-2">
              <button
                type="button"
                onClick={() => setLanguage('bm')}
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  language === 'bm' ? 'bg-brandBlue text-white' : 'bg-slate-100 text-charcoal'
                }`}
              >
                {t.common.languageBm}
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  language === 'en' ? 'bg-brandBlue text-white' : 'bg-slate-100 text-charcoal'
                }`}
              >
                {t.common.languageEn}
              </button>
            </div>
            <Button to="/outlets" className="w-full justify-center gap-2" onClick={() => setOpen(false)}>
              <MapPin size={16} />
              {t.nav.findOutlets}
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
