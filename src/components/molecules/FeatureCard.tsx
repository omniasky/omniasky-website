import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  badge?: string
  statusBadge?: string
  url?: string
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  badge,
  statusBadge,
  url
}) => {
  return (
    <div className="group relative w-full h-full bg-white border border-zinc-200 transition-colors duration-300 hover:border-zinc-400">
      <div className="p-8 md:p-10 flex flex-col h-full">
        
        <div className="flex items-start justify-between mb-20">
          <div className="p-3 bg-zinc-50 rounded select-none group-hover:bg-zinc-100 transition-colors">
            <Icon className="w-6 h-6 text-zinc-900" strokeWidth={1.5} />
          </div>
          
          {badge && (
            <span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500 bg-zinc-50 px-3 py-1 border border-zinc-100">
              {badge}
            </span>
          )}
        </div>

        <div className="mt-auto">
          <div className="flex items-center space-x-3 mb-4">
            <h3 className="text-2xl font-bold text-zinc-900 tracking-tight transition-colors">
              {title}
            </h3>
            {statusBadge && (
              <span className="text-[9px] font-semibold tracking-widest uppercase text-zinc-500 bg-zinc-50 px-2 py-1 border border-zinc-200 rounded-sm">
                {statusBadge}
              </span>
            )}
          </div>
          
          <p className="text-sm text-zinc-500 font-light leading-relaxed mb-10">
            {description}
          </p>

          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 pt-6 border-t border-zinc-100 group/link w-full"
            >
              <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-900">
                Explore 
              </span>
              <svg
                className="ml-1 w-4 h-4 text-zinc-400 group-hover/link:text-zinc-900 group-hover/link:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}