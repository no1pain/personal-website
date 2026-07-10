import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 2, children, ...props }, ref) => {
    const sizeClasses = {
      1: 'text-6xl leading-[72px] tracking-tighter font-bold',
      2: 'text-5xl leading-[56px] tracking-tight font-bold',
      3: 'text-4xl leading-[44px] tracking-tight font-bold',
      4: 'text-3xl leading-[40px] tracking-tight font-semibold',
      5: 'text-2xl leading-[32px] tracking-tight-ish-sm font-semibold',
      6: 'text-xl leading-[28px] tracking-tight-ish-sm font-medium',
    }

    if (level === 1) {
      return <h1 ref={ref} className={cn(sizeClasses[1], className)} {...props}>{children}</h1>
    }
    if (level === 2) {
      return <h2 ref={ref} className={cn(sizeClasses[2], className)} {...props}>{children}</h2>
    }
    if (level === 3) {
      return <h3 ref={ref} className={cn(sizeClasses[3], className)} {...props}>{children}</h3>
    }
    if (level === 4) {
      return <h4 ref={ref} className={cn(sizeClasses[4], className)} {...props}>{children}</h4>
    }
    if (level === 5) {
      return <h5 ref={ref} className={cn(sizeClasses[5], className)} {...props}>{children}</h5>
    }
    return <h6 ref={ref} className={cn(sizeClasses[6], className)} {...props}>{children}</h6>
  }
)

Heading.displayName = 'Heading'
