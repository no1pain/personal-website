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
          'inline-flex items-center rounded-md border border-border/50 px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
          {
            'border-transparent bg-primary text-primary-foreground shadow-sm hover:bg-primary/90':
              variant === 'default',
            'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80':
              variant === 'secondary',
            'border-transparent bg-success-500 text-white hover:bg-success-600':
              variant === 'success',
            'border-transparent bg-warning-500 text-white hover:bg-warning-600':
              variant === 'warning',
            'border-transparent bg-error-500 text-white hover:bg-error-600':
              variant === 'error',
            'text-foreground hover:bg-accent': variant === 'outline',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'
