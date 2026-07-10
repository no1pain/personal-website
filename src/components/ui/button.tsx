import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-medium transition-all duration-fast ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 button-press',
          {
            'bg-primary text-primary-foreground hover:bg-primary-700 shadow-sm':
              variant === 'primary',
            'bg-secondary text-secondary-foreground hover:bg-secondary/80':
              variant === 'secondary',
            'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
            'border border-input bg-background hover:bg-accent hover:text-accent-foreground':
              variant === 'outline',

            'h-7 px-2.5 text-xs': size === 'xs',
            'h-8 px-3 text-sm': size === 'sm',
            'h-9 px-4 text-sm': size === 'md',
            'h-10 px-5 text-base': size === 'lg',
            'h-11 px-6 text-base': size === 'xl',

            'rounded-sm': variant !== 'ghost',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
