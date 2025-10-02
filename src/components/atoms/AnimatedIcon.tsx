import React from 'react'
import { cn } from '@/lib/utils'

interface AnimatedIconProps {
  children: React.ReactNode
  className?: string
  animation?: 'pulse' | 'bounce' | 'spin'
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({ 
  children, 
  className,
  animation = 'pulse'
}) => {
  const animationClass = {
    pulse: 'animate-pulse-slow',
    bounce: 'animate-bounce',
    spin: 'animate-spin'
  }[animation]

  return (
    <div className={cn(
      "inline-flex items-center justify-center",
      animationClass,
      className
    )}>
      {children}
    </div>
  )
}