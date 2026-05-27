const items = [
  { href: '#summary', label: '요약' },
  { href: '#scope', label: '확인 범위' },
  { href: '#contract-info', label: '계약 기본정보' },
  { href: '#risk-summary', label: '위험도 요약' },
  { href: '#document-analysis', label: '문서별 비교 분석' },
  { href: '#required-documents', label: '추가 확인 서류' },
  { href: '#stage-checklist', label: '단계별 체크리스트' },
  { href: '#questions', label: '질문' },
  { href: '#final-comment', label: '최종 코멘트' },
];

export default function TableOfContents() {
  return (
    <aside className="print-hidden md:sticky md:top-6 md:self-start">
      <nav className="flex gap-2 overflow-x-auto rounded-2xl border border-slate-200 bg-white/90 p-2 shadow-sm backdrop-blur md:flex-col md:p-3">
        <p className="hidden px-3 pb-2 pt-1 text-xs font-bold text-brand-muted md:block">리포트 목차</p>
        {items.map((item) => (
          <a
            key={item.href}
            className="whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold text-brand-muted transition hover:bg-slate-100 hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
