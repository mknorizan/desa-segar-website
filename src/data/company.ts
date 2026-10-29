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

// Replace this with the official business WhatsApp number before launch, digits only with country code.
export const officialWhatsAppNumber = '601172271960'

export const headOfficeContact = {
  companyName: 'BEST & KWIK MART SDN BHD',
  addressLine1: 'No 9A, Jalan BK 5A/2, Bandar Kinrara,',
  addressLine2: '47180 Puchong, Selangor Darul Ehsan',
  phone: '+603-80706337',
  fax: '+603-80704421',
  businessHours: 'Mon - Fri, 8AM - 5PM',
}

export function buildWhatsAppLink(message: string) {
  const sanitizedNumber = officialWhatsAppNumber.replace(/\D/g, '')
  if (!sanitizedNumber) {
    return null
  }

  return `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(message)}`
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
