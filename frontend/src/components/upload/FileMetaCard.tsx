import { FileText, X } from 'lucide-react';
import { formatBytes } from '../../lib/formatBytes';

export default function FileMetaCard({ file, onRemove }: { file: File; onRemove: () => void }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-brand">
          <FileText size={20} aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-brand">{file.name}</p>
          <p className="text-xs text-brand-muted">
            {formatBytes(file.size)} · {file.type || '알 수 없는 형식'}
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={onRemove}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
        aria-label="파일 제거"
      >
        <X size={18} aria-hidden="true" />
      </button>
    </div>
  );
}
