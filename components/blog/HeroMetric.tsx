"use client"
import NumberFlow from '@number-flow/react'
import { useEffect, useState } from 'react'

interface HeroMetricProps {
  value: number
  label: string
  subtitle?: string
  prefix?: string
  suffix?: string
}

export default function HeroMetric({
  value,
  label,
  subtitle,
  prefix = '',
  suffix = ''
}: HeroMetricProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="not-prose my-16">
      <div className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 p-12 md:p-16 shadow-sm">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:20px_20px]" />
        <div className="relative flex flex-col items-center justify-center text-center">
          <span className="inline-block rounded-full bg-white/80 dark:bg-black/40 px-6 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-6 tracking-wide uppercase">
            {label}
          </span>
          <div className="text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-4 tabular-nums">
            {prefix}
            <NumberFlow
              value={isVisible ? value : 0}
              format={{ notation: 'standard' }}
              transformTiming={{ duration: 1000, easing: 'ease-out' }}
            />
            {suffix}
          </div>
          {subtitle && (
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-medium max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
