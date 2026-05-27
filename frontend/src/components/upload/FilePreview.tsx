import { FileSearch } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FilePreview({ file }: { file: File }) {
  const [url, setUrl] = useState<string | null>(null);
  const isImage = file.type.startsWith('image/');
  const isPdf = file.type === 'application/pdf';

  useEffect(() => {
    if (!isImage) {
      setUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setUrl(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file, isImage]);

  if (isImage && url) {
    return (
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <img className="max-h-72 w-full object-contain" src={url} alt="업로드 파일 미리보기" />
      </div>
    );
  }

  return (
    <div className="flex min-h-44 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 px-6 text-center">
      <FileSearch className="text-slate-400" size={34} aria-hidden="true" />
      <div>
        <p className="text-sm font-semibold text-brand">
          {isPdf ? 'PDF 파일이 선택되었어요' : '미리보기를 만들 수 없습니다'}
        </p>
        <p className="mt-1 text-xs text-brand-muted">
          {isPdf
            ? 'MVP에서는 PDF 첫 페이지 대신 파일 정보로 분석을 진행해요.'
            : '파일은 선택되었고 분석을 시작할 수 있어요.'}
        </p>
      </div>
    </div>
  );
}
