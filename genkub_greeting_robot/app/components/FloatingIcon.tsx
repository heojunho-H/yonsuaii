'use client';

import { useEffect, useState } from 'react';

interface FloatingIconProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  delay?: number;
  duration?: number;
  size?: number;
}

export default function FloatingIcon({
  children,
  style,
  className = '',
  delay = 0,
  duration = 8,
  size = 48,
}: FloatingIconProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`floating-icon ${className} ${mounted ? 'visible' : ''}`}
      style={{
        ...style,
        width: size,
        height: size,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
}
