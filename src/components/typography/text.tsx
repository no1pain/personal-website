import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: 'xs' | 'sm' | 'base' | 'lg'
  weight?: 'normal' | 'medium' | 'semibold'
  muted?: boolean
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size = 'base', weight = 'normal', muted = false, children, ...props }, ref) => {
    const sizeClasses = {
      xs: 'text-xs leading-4',
      sm: 'text-sm leading-5',
      base: 'text-base leading-6',
      lg: 'text-lg leading-7',
    }

    const weightClasses = {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
    }

    return (
      <p
        ref={ref}
        className={cn(
          sizeClasses[size],
          weightClasses[weight],
          muted && 'text-muted-foreground',
          className
        )}
        {...props}
      >
        {children}
      </p>
    )
  }
)

Text.displayName = 'Text'
