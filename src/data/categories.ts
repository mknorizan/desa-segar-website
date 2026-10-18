import type { CategoryItem } from '../types/content'

export const categories: CategoryItem[] = [
  {
    id: 'fruits-vegetables',
    icon: 'leaf',
    image:
      'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=900&q=80',
    title: {
      bm: 'Buah-buahan & Sayur-sayuran',
      en: 'Fresh Fruits & Vegetables',
    },
    description: {
      bm: 'Hasil segar yang dipilih setiap hari untuk keluarga anda.',
      en: 'Freshly selected produce for your family every day.',
    },
  },
  {
    id: 'seafood',
    icon: 'fish',
    image:
      'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=900&q=80',
    title: {
      bm: 'Makanan Laut',
      en: 'Seafood',
    },
    description: {
      bm: 'Pilihan makanan laut segar untuk hidangan harian.',
      en: 'A fresh seafood selection for daily meals.',
    },
  },
  {
    id: 'meat-poultry',
    icon: 'beef',
    image:
      'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?auto=format&fit=crop&w=900&q=80',
    title: {
      bm: 'Daging & Ayam',
      en: 'Meat & Poultry',
    },
    description: {
      bm: 'Sumber protein berkualiti untuk masakan seisi keluarga.',
      en: 'Quality protein choices for your family meals.',
    },
  },
  {
    id: 'groceries-pantry',
    icon: 'shopping-basket',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
    title: {
      bm: 'Barangan Dapur & Pantry',
      en: 'Groceries & Pantry Essentials',
    },
    description: {
      bm: 'Keperluan harian pantry dengan nilai terbaik.',
      en: 'Pantry essentials at great everyday value.',
    },
  },
  {
    id: 'household',
    icon: 'house',
    image:
      'https://images.unsplash.com/photo-1583947582886-f40ec95dd752?auto=format&fit=crop&w=900&q=80',
    title: {
      bm: 'Keperluan Rumah',
      en: 'Household Essentials',
    },
    description: {
      bm: 'Produk kebersihan dan penjagaan rumah untuk keselesaan anda.',
      en: 'Home care essentials to keep your household comfortable.',
    },
  },
]
