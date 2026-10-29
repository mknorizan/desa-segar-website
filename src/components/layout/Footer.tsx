import { Link } from 'react-router-dom'
import { company, footerLinkGroups, headOfficeContact } from '../../data/company'
import { useI18n } from '../../i18n/I18nContext'
import { Container } from '../common/Container'

const footerCategories = [
  { bm: 'Sayur-sayuran & Buah-buahan Segar', en: 'Fresh Vegetables & Fruits' },
  { bm: 'Makanan Sejuk Beku', en: 'Frozen Food' },
  { bm: 'Makanan Laut', en: 'Seafood' },
  { bm: 'Daging, Ayam & Tenusu', en: 'Meat, Poultry & Dairies' },
  { bm: 'Minuman & Keperluan Rumah', en: 'Beverages & Household Essentials' },
] as const

export function Footer() {
  const { language, t } = useI18n()
  const year = new Date().getFullYear()
  const hasContact = company.contactEmail || company.contactPhone

  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={company.logo} alt="Pasaraya Desa Segar logo" className="mb-4 h-12 w-auto" />
            <p className="text-sm text-charcoal/85">{t.footer.description}</p>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title.en}>
              <h3 className="mb-3 text-sm font-bold text-leafGreen">{group.title[language]}</h3>
              <ul className="space-y-2 text-sm">
                {group.links.map((item) => (
                  <li key={item.label.en}>
                    {item.path ? (
                      <Link className="text-charcoal/85 transition hover:text-brandBlue" to={item.path}>
                        {item.label[language]}
                      </Link>
                    ) : (
                      <span className="text-charcoal/85">{item.label[language]}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-3 text-sm font-bold text-leafGreen">{t.footer.productCategories}</h3>
            <ul className="space-y-2 text-sm text-charcoal/85">
              {footerCategories.map((category) => (
                <li key={category.en}>{category[language]}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold text-leafGreen">{t.footer.contact}</h3>
            {hasContact ? (
              <div className="space-y-3 text-sm text-charcoal/85">
                <div>
                  <p className="font-semibold text-charcoal">{headOfficeContact.companyName}</p>
                  <p>{headOfficeContact.addressLine1}</p>
                  <p>{headOfficeContact.addressLine2}</p>
                  <p className="mt-2">Tel : {headOfficeContact.phone}</p>
                  <p>Fax : {headOfficeContact.fax}</p>
                </div>

                <ul className="space-y-2">
                  {company.contactEmail ? <li>{company.contactEmail}</li> : null}
                  {company.contactPhone ? <li>{company.contactPhone}</li> : null}
                </ul>
              </div>
            ) : (
              <div className="text-sm text-charcoal/70">{t.footer.placeholderContact()}</div>
            )}
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-5 text-xs text-charcoal/70 sm:flex sm:items-center sm:justify-between">
          <p>
            © {year} {t.siteName}. {t.footer.rights}
          </p>
          <div className="mt-3 flex gap-4 sm:mt-0">
            <span>{t.footer.privacy}</span>
            <span>{t.footer.terms}</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
