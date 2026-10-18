import type { ReactNode } from 'react'

interface SectionHeadingProps {
  label: string
  titleLine1: string
  titleLine2: string
  description?: string
  action?: ReactNode
}

export function SectionHeading({
  label,
  titleLine1,
  titleLine2,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl">
        <p className="mb-2 text-xs font-bold tracking-[0.2em] text-brandGreen">{label}</p>
        <h2 className="text-3xl font-extrabold leading-tight text-leafGreen md:text-4xl">
          {titleLine1}
          <span className="block text-brandBlue">{titleLine2}</span>
        </h2>
      </div>
      <div className="max-w-xl text-sm text-charcoal/90 md:text-base">
        {description ? <p>{description}</p> : null}
        {action ? <div className="mt-4">{action}</div> : null}
      </div>
    </div>
  )
}
