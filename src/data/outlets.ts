import type { OutletItem } from '../types/content'

const outletImage =
  'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80'

export const outlets: OutletItem[] = [
  {
    id: 'bukit-jalil',
    image: outletImage,
    name: 'PASAR RAYA DESA SEGAR LTAT',
    location: {
      bm: `G-3A, G-5 & G-6 Kompleks Niaga Taman LTAT.2, 
           Jalan Bukit Jalil Indah 4, Taman LTAT, 
           Bukit Jalil, 57000 Kuala Lumpur`,
      en: `G-3A, G-5 & G-6 Kompleks Niaga Taman LTAT.2, 
           Jalan Bukit Jalil Indah 4, Taman LTAT, 
           Bukit Jalil, 57000 Kuala Lumpur`,
    },
    hours: {
      bm: '8AM - 9PM',
      en: '8AM - 9PM',
    },
  },
  {
    id: 'alam-impian',
    image: outletImage,
    name: 'PASAR RAYA DESA SEGAR ALAM IMPIAN',
    location: {
      bm: `M, No 55,57 & 59, 35/M, Jalan Persiaran Panglima Hitam, 
           Alam Impian, 40470 Shah Alam, Selangor`,
      en: `M, No 55,57 & 59, 35/M, Jalan Persiaran Panglima Hitam, 
           Alam Impian, 40470 Shah Alam, Selangor`,
    },
    hours: {
      bm: '8AM - 9PM',
      en: '8AM - 9PM',
    },
  },
  {
    id: 'bandar-seri-putra',
    image: outletImage,
    name: 'PASAR RAYA DESA SEGAR BSP',
    location: {
      bm: `No 3,5,7-G, 
           Jalan Seri Putra 1/8 Bandar Seri Putra 1/8, 
           Bandar Seri Putra,Bangi, 
           Bandar Seri Putra, 43000 Kajang, Selangor`,
      en: `No 3,5,7-G, 
           Jalan Seri Putra 1/8 Bandar Seri Putra 1/8, 
           Bandar Seri Putra,Bangi, 
           Bandar Seri Putra, 43000 Kajang, Selangor`,
    },
    hours: {
      bm: '8AM - 9PM',
      en: '8AM - 9PM',
    },
  },
  {
    id: 'semenyih',
    image: outletImage,
    name: 'PASAR RAYA DESA SEGAR SEMENYIH',
    location: {
      bm: `No 19,21 & 23-G Plaza Dato' Mohd Said, Jalan Tps 2/1, 
           Taman Pelangi Semenyih 2, 43500 Semenyih, Selangor`,
      en: `No 19,21 & 23-G Plaza Dato' Mohd Said, Jalan Tps 2/1, 
           Taman Pelangi Semenyih 2, 43500 Semenyih, Selangor`,
    },
    hours: {
      bm: '8AM - 9PM',
      en: '8AM - 9PM',
    },
  },
  {
    id: 'pengadang-baru',
    image: outletImage,
    name: 'PASAR RAYA DESA SEGAR PENGADANG BARU',
    location: {
      bm: `LOT 1927,1928 & 1929, BANGUNAN PERKASA, MUKIM GELUGOR KEDAI, 
           Jln Kuala Berang, Kampung Pengadang Baru, 21400 Kuala Terengganu, Terengganu`,
      en: `LOT 1927,1928 & 1929, BANGUNAN PERKASA, MUKIM GELUGOR KEDAI, 
           Jln Kuala Berang, Kampung Pengadang Baru, 21400 Kuala Terengganu, Terengganu`,
    },
    hours: {
      bm: 'Dibuka 24/7',
      en: 'Open 24/7',
    },
  },
]
