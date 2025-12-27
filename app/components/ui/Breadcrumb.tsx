'use client'

import Link from 'next/link'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline'
import { BreadcrumbSchema } from '@/app/components/seo/JsonLd'

export interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  // Build full breadcrumb path including home
  const fullItems = [{ name: 'Home', href: '/' }, ...items]

  // Build schema items with full URLs
  const schemaItems = fullItems.map((item) => ({
    name: item.name,
    url: `https://www.uluspas.com${item.href}`
  }))

  return (
    <>
      {/* JSON-LD Schema */}
      <BreadcrumbSchema items={schemaItems} />

      {/* Visible Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className={`${className}`}>
        <ol className="flex items-center flex-wrap gap-1 text-sm">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1
            const isFirst = index === 0

            return (
              <li key={item.href} className="flex items-center">
                {/* Separator (except for first item) */}
                {!isFirst && (
                  <ChevronRightIcon
                    className="h-3.5 w-3.5 text-stone-400 mx-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                )}

                {isLast ? (
                  // Current page (not a link)
                  <span
                    className="text-spa-sage-700 font-medium"
                    aria-current="page"
                  >
                    {isFirst ? (
                      <span className="flex items-center gap-1.5">
                        <HomeIcon className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">{item.name}</span>
                      </span>
                    ) : (
                      item.name
                    )}
                  </span>
                ) : (
                  // Link to previous page
                  <Link
                    href={item.href}
                    className="text-stone-500 hover:text-spa-sage-700 transition-colors duration-200"
                  >
                    {isFirst ? (
                      <span className="flex items-center gap-1.5">
                        <HomeIcon className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">{item.name}</span>
                      </span>
                    ) : (
                      item.name
                    )}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
