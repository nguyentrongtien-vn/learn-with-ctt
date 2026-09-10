import React from 'react';

export default function ProgressBar({
  value = 0,
  max = 100,
  variant = 'primary', // 'primary' | 'secondary' | 'error' | 'warning'
  height = 'h-1.5',
  className = ''
}) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const fillColors = {
    primary: 'bg-primary-container',
    secondary: 'bg-secondary',
    error: 'bg-error',
    warning: 'bg-tertiary-container'
  };

  return (
    <div
      className={`w-full bg-surface-container-highest rounded-full overflow-hidden ${height} ${className}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
    >
      <div
        className={`h-full rounded-full transition-all duration-500 ease-out ${
          fillColors[variant] || fillColors.primary
        }`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
