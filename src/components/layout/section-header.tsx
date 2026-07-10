import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'

export interface SectionHeaderProps extends HTMLAttributes<HTMLElement> {
  title: string
  description?: string
  level?: 2 | 3 | 4
}

export const SectionHeader = forwardRef<HTMLElement, SectionHeaderProps>(
  ({ className, title, description, level = 2, ...props }, ref) => {
    return (
      <header ref={ref} className={cn('space-y-3 max-w-2xl', className)} {...props}>
        <Heading level={level} className="text-4xl tracking-tight">
          {title}
        </Heading>
        {description && (
          <Text size="lg" className="text-muted-foreground leading-relaxed">
            {description}
          </Text>
        )}
      </header>
    )
  })

SectionHeader.displayName = 'SectionHeader'
