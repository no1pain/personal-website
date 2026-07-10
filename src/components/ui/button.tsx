import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const buttonClasses = cn(
      'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
      {
        'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow active:scale-[0.98]':
          variant === 'primary',
        'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-[0.98]':
          variant === 'secondary',
        'hover:bg-accent hover:text-accent-foreground active:scale-[0.98]': variant === 'ghost',
        'border border-input bg-background hover:bg-accent hover:text-accent-foreground active:scale-[0.98]':
          variant === 'outline',

        'h-7 px-2.5 text-xs': size === 'xs',
        'h-8 px-3 text-sm': size === 'sm',
        'h-9 px-4 text-sm': size === 'md',
        'h-10 px-5 text-base': size === 'lg',
        'h-11 px-6 text-base': size === 'xl',

        'rounded-sm': variant !== 'ghost',
      },
      className
    )

    if (asChild && 'href' in props) {
      return (
        <a
          ref={ref as any}
          className={buttonClasses}
          {...(props as any)}
        />
      )
    }

    return (
      <button
        ref={ref}
        className={buttonClasses}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
