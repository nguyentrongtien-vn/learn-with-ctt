import React from 'react';

export default function Badge({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'error' | 'warning' | 'neutral'
  size = 'md',        // 'sm' | 'md'
  className = '',
  dot = false,
  dotPulse = false
}) {
  const variantStyles = {
    primary: 'bg-primary-fixed text-on-primary-fixed-variant',
    primaryContainer: 'bg-primary-container text-on-primary',
    secondary: 'bg-secondary-container/60 text-on-secondary-container',
    secondaryFixed: 'bg-secondary-fixed/60 text-on-secondary-fixed-variant',
    error: 'bg-error-container text-on-error-container',
    warning: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
    neutral: 'bg-surface-container text-on-surface-variant'
  };

  const sizeStyles = {
    sm: 'text-[11px] font-semibold px-2 py-0.5 rounded-full',
    md: 'text-label-sm font-semibold px-2.5 py-0.5 rounded-full'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 tracking-wide transition-colors ${
        variantStyles[variant] || variantStyles.primary
      } ${sizeStyles[size] || sizeStyles.md} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === 'error'
              ? 'bg-error'
              : variant === 'secondary'
              ? 'bg-secondary'
              : 'bg-primary'
          } ${dotPulse ? 'animate-pulse' : ''}`}
        />
      )}
      {children}
    </span>
  );
}
