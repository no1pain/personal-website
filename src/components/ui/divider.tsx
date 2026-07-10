import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  variant?: 'solid' | 'dashed'
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = 'horizontal', variant = 'solid', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'shrink-0 bg-border',
          {
            'h-px w-full': orientation === 'horizontal',
            'h-full w-px': orientation === 'vertical',
            'border-t border-dashed': variant === 'dashed',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Divider.displayName = 'Divider'
