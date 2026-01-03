import React from 'react';
import { cn } from '@/lib/utils';

export interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button
   * @default 'default'
   */
  variant?: 'default' | 'primary' | 'secondary' | 'ghost' | 'outline';
  /**
   * Whether the button has a subtle animation
   * @default true
   */
  animated?: boolean;
  /**
   * The size of the button
   * @default 'default'
   */
  size?: 'sm' | 'default' | 'lg';
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ variant = 'default', animated = true, size = 'default', className, children, ...props }, ref) => {
    // Define base classes and variant-specific classes
    const baseClasses = cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden',
      // Size variants - using consistent spacing
      size === 'sm' && 'h-9 px-3 rounded-md text-xs',
      size === 'default' && 'h-10 px-4 py-2 rounded-md',
      size === 'lg' && 'h-11 px-8 rounded-md text-base',
      // Enhanced animation classes
      animated && 'transform transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-xl active:scale-95',
      className
    );

    // Define variant-specific classes with consistent design system
    const variantClasses = cn({
      // Default variant - using CSS variables for consistency
      'bg-primary text-primary-foreground shadow hover:bg-primary/90': variant === 'default',
      // Primary variant - using NewUI signature gradient
      'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg hover:shadow-indigo-500/30': variant === 'primary',
      // Secondary variant - using consistent spacing and colors
      'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80': variant === 'secondary',
      // Ghost variant - using consistent hover states
      'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
      // Outline variant - using consistent border and spacing
      'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground': variant === 'outline',
    });

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses)}
        aria-label={props['aria-label'] || undefined}
        role="button"
        tabIndex={props.disabled ? -1 : 0}
        {...props}
      >
        {animated && (
          <>
            {/* NewUI signature shimmer effect */}
            <span 
              className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 -skew-x-12 -translate-x-full group-hover:translate-x-full" 
              aria-hidden="true"
            />
            {/* NewUI subtle glow effect */}
            <span 
              className="absolute h-full w-full bg-gradient-to-r from-indigo-400/10 via-purple-400/10 to-pink-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
              aria-hidden="true"
            />
          </>
        )}
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';

export { AnimatedButton };