import { AlertTriangle } from 'lucide-react';

export default function DisclaimerBox() {
  return (
    <div className="print-section print-card flex gap-4 rounded-2xl border border-amber-200 bg-amber-50/90 p-5 text-amber-900 shadow-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/70">
        <AlertTriangle size={20} aria-hidden="true" />
      </div>
      <div>
        <p className="font-bold">참고용 분석 결과</p>
        <p className="mt-1 break-keep text-sm leading-6">
          본 AI 분석 결과는 법적 효력이 없으며 참고용입니다. 보증금, 계약 기간, 특약, 권리관계 등 중요한 사항은
          반드시 등기부등본과 실제 계약 조건을 확인하고, 필요 시 공인중개사 또는 법률 전문가와 상담하십시오.
        </p>
      </div>
    </div>
  );
}
