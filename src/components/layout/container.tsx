import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  centered?: boolean
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = '6xl', centered = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'mx-auto px-4 md:px-6',
          {
            'max-w-xs': size === 'xs',
            'max-w-sm': size === 'sm',
            'max-w-md': size === 'md',
            'max-w-lg': size === 'lg',
            'max-w-xl': size === 'xl',
            'max-w-2xl': size === '2xl',
            'max-w-3xl': size === '3xl',
            'max-w-4xl': size === '4xl',
            'max-w-5xl': size === '5xl',
            'max-w-6xl': size === '6xl',
            'max-w-7xl': size === '7xl',
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
