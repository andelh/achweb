"use client"
import { NumberFlowGroup } from '@number-flow/react'
import { useEffect, useState } from 'react'

interface AnimatedMetricProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
  trend?: 'up' | 'down'
  trendValue?: string
  delay?: number
}

export default function AnimatedMetric({
  value,
  label,
  prefix = '',
  suffix = '',
  trend,
  trendValue,
  delay = 0
}: AnimatedMetricProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className="relative mb-8 rounded-xl border border-neutral-200 dark:border-neutral-800 p-8 transition-all duration-300">
      <div className="flex flex-col items-start">
        <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3 tracking-wide uppercase">
          {label}
        </span>
        <NumberFlowGroup>
          <div className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
            {prefix}
            <span
              className="inline-block tabular-nums tracking-tight"
              style={{
                '--number-flow-char-height': '0.85em',
                '--number-flow-mask-height': '0.25em',
              } as React.CSSProperties}
            >
              {isVisible ? value.toLocaleString() : '0'}
            </span>
            {suffix}
          </div>
        </NumberFlowGroup>
        {trend && trendValue && (
          <div className={`flex items-center gap-2 mt-2 ${trend === 'up' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
            <svg
              className={`w-5 h-5 ${trend === 'down' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-sm font-semibold">{trendValue}</span>
          </div>
        )}
      </div>
    </div>
  )
}
