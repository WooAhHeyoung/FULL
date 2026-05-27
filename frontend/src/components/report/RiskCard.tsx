import type { Risk } from '../../types/analysis';
import Badge from '../common/Badge';

export default function RiskCard({ risk }: { risk: Risk }) {
  const title = risk.title ?? risk.clause;
  const questions = risk.questions ?? [];

  return (
    <article className="print-card risk-card space-y-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          {risk.category ? <p className="text-xs font-bold text-brand-accent">{risk.category}</p> : null}
          <h3 className="mt-1 text-lg font-bold text-brand">{title}</h3>
        </div>
        <Badge level={risk.level} />
      </div>

      <div className="grid gap-3 sm:grid-cols-[150px_minmax(0,1fr)]">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <p className="text-xs font-bold text-brand-muted">확인 자료</p>
          <p className="mt-2 break-keep text-sm font-bold leading-6 text-brand">
            {risk.checkSource ?? '계약서 본문'}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <p className="text-xs font-bold text-brand-muted">점검 안내</p>
          <p className="mt-2 break-keep text-sm leading-6 text-brand">{risk.content}</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
        <p className="text-xs font-bold text-brand-muted">왜 중요한지</p>
        <p className="mt-2 break-keep text-sm leading-6 text-brand">{risk.explanation}</p>
      </div>

      {risk.action ? (
        <div className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3">
          <p className="text-xs font-bold text-brand-accent">지금 해야 할 확인 행동</p>
          <p className="mt-2 break-keep text-sm leading-6 text-brand">{risk.action}</p>
        </div>
      ) : null}

      {questions.length > 0 ? (
        <div>
          <p className="mb-2 text-xs font-bold text-brand-muted">물어볼 질문</p>
          <ul className="space-y-2">
            {questions.slice(0, 2).map((question) => (
              <li
                key={question}
                className="break-keep rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-brand"
              >
                {question}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
