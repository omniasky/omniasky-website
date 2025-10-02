import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AnimatedIcon } from '@/components/atoms/AnimatedIcon'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  badge?: string
  badgeVariant?: 'default' | 'secondary' | 'destructive' | 'outline'
  url?: string
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  badge,
  badgeVariant = 'secondary',
  url
}) => {
  return (
    <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm h-full flex flex-col">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <CardHeader className="relative z-10 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all"></div>
              <AnimatedIcon className="relative w-14 h-14 p-3.5 bg-gradient-to-br from-primary/10 to-primary/20 text-primary rounded-xl group-hover:from-primary/20 group-hover:to-primary/30 transition-all">
                <Icon className="w-7 h-7" />
              </AnimatedIcon>
            </div>
          </div>
          {badge && (
            <Badge variant={badgeVariant} className="text-xs font-medium">
              {badge}
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-10 pt-0 flex-1 flex flex-col">
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
          {description}
        </p>

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-4 group/link"
          >
            Visit Website
            <svg
              className="ml-1 w-4 h-4 group-hover/link:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}

        {/* Bottom accent line */}
        <div className="mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 transition-all duration-500"></div>
      </CardContent>
    </Card>
  )
}