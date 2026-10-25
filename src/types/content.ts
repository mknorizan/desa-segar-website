export type Language = 'bm' | 'en'

export interface NavItem {
  key: string
  path: string
}

export interface CategoryItem {
  id: string
  icon: string
  image: string
  title: Record<Language, string>
  description: Record<Language, string>
}

export interface OutletItem {
  id: string
  image: string
  name: string
  location: Record<Language, string>
  hours: Record<Language, string>
  mapEmbedUrl?: string
  directionsUrl?: string
}

export interface FooterLinkGroup {
  title: Record<Language, string>
  links: Array<{
    label: Record<Language, string>
    path?: string
  }>
}
