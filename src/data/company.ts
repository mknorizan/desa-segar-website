import type { FooterLinkGroup } from '../types/content'

export const company = {
  logo: '/images/desa-segar-logo-enhanced-removebg.png',
  contactEmail: '',
  contactPhone: '',
  whatsappLink: '',
  socialLinks: {
    facebook: '',
    instagram: '',
    tiktok: '',
  },
}

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: { bm: 'Pautan Pantas', en: 'Quick Links' },
    links: [
      { label: { bm: 'Utama', en: 'Home' }, path: '/' },
      { label: { bm: 'Tentang Kami', en: 'About Us' }, path: '/about' },
      { label: { bm: 'Produk Kami', en: 'Our Products' }, path: '/products' },
      { label: { bm: 'Cawangan Kami', en: 'Our Outlets' }, path: '/outlets' },
      { label: { bm: 'Hubungi Kami', en: 'Contact Us' }, path: '/contact' },
    ],
  },
]
