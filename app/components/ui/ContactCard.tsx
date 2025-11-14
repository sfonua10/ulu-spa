'use client';

import React, { ReactNode } from 'react';
import { cn } from '@/app/lib/utils';

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ContactCard({
  icon,
  title,
  children,
  className,
  delay = 0
}: ContactCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-3xl',
        'bg-gradient-to-br from-white/80 to-white/40',
        'backdrop-blur-xl border border-white/20',
        'shadow-soft-lg hover:shadow-soft-xl',
        'transition-all duration-500',
        'hover:-translate-y-2',
        'animate-fade-in',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-spa-gold-500/10 to-spa-sage-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-8">
        {/* Icon */}
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-spa-gold-400/20 to-spa-sage-400/20 backdrop-blur-sm border border-spa-gold-300/30 group-hover:scale-110 transition-transform duration-500">
          <div className="text-spa-gold-600 group-hover:text-spa-gold-700 transition-colors duration-300">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-playfair text-2xl font-semibold text-stone-900 mb-4 group-hover:text-spa-gold-700 transition-colors duration-300">
          {title}
        </h3>

        {/* Content */}
        <div className="text-stone-700 space-y-3">
          {children}
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-spa-gold-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
