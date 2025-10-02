import React from 'react'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'default' | 'white'
}

export const Logo: React.FC<LogoProps> = ({ 
  className, 
  variant = 'default' 
}) => {
  return (
    <div className={cn(
      "flex items-center space-x-2",
      className
    )}>
      <div className={cn(
        "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg",
        variant === 'white' 
          ? "bg-white text-primary" 
          : "bg-primary text-white"
      )}>
        O
      </div>
      <span className={cn(
        "text-xl font-bold",
        variant === 'white' ? "text-white" : "text-foreground"
      )}>
        OmniaSky
      </span>
    </div>
  )
}