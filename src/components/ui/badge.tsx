import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'error' | 'outline'
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          {
            'border-transparent bg-primary text-primary-foreground shadow-sm':
              variant === 'default',
            'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80':
              variant === 'secondary',
            'border-transparent bg-success-500 text-white':
              variant === 'success',
            'border-transparent bg-warning-500 text-white':
              variant === 'warning',
            'border-transparent bg-error-500 text-white':
              variant === 'error',
            'text-foreground': variant === 'outline',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'
