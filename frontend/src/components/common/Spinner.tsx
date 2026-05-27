export default function Spinner({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <span
      className={`${className} inline-block animate-spin rounded-full border-2 border-slate-300 border-t-brand`}
      aria-label="진행 중"
    />
  );
}
