import { TriangleAlert } from 'lucide-react';

export default function FinalCommentBox({ comment }: { comment: string }) {
  return (
    <section id="final-comment" className="print-section print-card scroll-mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-brand">
          <TriangleAlert size={20} aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-xl font-bold tracking-normal text-brand">최종 코멘트</h2>
          <p className="mt-3 break-keep text-sm leading-7 text-brand-muted">{comment}</p>
        </div>
      </div>
    </section>
  );
}
