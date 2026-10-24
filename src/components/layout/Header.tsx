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
    <header className="sticky top-0 z-50 overflow-visible border-b border-brandBlue/10 bg-white/95 backdrop-blur">
      <Container className="relative overflow-visible">
        <div className="flex h-[88px] items-center justify-between lg:h-24">
          <NavLink to="/" className="relative z-[60] flex items-center overflow-visible" aria-label={t.siteName}>
            <span className="relative block h-[88px] w-[88px] shrink-0 sm:h-[92px] sm:w-[102px] lg:h-24 lg:w-[128px]">
              <img
                src="/images/desa-segar-logo-enhanced-removebg.png"
                alt="Pasaraya Desa Segar logo"
                className="absolute bottom-[-12px] left-0 w-[96px] max-w-none drop-shadow-[0_10px_16px_rgba(13,76,55,0.18)] sm:bottom-[-16px] sm:w-[112px] lg:bottom-[-26px] lg:w-[138px]"
              />
            </span>
            <span className="hidden min-w-0 flex-col justify-center pl-2 leading-tight sm:flex">
              <span className="text-sm font-extrabold tracking-tight text-leafGreen lg:text-base">
                Pasaraya Desa Segar
              </span>
              <span className="text-[11px] font-medium text-charcoal/65 lg:text-xs">
                Segar • Berkualiti • Berbaloi
              </span>
            </span>
          </NavLink>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex" aria-label="Primary">
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
        </div>
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
