import React from 'react';

export default function Icon({ name, className = '', fill = false, size = 20 }) {
  return (
    <span
      className={`material-symbols-outlined ${fill ? 'fill' : ''} ${className}`}
      style={{ fontSize: `${size}px`, lineHeight: 1 }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
