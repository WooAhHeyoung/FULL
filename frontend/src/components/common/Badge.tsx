import type { RiskLevel } from '../../types/analysis';

const classes: Record<RiskLevel, string> = {
  고위험: 'border-risk-high-border bg-risk-high-bg text-risk-high-text',
  주의: 'border-risk-medium-border bg-risk-medium-bg text-risk-medium-text',
  높음: 'border-risk-high-border bg-risk-high-bg text-risk-high-text',
  보통: 'border-risk-medium-border bg-risk-medium-bg text-risk-medium-text',
  낮음: 'border-risk-low-border bg-risk-low-bg text-risk-low-text',
  '확인 필요': 'border-risk-low-border bg-risk-low-bg text-risk-low-text',
  '판단 불가': 'border-slate-300 bg-slate-50 text-slate-700',
};

export default function Badge({ level }: { level: RiskLevel }) {
  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-bold ${classes[level]}`}>
      {level}
    </span>
  );
}
