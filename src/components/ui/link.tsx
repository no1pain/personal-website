import { AnchorHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'default' | 'muted' | 'primary'
  underline?: 'none' | 'hover' | 'always'
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant = 'default', underline = 'hover', ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1 text-sm font-medium transition-colors duration-fast ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          {
            'text-foreground hover:text-primary': variant === 'default',
            'text-muted-foreground hover:text-foreground': variant === 'muted',
            'text-primary hover:text-primary-700': variant === 'primary',
            'no-underline': underline === 'none',
            'underline decoration-1 underline-offset-4 hover:decoration-2':
              underline === 'hover',
            'underline decoration-1 underline-offset-4': underline === 'always',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Link.displayName = 'Link'
