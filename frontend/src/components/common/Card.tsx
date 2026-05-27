import type { HTMLAttributes } from 'react';

export default function Card({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`print-card rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card sm:p-8 ${className}`}
      {...props}
    />
  );
}
