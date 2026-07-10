import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Text } from '@/components/typography/text'

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  variant?: 'bullet' | 'numbered'
}

export const List = forwardRef<HTMLUListElement, ListProps>(
  ({ className, variant = 'bullet', children, ...props }, ref) => {
    const bullet = variant === 'bullet' ? '→' : undefined
    const number = variant === 'numbered'

    return (
      <ul
        ref={ref}
        className={cn('space-y-2', className)}
        role="list"
        {...props}
      >
        {children}
      </ul>
    )
  }
)

List.displayName = 'List'

export const ListItem = forwardRef<HTMLLIElement, HTMLAttributes<HTMLLIElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <li ref={ref} className={cn('flex items-baseline gap-2', className)} {...props}>
        <span className="text-primary flex-shrink-0" aria-hidden="true">→</span>
        <Text size="sm" className="leading-relaxed">
          {children}
        </Text>
      </li>
    )
  }
)

ListItem.displayName = 'ListItem'
