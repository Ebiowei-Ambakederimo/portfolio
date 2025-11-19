import { ReactNode } from 'react';

interface ScrollSectionProps {
  children: ReactNode;
  // bgClass: string;
  className?: string;
}

export default function ScrollSection({ children, className = '' }: ScrollSectionProps) {
  return (
    <div className={`content content--sticky content--grid bg-white text-black ${className}`}>
      {children}
    </div>
  );
}