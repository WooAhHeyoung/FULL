import { Check, Circle } from 'lucide-react';
import Spinner from '../common/Spinner';

const steps = [
  {
    title: '계약서 파일 형식을 확인하고 있어요',
    description: 'PDF, JPG, PNG 형식과 용량 기준을 확인해요.',
  },
  {
    title: '전월세 계약서 텍스트를 읽어내고 있어요',
    description: '임대차 계약서에서 분석 가능한 문장을 추출해요.',
  },
  {
    title: '보증금·계약 기간·당사자 정보를 정리하고 있어요',
    description: '임대인, 임차인, 보증금, 계약 기간을 구조화해요.',
  },
  {
    title: '9가지 전월세 리스크 기준으로 점검하고 있어요',
    description: '전세가율, 권리관계, 체납, 특약 등 핵심 항목을 확인해요.',
  },
  {
    title: '체크리스트형 리포트를 생성하고 있어요',
    description: '위험도, 확인 자료, 추가 질문을 정리해요.',
  },
];

export default function LoadingSteps({ currentStep }: { currentStep: number }) {
  const progress = Math.min(((currentStep + 1) / steps.length) * 100, 100);

  return (
    <div className="space-y-7">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-brand-muted">
          <span>진행률</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2.5 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200/70">
          <div className="h-full rounded-full bg-brand transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <ol className="space-y-3">
        {steps.map((step, index) => {
          const isDone = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <li
              key={step.title}
              className={`flex gap-4 rounded-2xl border p-4 transition ${
                isCurrent ? 'border-slate-300 bg-slate-50 shadow-sm' : 'border-transparent bg-white'
              }`}
            >
              <div
                className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
                  isDone
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                    : isCurrent
                      ? 'border-slate-300 bg-white text-brand'
                      : 'border-slate-200 bg-slate-50 text-slate-400'
                }`}
              >
                {isDone ? <Check size={17} aria-hidden="true" /> : null}
                {isCurrent ? <Spinner className="h-4 w-4" /> : null}
                {!isDone && !isCurrent ? <Circle size={10} fill="currentColor" aria-hidden="true" /> : null}
              </div>
              <div className="min-w-0">
                <p className="break-keep font-bold text-brand">{step.title}</p>
                <p className="mt-1 text-sm text-brand-muted">{step.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
