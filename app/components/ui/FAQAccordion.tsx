'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="group bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-300"
            aria-expanded={expandedIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <h3 className="text-lg md:text-xl font-playfair font-semibold text-gray-900 pr-4">
              {item.question}
            </h3>
            <ChevronDown
              className={`faq-icon w-6 h-6 text-gray-700 flex-shrink-0 transition-transform duration-500 ${
                expandedIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            id={`faq-answer-${index}`}
            className={`faq-content ${expandedIndex === index ? '' : 'collapsed'}`}
            style={{
              maxHeight: expandedIndex === index ? '1000px' : '0',
              opacity: expandedIndex === index ? 1 : 0,
            }}
          >
            <div className="px-6 pb-5 pt-2">
              <p
                className="text-gray-800 leading-relaxed font-montserrat"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
