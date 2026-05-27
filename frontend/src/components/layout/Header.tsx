import { FileText } from 'lucide-react';

const navItems = [
  { label: '서비스 소개', href: '#service-intro' },
  { label: '분석 프로세스', href: '#analysis-process' },
  { label: '리포트 예시', href: '#report-preview' },
  { label: '주의사항', href: '#disclaimer' },
];

export default function Header() {
  return (
    <header className="print-hidden sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
          aria-label="계약서 리스크 분석 홈"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white shadow-sm shadow-slate-900/20">
            <FileText size={20} aria-hidden="true" />
          </div>
          <div>
            <p className="text-base font-bold text-brand">계약서 리스크 분석</p>
            <p className="text-xs font-medium text-brand-muted">AI 계약 검토 어시스턴트</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="주요 섹션">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="text-sm font-bold text-brand transition hover:text-brand-accent focus:outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-brand-accent"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="inline-flex items-center justify-center rounded-xl bg-brand px-4 py-2.5 text-sm font-bold text-white shadow-sm shadow-slate-900/15 transition hover:bg-brand-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
          href="#upload"
        >
          분석 시작하기
        </a>
      </div>
    </header>
  );
}
