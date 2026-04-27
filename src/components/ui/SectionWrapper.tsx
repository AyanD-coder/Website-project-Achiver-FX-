import type { CSSProperties, ReactNode } from 'react';

interface Props {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export function SectionWrapper({ id, className = '', style, children }: Props) {
  return (
    <section
      id={id}
      className={`section-contain relative w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28 ${className}`}
      style={style}
    >
      <div className="mx-auto w-full max-w-7xl">
        {children}
      </div>
    </section>
  );
}
