import { MessageCircleQuestion } from 'lucide-react';
import Card from '../common/Card';
import SectionHeading from '../common/SectionHeading';

export default function QuestionList({ questions }: { questions: string[] }) {
  return (
    <section id="questions" className="print-section scroll-mt-8">
      <Card className="space-y-5">
        <div>
          <SectionHeading title="이렇게 물어보세요" />
          <p className="mt-2 text-sm leading-6 text-brand-muted">
            임대인, 중개인, 전문가에게 확인하면 좋은 질문을 정리했어요.
          </p>
        </div>
        <div className="space-y-3">
          {questions.map((question) => (
            <div key={question} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
              <MessageCircleQuestion className="mt-0.5 shrink-0 text-brand-accent" size={18} aria-hidden="true" />
              <p className="text-sm font-medium leading-6 text-brand">{question}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
