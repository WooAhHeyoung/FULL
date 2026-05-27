import type { QuestionsByTarget } from '../../types/analysis';
import Card from '../common/Card';
import SectionHeading from '../common/SectionHeading';

const groups: Array<{ key: keyof QuestionsByTarget; title: string }> = [
  { key: 'landlord', title: '임대인에게 물어볼 질문' },
  { key: 'realtor', title: '중개인에게 물어볼 질문' },
  { key: 'expert', title: '전문가에게 물어볼 질문' },
];

export default function QuestionsByTargetSection({ questions }: { questions: QuestionsByTarget }) {
  return (
    <section id="questions" className="print-section scroll-mt-8">
      <Card className="space-y-5">
        <SectionHeading title="누구에게 무엇을 물어봐야 할까요?" />
        <div className="grid gap-4 lg:grid-cols-3">
          {groups.map((group) => (
            <article key={group.key} className="print-card rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-brand">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {questions[group.key].map((question) => (
                  <li key={question} className="break-keep rounded-xl bg-slate-50 px-4 py-3 text-sm leading-6 text-brand">
                    {question}
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
