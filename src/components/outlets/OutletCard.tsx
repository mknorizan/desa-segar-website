import { Clock3, MapPin } from 'lucide-react'
import type { OutletItem, Language } from '../../types/content'

interface OutletCardProps {
  outlet: OutletItem
  language: Language
  directionsLabel: string
  showMap?: boolean
}

function resolveMapEmbedUrl(outletMapEmbedUrl: string | undefined, locationText: string) {
  if (!outletMapEmbedUrl) {
    return `https://www.google.com/maps?q=${encodeURIComponent(locationText)}&output=embed`
  }

  const iframeSrcMatch = outletMapEmbedUrl.match(/src=["']([^"']+)["']/i)
  return iframeSrcMatch?.[1] ?? outletMapEmbedUrl
}

export function OutletCard({ outlet, language, directionsLabel, showMap = false }: OutletCardProps) {
  const locationText = outlet.location[language].replace(/\s+/g, ' ').trim()
  const mapEmbedUrl = resolveMapEmbedUrl(outlet.mapEmbedUrl, locationText)
  const mapDirectionsUrl =
    outlet.directionsUrl ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationText)}`

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft">
      <img src={outlet.image} alt={outlet.name} loading="lazy" className="h-40 w-full object-cover" />
      <div className="flex h-full flex-col space-y-3 p-5">
        <div className={showMap ? 'min-h-[160px] space-y-3' : 'space-y-3'}>
          <h3 className="text-xl font-bold text-leafGreen">{outlet.name.toLocaleUpperCase()}</h3>
          <div className="space-y-2">
            <div className="space-y-2 text-xs text-charcoal/80">
              <p className="flex items-start gap-2">
                <MapPin size={16} strokeWidth={2.2} className="mt-0.5 shrink-0 text-brandBlue" />
                {locationText.toLocaleUpperCase()}
              </p>
            </div>
            <div className="space-y-2 text-sm text-charcoal/80">
              <p className="flex items-start gap-2">
                <Clock3 size={18} strokeWidth={2.2} className="mt-0.5 shrink-0 text-brandBlue" />
                {outlet.hours[language].toLocaleUpperCase()}
              </p>
            </div>
          </div>
        </div>

        {showMap ? (
          <div className="space-y-3 pt-1">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <iframe
                title={`Map location for ${outlet.name}`}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-48 w-full sm:h-55"
              />
            </div>
          </div>
        ) : (
          <a
            href={mapDirectionsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex text-sm font-semibold text-brandBlue hover:underline"
          >
            {directionsLabel}
          </a>
        )}
      </div>
    </article>
  )
}
