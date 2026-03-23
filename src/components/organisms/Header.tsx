import React from 'react'
import { Logo } from '@/components/atoms/Logo'

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Logo variant="default" className="opacity-90 hover:opacity-100 transition-opacity" />
      </div>
    </header>
  )
}