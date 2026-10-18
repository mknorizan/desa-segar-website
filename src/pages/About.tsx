import { Container } from '../components/common/Container'
import { useI18n } from '../i18n/I18nContext'
import { usePageMeta } from '../hooks/usePageMeta'

export function AboutPage() {
  const { language, t } = useI18n()
  usePageMeta(t.pages.about.title, t.pages.about.intro)

  const sections = [
    {
      key: 'about-desa-segar',
      title: language === 'bm' ? 'Tentang Desa Segar' : 'About Desa Segar',
      body: t.pages.about.intro,
    },
    {
      key: 'our-story',
      title: language === 'bm' ? 'Kisah Kami' : 'Our Story',
      body:
        language === 'bm'
          ? 'Maklumat sejarah rasmi akan dipaparkan selepas pengesahan perniagaan.'
          : 'Official company story details will be published after business verification.',
    },
    {
      key: 'mission-values',
      title: language === 'bm' ? 'Misi & Nilai' : 'Mission & Values',
      body:
        language === 'bm'
          ? 'Kenyataan misi dan nilai rasmi akan dikemas kini apabila diluluskan oleh pihak syarikat.'
          : 'Formal mission and values statements will be updated after company approval.',
    },
    {
      key: 'quality',
      title: language === 'bm' ? 'Kesegaran & Kualiti' : 'Freshness & Quality',
      body:
        language === 'bm'
          ? 'Desa Segar menumpukan perhatian kepada pilihan produk harian yang segar dan berkualiti untuk pelanggan.'
          : 'Desa Segar focuses on fresh and quality daily product choices for customers.',
    },
    {
      key: 'community',
      title: language === 'bm' ? 'Komitmen Komuniti' : 'Community Commitment',
      body:
        language === 'bm'
          ? 'Kami berusaha menyediakan pengalaman membeli-belah yang mesra, mudah, dan dekat dengan komuniti setempat.'
          : 'We strive to provide a warm, convenient, and neighbourhood-friendly shopping experience.',
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
              <p className="mt-3 text-charcoal/80">{section.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
