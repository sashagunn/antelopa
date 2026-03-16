import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  variant?: 'white' | 'light' | 'dark';
}

export function Section({
  id,
  className = '',
  children,
  variant = 'white',
}: SectionProps) {
  const variants = {
    white: 'bg-white',
    light: 'bg-background', 
    alt: 'bg-background-alt',
    dark: 'bg-primary-dark text-white',
  };

  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${variants[variant]} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
