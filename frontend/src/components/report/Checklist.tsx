import { useState } from 'react';
import Card from '../common/Card';
import SectionHeading from '../common/SectionHeading';

export default function Checklist({ items }: { items: string[] }) {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  return (
    <section id="checklist" className="print-section scroll-mt-8">
      <Card className="space-y-5">
        <div>
          <SectionHeading title="꼭 확인해야 할 것" />
          <p className="mt-2 text-sm leading-6 text-brand-muted">계약 전 직접 확인하거나 중개인에게 요청할 항목이에요.</p>
        </div>
        <div className="space-y-3">
          {items.map((item, index) => (
            <label
              key={item}
              className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <input
                type="checkbox"
                className="mt-1 h-5 w-5 rounded border-slate-300 text-brand focus:ring-brand-accent focus:ring-offset-2"
                checked={Boolean(checked[index])}
                onChange={(event) => setChecked((value) => ({ ...value, [index]: event.target.checked }))}
              />
              <span className="text-sm font-medium leading-6 text-brand">{item}</span>
            </label>
          ))}
        </div>
      </Card>
    </section>
  );
}
