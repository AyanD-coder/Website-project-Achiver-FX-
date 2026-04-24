import type { ReactNode } from 'react';

interface Props {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function SectionWrapper({ id, className = '', children }: Props) {
  return (
    <section
      id={id}
      className={`section-contain relative w-full px-6 py-20 lg:px-8 lg:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl">
        {children}
      </div>
    </section>
  );
}
