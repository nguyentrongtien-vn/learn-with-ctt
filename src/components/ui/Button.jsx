import React from 'react';
import Icon from './Icon';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'surface' | 'ghost' | 'error' | 'outline'
  size = 'md',        // 'sm' | 'md' | 'lg'
  icon = null,
  iconRight = null,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  loading = false,
  title = ''
}) {
  const variantStyles = {
    primary:
      'bg-primary-container text-on-primary hover:opacity-95 shadow-sm active:scale-[0.98]',
    primarySolid:
      'bg-primary text-on-primary hover:bg-primary-container shadow-sm active:scale-[0.98]',
    secondary:
      'bg-secondary text-on-secondary hover:opacity-95 shadow-sm active:scale-[0.98]',
    surface:
      'bg-surface-container hover:bg-surface-container-high text-on-surface active:scale-[0.98]',
    surfaceLowest:
      'bg-surface-container-lowest hover:bg-surface-container text-on-surface shadow-sm active:scale-[0.98]',
    ghost:
      'text-on-surface-variant hover:text-on-surface hover:bg-surface-container active:scale-[0.98]',
    error:
      'bg-error-container text-on-error-container hover:bg-error-container/80 active:scale-[0.98]',
    outline:
      'border border-surface-container-high text-on-surface hover:bg-surface-container-low active:scale-[0.98]'
  };

  const sizeStyles = {
    sm: 'px-2.5 py-1.5 text-label-sm font-semibold rounded-lg gap-1.5',
    md: 'px-4 py-2 text-label-md font-semibold rounded-xl gap-2',
    lg: 'px-5 py-2.5 text-label-md font-bold rounded-xl gap-2.5'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      title={title}
      className={`inline-flex items-center justify-center font-title transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none ${
        variantStyles[variant] || variantStyles.primary
      } ${sizeStyles[size] || sizeStyles.md} ${className}`}
    >
      {loading ? (
        <span className="material-symbols-outlined text-[18px] animate-spin">
          refresh
        </span>
      ) : (
        icon && <Icon name={icon} size={size === 'sm' ? 16 : 18} />
      )}
      <span>{children}</span>
      {!loading && iconRight && (
        <Icon name={iconRight} size={size === 'sm' ? 16 : 18} />
      )}
    </button>
  );
}
