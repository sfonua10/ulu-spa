'use client';

import React, { ReactNode } from 'react';
import { cn } from '@/app/lib/utils';

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
  delay?: number;
}

export default function ContactCard({
  icon,
  title,
  children,
  footer,
  className,
  delay = 0
}: ContactCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-3xl h-full flex flex-col',
        'bg-gradient-to-br from-white/90 to-white/60',
        'backdrop-blur-xl',
        'border border-spa-gold-200/30',
        'shadow-soft-lg hover:shadow-soft-xl',
        'transition-all duration-500 ease-out',
        'hover:-translate-y-2',
        'hover:border-spa-gold-300/50',
        'animate-fade-in',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-spa-gold-500/5 to-spa-sage-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Inner glow effect */}
      <div className="absolute inset-0 rounded-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] pointer-events-none" />

      <div className="relative p-8 flex flex-col flex-grow">
        {/* Icon with glow effect */}
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-spa-gold-100 to-spa-gold-50 backdrop-blur-sm border border-spa-gold-200/50 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500">
          <div className="text-spa-gold-600 group-hover:text-spa-gold-700 transition-colors duration-300">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-playfair text-2xl font-semibold text-stone-900 mb-4 group-hover:text-spa-gold-700 transition-colors duration-300">
          {title}
        </h3>

        {/* Content - flex-grow to push footer down */}
        <div className="text-stone-700 space-y-3 flex-grow">
          {children}
        </div>

        {/* Footer - always at bottom */}
        {footer && (
          <div className="mt-auto pt-4 border-t border-stone-200">
            {footer}
          </div>
        )}
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-spa-gold-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-spa-gold-300/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
