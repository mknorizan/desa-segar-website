import { Container } from '../components/common/Container'
import { useI18n } from '../i18n/I18nContext'
import { usePageMeta } from '../hooks/usePageMeta'
import type { ReactNode } from 'react'

interface AboutSection {
  key: string
  title: string
  body: ReactNode
}

export function AboutPage() {
  const { language, t } = useI18n()
  usePageMeta(t.pages.about.title, t.pages.about.intro)

  const sections: AboutSection[] = [
    {
      key: 'about-desa-segar',
      title: language === 'bm' ? 'Tentang Desa Segar' : 'About Desa Segar',
      body:
        language === 'bm' ? (
          <>
            <p>
                Best & Kwik Mart Sdn. Bhd., syarikat di sebalik jenama Pasaraya Desa Segar, telah membina kehadiran yang
                semakin kukuh di Malaysia menerusi lima cawangan yang terletak di lokasi strategik. Berkhidmat untuk komuniti
                di Semenyih, Bangi, Bukit Jalil, Shah Alam dan Terengganu, kami komited untuk memenuhi keperluan harian
                pelanggan sambil menyumbang kepada pembangunan ekonomi setempat.
            </p>
            <p>
                Dengan menawarkan pelbagai produk berkualiti, harga yang berpatutan serta persekitaran membeli-belah yang selesa 
                dan mesra, kami berusaha untuk menjadikan setiap kunjungan sebagai pengalaman yang menyenangkan dan memuaskan.
            </p>
          </>
        ) : (
          <>
            <p>
                Best & Kwik Mart Sdn Bhd is the company behind the Desa Segar Supermarket brand, with a growing presence
                across Malaysia through five strategically positioned branches. Located in Semenyih, Bangi, Bukit Jalil, Shah
                Alam, and Terengganu, our supermarkets are dedicated to serving local communities while contributing to
                economic development in the areas we operate.
            </p>
            <p>
                We take pride in offering a diverse range of high-quality products, delivering excellent value, convenience, 
                and a pleasant shopping experience for every customer.
            </p>
          </>
        ),
    },
    {
      key: 'our-story',
      title: language === 'bm' ? 'Kisah Kami' : 'Our Story',
      body:
        language === 'bm' ? (
          <>
            <p>
              Ditubuhkan pada tahun 2019, Best & Kwik Mart Sdn. Bhd. telah berkembang menjadi pengendali pasar raya yang
              dipercayai menerusi jenama Pasaraya Desa Segar. Berteraskan prinsip kualiti, harga berpatutan dan kepuasan
              pelanggan, kami komited dalam menyediakan pengalaman membeli-belah yang mudah, selesa dan menyeronokkan kepada
              komuniti yang kami layani.
            </p>
            <p>
              Dengan cawangan yang luas, sebuah gudang berkeluasan 35,000 kaki persegi, serta lebih daripada 10,000 pilihan
              produk, kami sentiasa berusaha memenuhi keperluan pelanggan yang sentiasa berkembang. Disokong oleh pasukan
              yang berdedikasi dan asas operasi yang kukuh, Pasaraya Desa Segar terus komited dalam menawarkan nilai
              terbaik, kesegaran produk dan perkhidmatan yang cemerlang setiap hari.
            </p>
          </>
        ) : (
          <>
            <p>
              Founded in 2019, Best & Kwik Mart Sdn Bhd has grown into a trusted retail operator through its Desa Segar
              Supermarket brand. Built on the principles of quality, affordability, and customer satisfaction, we are
              committed to providing a convenient and enjoyable shopping experience for the communities we serve.
            </p>
            <p>
              With spacious outlets, a robust 35,000-square-foot warehouse, and over 10,000 product selections, we
              continuously strive to meet the evolving needs of our customers. Supported by dedicated teams and a strong
              operational foundation, Desa Segar Supermarket remains focused on delivering value, freshness, and
              exceptional service every day.
            </p>
          </>
        ),
    },
    {
      key: 'mission-values',
      title: language === 'bm' ? 'Misi & Nilai' : 'Mission & Values',
      body:
        language === 'bm' ? (
          <p>
            Di Pasaraya Desa Segar, kami komited untuk menyediakan produk berkualiti pada harga yang berpatutan supaya
            setiap pelanggan dapat menikmati nilai terbaik. Kami juga sentiasa memastikan suasana membeli-belah yang
            bersih, selesa dan mesra, agar setiap kunjungan bersama kami menjadi pengalaman yang menyenangkan untuk seisi
            keluarga.
          </p>
        ) : (
          <p>
            Desa Segar Supermarket is dedicated to offering quality products at competitive prices, ensuring excellent
            value for our customers. We take pride in maintaining a clean and comfortable shopping environment, making
            every visit a pleasant experience.
          </p>
        ),
    },
    {
      key: 'quality',
      title: language === 'bm' ? 'Kesegaran & Kualiti' : 'Freshness & Quality',
      body:
        language === 'bm' ? (
          <p>
            Di Pasaraya Desa Segar, kualiti dan kesegaran menjadi keutamaan dalam setiap perkara yang kami lakukan. Kami
            memilih dan mendapatkan produk dengan teliti bagi memastikan pelanggan menikmati hasil segar, barangan runcit
            berkualiti serta keperluan isi rumah yang dipercayai setiap hari. Dengan komitmen untuk mengekalkan standard
            yang tinggi di setiap cawangan, kami sentiasa berusaha menawarkan nilai terbaik dan pengalaman membeli-belah
            yang memuaskan serta boleh dipercayai oleh pelanggan.
          </p>
        ) : (
          <p>
            At Desa Segar Supermarket, quality and freshness are at the heart of everything we do. We carefully source and
            select our products to ensure customers enjoy fresh produce, quality groceries, and trusted household essentials
            every day. With a commitment to maintaining high standards across our stores, we strive to provide exceptional
            value and a shopping experience that customers can rely on.
          </p>
        ),
    },
    {
      key: 'community',
      title: language === 'bm' ? 'Komitmen Komuniti' : 'Community Commitment',
      body:
        language === 'bm' ? (
          <>
            <p>
              Sebagai pasar raya komuniti, Pasaraya Desa Segar komited untuk berkhidmat dan menyokong masyarakat di
              kawasan sekitar kami. Kami percaya bahawa hubungan yang kukuh dengan pelanggan dapat dibina melalui layanan
              yang mesra, lokasi yang mudah diakses serta produk yang memenuhi keperluan harian keluarga.
            </p>
            <p>
              Seiring dengan pertumbuhan syarikat, kami terus berusaha menyumbang secara positif kepada pembangunan komuniti setempat dan
              menjadi sebahagian daripada kehidupan seharian yang dipercayai oleh pelanggan.
            </p>
          </>
        ) : (
          <p>
            As a neighbourhood supermarket, Desa Segar Supermarket is committed to serving and supporting the communities
            around us. We believe in building lasting relationships with our customers by providing friendly service,
            convenient shopping locations, and products that meet the everyday needs of local families. Through our
            continued growth, we aim to contribute positively to the communities we serve and become a trusted part of
            daily life.
          </p>
        ),
    },
  ]

  return (
    <section className="bg-softMint/50 py-14 lg:py-20">
      <Container>
        <h1 className="text-4xl font-extrabold text-leafGreen md:text-5xl">{t.pages.about.title.split('|')[0].trim()}</h1>
        <p className="mt-4 max-w-3xl text-lg text-charcoal/80">{t.pages.about.intro}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.key} className="rounded-2xl bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-bold text-leafGreen">{section.title}</h2>
              <div className="mt-3 space-y-3 text-charcoal/80">{section.body}</div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
