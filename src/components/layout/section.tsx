import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  contained?: boolean
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, size = 'md', contained = false, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'w-full',
          {
            'py-12': size === 'sm',
            'py-16': size === 'md',
            'py-20': size === 'lg',
            'py-24': size === 'xl',
          },
          className
        )}
        {...props}
      >
        {contained ? (
          <div className="container mx-auto px-4 md:px-6">{children}</div>
        ) : (
          children
        )}
      </section>
    )
  }
)

Section.displayName = 'Section'
