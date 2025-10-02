import React from 'react'
import { AnimatedIcon } from '@/components/atoms/AnimatedIcon'

interface StatProps {
  value: string
  label: string
  icon?: React.ReactNode
}

interface HeroStatsProps {
  stats: StatProps[]
}

export const HeroStats: React.FC<HeroStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center group">
          {stat.icon && (
            <AnimatedIcon className="mx-auto mb-2">
              {stat.icon}
            </AnimatedIcon>
          )}
          <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}