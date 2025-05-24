import React from 'react';

export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`flex flex-col w-full px-4 lg:px-64 mx-auto
  ${className}`}
    >
      {children}
    </section>
  );
}
