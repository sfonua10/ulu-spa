'use client';

import { useState, useId } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/app/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const baseId = useId();

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item, index) => {
        const questionId = `${baseId}-question-${index}`;
        const answerId = `${baseId}-answer-${index}`;
        const isExpanded = expandedIndex === index;

        return (
          <div
            key={index}
            className="group bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300"
          >
            <button
              id={questionId}
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-300"
              aria-expanded={isExpanded}
              aria-controls={answerId}
            >
              <h3 className="text-lg md:text-xl font-playfair font-semibold text-gray-900 pr-4">
                {item.question}
              </h3>
              <ChevronDown
                className={cn(
                  'faq-icon w-6 h-6 text-gray-700 flex-shrink-0 transition-transform duration-500',
                  isExpanded && 'rotate-180'
                )}
              />
            </button>

            <div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              aria-hidden={!isExpanded}
              className={cn('faq-content', !isExpanded && 'collapsed')}
              style={{
                maxHeight: isExpanded ? '1000px' : '0',
                opacity: isExpanded ? 1 : 0,
              }}
            >
              <div className="px-6 pb-5 pt-2">
                <p className="text-gray-800 leading-relaxed font-montserrat">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
