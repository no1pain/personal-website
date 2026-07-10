import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'md' | 'lg' | 'xl' | '2xl' | 'full'
  centered?: boolean
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = '2xl', centered = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'mx-auto px-4 md:px-6',
          {
            'max-w-2xl': size === 'md',
            'max-w-4xl': size === 'lg',
            'max-w-5xl': size === 'xl',
            'max-w-6xl': size === '2xl',
            'max-w-7xl': size === 'full',
            'text-center': centered,
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'
