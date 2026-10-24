import type { Language } from '../types/content'

export interface Translations {
  siteName: string
  meta: {
    defaultTitle: string
    defaultDescription: string
  }
  nav: {
    home: string
    about: string
    products: string
    outlets: string
    contact: string
    findOutlets: string
    menu: string
    close: string
  }
  hero: {
    label: string
    titleLine1: string
    titleLine2: string
    description: string
    primaryCta: string
    secondaryCta: string
    highlights: string[]
  }
  products: {
    label: string
    headingLine1: string
    headingLine2: string
    description: string
    viewAll: string
  }
  whyChoose: {
    label: string
    headingLine1: string
    headingLine2: string
    items: Array<{ title: string; description: string }>
  }
  outlets: {
    label: string
    headingLine1: string
    headingLine2: string
    description: string
    viewAll: string
    getDirections: string
    directionsUnavailable: string
    filterLabel: string
    filterPlaceholder: string
  }
  commitment: {
    label: string
    headingLine1: string
    headingLine2: string
    description: string
    aboutLink: string
  }
  pages: {
    home: { title: string; description: string }
    about: { title: string; intro: string }
    products: { title: string; intro: string }
    outlets: { title: string; intro: string; noResult: string }
    contact: { title: string; intro: string; enquiry: string; outletsLink: string }
  }
  footer: {
    description: string
    quickLinks: string
    productCategories: string
    contact: string
    rights: string
    privacy: string
    terms: string
    socialLabel: string
    placeholderContact: string
  }
  common: {
    learnMore: string
    imagePending: string
    languageBm: string
    languageEn: string
  }
}

export const translations: Record<Language, Translations> = {
  bm: {
    siteName: 'Pasaraya Desa Segar',
    meta: {
      defaultTitle: 'Pasaraya Desa Segar | Segar untuk Setiap Komuniti',
      defaultDescription:
        'Pasaraya Desa Segar menyediakan hasil segar, barangan dapur, dan keperluan isi rumah untuk komuniti setempat di Malaysia.',
    },
    nav: {
      home: 'Utama',
      about: 'Tentang Kami',
      products: 'Produk Kami',
      outlets: 'Cawangan Kami',
      contact: 'Hubungi Kami',
      findOutlets: 'Cari Cawangan',
      menu: 'Menu',
      close: 'Tutup',
    },
    hero: {
      label: 'KESEGARAN UNTUK SETIAP KEJIRANAN',
      titleLine1: 'Barangan Runcit Segar.',
      titleLine2: 'Keluarga Ceria.',
      description:
        'Membawa kualiti, kesegaran, dan nilai harian lebih dekat kepada komuniti anda.',
      primaryCta: 'Cari Cawangan',
      secondaryCta: 'Terokai Produk Kami',
      highlights: ['Hasil Segar Berkualiti', 'Nilai Harian Terbaik', 'Pasaraya Kejiranan Anda'],
    },
    products: {
      label: 'PRODUK KAMI',
      headingLine1: 'Produk Berkualiti untuk',
      headingLine2: 'Kehidupan Harian Lebih Baik',
      description:
        'Daripada hasil segar hingga keperluan harian, Desa Segar menawarkan pelbagai produk berkualiti untuk keperluan keluarga anda.',
      viewAll: 'Lihat Semua Produk',
    },
    whyChoose: {
      label: 'KENAPA PILIH DESA SEGAR',
      headingLine1: 'Lebih Daripada',
      headingLine2: 'Sebuah Pasaraya',
      items: [
        {
          title: 'Kesegaran Boleh Dipercayai',
          description: 'Hasil berkualiti dipilih dengan teliti untuk pelanggan.',
        },
        {
          title: 'Nilai Hebat Setiap Hari',
          description: 'Barangan runcit mampu milik untuk keperluan isi rumah.',
        },
        {
          title: 'Lokasi Mudah Diakses',
          description: 'Pasaraya kejiranan untuk pengalaman membeli-belah mudah.',
        },
        {
          title: 'Bersama Komuniti',
          description: 'Pengalaman membeli-belah mesra untuk keluarga setempat.',
        },
      ],
    },
    outlets: {
      label: 'CAWANGAN KAMI',
      headingLine1: 'Cari Cawangan',
      headingLine2: 'Desa Segar Berdekatan',
      description:
        'Kunjungi cawangan kami untuk menikmati produk segar, barangan berkualiti, dan pengalaman membeli-belah yang lebih baik.',
      viewAll: 'Lihat Semua Cawangan',
      getDirections: 'Dapatkan Arah',
      directionsUnavailable: 'Arah akan dikemas kini',
      filterLabel: 'Cari cawangan',
      filterPlaceholder: 'Cari nama cawangan atau lokasi',
    },
    commitment: {
      label: 'KOMITMEN KAMI',
      headingLine1: 'Kejiranan Anda,',
      headingLine2: 'Komitmen Kami.',
      description:
        'Kami komited untuk berkhidmat kepada komuniti setempat dengan produk segar, keperluan berkualiti, dan pengalaman membeli-belah yang lebih baik.',
      aboutLink: 'Ketahui Tentang Kami',
    },
    pages: {
      home: {
        title: 'Utama | Pasaraya Desa Segar',
        description: 'Laman rasmi Pasaraya Desa Segar untuk komuniti kejiranan di Malaysia.',
      },
      about: {
        title: 'Tentang Kami | Pasaraya Desa Segar',
        intro:
          'Desa Segar memberi tumpuan kepada produk berkualiti, kesegaran, harga berpatutan, dan pengalaman membeli-belah mesra keluarga.',
      },
      products: {
        title: 'Produk Kami | Pasaraya Desa Segar',
        intro:
          'Terokai rangkaian kategori utama yang direka untuk memenuhi keperluan harian keluarga anda.',
      },
      outlets: {
        title: 'Cawangan Kami | Pasaraya Desa Segar',
        intro:
          'Cari cawangan Desa Segar berdekatan untuk pengalaman membeli-belah yang lebih mudah.',
        noResult: 'Tiada cawangan ditemui untuk carian ini.',
      },
      contact: {
        title: 'Hubungi Kami | Pasaraya Desa Segar',
        intro: 'Hubungi kami untuk pertanyaan umum dan maklumat lanjut.',
        enquiry: 'Pertanyaan Umum',
        outletsLink: 'Lihat Direktori Cawangan',
      },
    },
    footer: {
      description:
        'Pasaraya kejiranan yang membawa hasil segar, keperluan berkualiti, dan nilai harian untuk komuniti anda.',
      quickLinks: 'Pautan Pantas',
      productCategories: 'Kategori Produk',
      contact: 'Hubungi',
      rights: 'Hak cipta terpelihara.',
      privacy: 'Dasar Privasi',
      terms: 'Terma Penggunaan',
      socialLabel: 'Ikuti Kami',
      placeholderContact: `BEST & KWIK MART SDN BHD (1313318-H)
                           No 9A, Jalan BK 5A/2, Bandar Kinrara,
                           47180 Puchong, Selangor Darul Ehsan
                           Tel : +603-80706337
                           Fax : +603-80704421`,
    },
    common: {
      learnMore: 'Ketahui lanjut',
      imagePending: 'Imej rasmi akan dikemas kini',
      languageBm: 'BM',
      languageEn: 'EN',
    },
  },
  en: {
    siteName: 'Pasaraya Desa Segar',
    meta: {
      defaultTitle: 'Pasaraya Desa Segar | Freshness for Every Neighbourhood',
      defaultDescription:
        'Pasaraya Desa Segar offers fresh produce, groceries, and household essentials for Malaysian neighbourhood communities.',
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Our Products',
      outlets: 'Our Outlets',
      contact: 'Contact Us',
      findOutlets: 'Find Our Outlets',
      menu: 'Menu',
      close: 'Close',
    },
    hero: {
      label: 'FRESHNESS FOR EVERY NEIGHBOURHOOD',
      titleLine1: 'Fresh Groceries.',
      titleLine2: 'Happy Families.',
      description:
        'Bringing quality, freshness, and everyday value closer to your neighbourhood.',
      primaryCta: 'Find Our Outlets',
      secondaryCta: 'Explore Our Products',
      highlights: ['Fresh Quality Produce', 'Everyday Great Value', 'Your Neighbourhood Supermarket'],
    },
    products: {
      label: 'OUR PRODUCTS',
      headingLine1: 'Quality Products for',
      headingLine2: 'a Better Everyday',
      description:
        "From fresh produce to everyday essentials, Desa Segar offers a wide range of quality products to meet your family's needs.",
      viewAll: 'View All Products',
    },
    whyChoose: {
      label: 'WHY CHOOSE DESA SEGAR',
      headingLine1: 'More Than Just a',
      headingLine2: 'Supermarket',
      items: [
        {
          title: 'Freshness You Can Trust',
          description: 'Quality produce, carefully selected for customers.',
        },
        {
          title: 'Great Value Everyday',
          description: 'Affordable groceries for everyday household needs.',
        },
        {
          title: 'Convenient Locations',
          description: 'Neighbourhood supermarkets designed for convenient shopping.',
        },
        {
          title: 'Serving Our Community',
          description: 'A welcoming shopping experience for local families.',
        },
      ],
    },
    outlets: {
      label: 'OUR OUTLETS',
      headingLine1: 'Find Your Nearest',
      headingLine2: 'Desa Segar',
      description:
        'Visit our outlets and experience fresh groceries, quality products, and a better shopping experience.',
      viewAll: 'View All Outlets',
      getDirections: 'Get Directions',
      directionsUnavailable: 'Directions coming soon',
      filterLabel: 'Search outlets',
      filterPlaceholder: 'Search by outlet or location',
    },
    commitment: {
      label: 'OUR COMMITMENT',
      headingLine1: 'Your Neighbourhood,',
      headingLine2: 'Our Commitment.',
      description:
        'We are here to serve our local communities with fresh products, quality essentials, and a better everyday shopping experience.',
      aboutLink: 'Learn About Us',
    },
    pages: {
      home: {
        title: 'Home | Pasaraya Desa Segar',
        description: 'Official website of Pasaraya Desa Segar for Malaysian neighbourhood communities.',
      },
      about: {
        title: 'About Us | Pasaraya Desa Segar',
        intro:
          'Desa Segar focuses on quality products, freshness, affordability, and a family-friendly grocery shopping experience.',
      },
      products: {
        title: 'Our Products | Pasaraya Desa Segar',
        intro: 'Explore our core categories designed for your everyday household needs.',
      },
      outlets: {
        title: 'Our Outlets | Pasaraya Desa Segar',
        intro: 'Find your nearest Desa Segar outlet for a more convenient grocery visit.',
        noResult: 'No outlets found for this search term.',
      },
      contact: {
        title: 'Contact Us | Pasaraya Desa Segar',
        intro: 'Get in touch with us for general enquiries and company information.',
        enquiry: 'General Enquiries',
        outletsLink: 'View Outlet Directory',
      },
    },
    footer: {
      description:
        'A neighbourhood supermarket bringing fresh produce, quality essentials, and everyday value to your community.',
      quickLinks: 'Quick Links',
      productCategories: 'Product Categories',
      contact: 'Contact',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      socialLabel: 'Follow Us',
      placeholderContact: `BEST & KWIK MART SDN BHD (1313318-H)
                           No 9A, Jalan BK 5A/2, Bandar Kinrara,
                           47180 Puchong, Selangor Darul Ehsan
                           Tel : +603-80706337
                           Fax : +603-80704421`,
    },
    common: {
      learnMore: 'Learn more',
      imagePending: 'Official image coming soon',
      languageBm: 'BM',
      languageEn: 'EN',
    },
  },
}
