import type { StageChecklist } from '../../types/analysis';
import Card from '../common/Card';
import SectionHeading from '../common/SectionHeading';

export default function StageChecklistTimeline({ stages }: { stages: StageChecklist[] }) {
  return (
    <section id="stage-checklist" className="print-section scroll-mt-8">
      <Card className="space-y-5">
        <SectionHeading title="계약 단계별로 확인할 것" />
        <div className="stage-timeline grid gap-4 lg:grid-cols-2">
          {stages.map((stage, index) => (
            <article key={stage.stage} className="print-card rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="font-bold text-brand">{stage.stage}</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {stage.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" readOnly />
                    <span className="break-keep text-sm leading-6 text-brand">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Card>
    </section>
  );
}
