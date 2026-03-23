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
      "flex items-center space-x-3",
      className
    )}>
      <div className={cn(
        "w-8 h-8 rounded flex items-center justify-center font-bold text-lg",
        variant === 'white' 
          ? "bg-white text-black" 
          : "bg-black text-white border border-zinc-800"
      )}>
        O
      </div>
      <span className={cn(
        "text-xl font-bold tracking-tight",
        variant === 'white' ? "text-white" : "text-zinc-900"
      )}>
        OmniaSky
      </span>
    </div>
  )
}