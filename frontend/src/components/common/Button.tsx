import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type Variant = 'primary' | 'ghost' | 'link';

const variantClass: Record<Variant, string> = {
  primary:
    'bg-brand text-white shadow-sm shadow-slate-900/10 hover:bg-brand-soft hover:shadow-md disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500 disabled:shadow-none',
  ghost:
    'border border-surface-border bg-white text-brand shadow-sm hover:border-slate-300 hover:bg-slate-50 hover:shadow-md',
  link: 'text-brand-muted underline-offset-4 hover:text-brand hover:underline',
};

const baseClass =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

interface ButtonLinkProps extends LinkProps {
  variant?: Variant;
  children: ReactNode;
}

export function Button({ className = '', variant = 'primary', ...props }: ButtonProps) {
  return <button className={`${baseClass} ${variantClass[variant]} ${className}`} {...props} />;
}

export function ButtonLink({ className = '', variant = 'primary', ...props }: ButtonLinkProps) {
  return <Link className={`${baseClass} ${variantClass[variant]} ${className}`} {...props} />;
}
