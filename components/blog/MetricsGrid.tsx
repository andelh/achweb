"use client"
import AnimatedMetric from './AnimatedMetric'

interface Metric {
  value: number
  label: string
  prefix?: string
  suffix?: string
  trend?: 'up' | 'down'
  trendValue?: string
}

interface MetricsGridProps {
  metrics: Metric[]
}

export default function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="not-prose my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metrics.map((metric, index) => (
          <AnimatedMetric
            key={index}
            {...metric}
            delay={index * 150}
          />
        ))}
      </div>
    </div>
  )
}
