import React, { ReactNode } from 'react';

interface HeroSectionProps {
  children: ReactNode;
}

export function HeroSection({ children }: HeroSectionProps) {
  return (
    <div className="grid w-5/6 mx-auto grid-cols-1 md:grid-cols-2">
      {children}
    </div>
  );
}

export function HeroBasic({ children }: HeroSectionProps) {
  return (
    <div className="flex items-center justify-center">
      <dl className="grid grid-cols-1 w-full">
        {children}
      </dl>
    </div>
  );
}

export function HeroGrid({ children }: HeroSectionProps) {
  return (
    <div className="flex items-center">
      <dl className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-8 gap-y-8 text-center">
        {children}
      </dl>
    </div>
  );
}
