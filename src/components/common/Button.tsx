import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  to?: string
  onClick?: () => void
  variant?: 'primary' | 'outline'
  className?: string
}

export function Button({
  children,
  to,
  onClick,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brandBlue'
  const styles =
    variant === 'primary'
      ? 'bg-brandBlue text-white hover:bg-blue-600'
      : 'border border-brandGreen text-leafGreen hover:bg-brandGreen/10'

  if (to) {
    return (
      <Link to={to} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  )
}
