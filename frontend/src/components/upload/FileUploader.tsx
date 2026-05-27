import { UploadCloud } from 'lucide-react';
import { useRef, useState } from 'react';
import { validateFile } from '../../lib/validateFile';
import FileMetaCard from './FileMetaCard';
import FilePreview from './FilePreview';

interface FileUploaderProps {
  file: File | null;
  onChange: (file: File | null) => void;
}

export default function FileUploader({ file, onChange }: FileUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState('');

  const selectFile = (nextFile: File | undefined) => {
    if (!nextFile) {
      return;
    }

    const validationError = validateFile(nextFile);
    if (validationError) {
      setError(validationError);
      onChange(null);
      return;
    }

    setError('');
    onChange(nextFile);
  };

  return (
    <div className="space-y-4">
      <div
        className={`rounded-2xl border-2 border-dashed p-4 transition sm:p-5 ${
          isDragging ? 'border-brand-accent bg-blue-50/80 shadow-inner' : 'border-slate-300 bg-white'
        } ${error ? 'animate-[shake_180ms_ease-in-out_1] border-red-300 bg-red-50' : ''}`}
        onDragEnter={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={(event) => {
          event.preventDefault();
          setIsDragging(false);
        }}
        onDrop={(event) => {
          event.preventDefault();
          setIsDragging(false);
          selectFile(event.dataTransfer.files[0]);
        }}
      >
        <input
          ref={inputRef}
          className="hidden"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
          onChange={(event) => selectFile(event.target.files?.[0])}
        />

        {file ? (
          <div className="space-y-4">
            <FileMetaCard
              file={file}
              onRemove={() => {
                setError('');
                onChange(null);
                if (inputRef.current) {
                  inputRef.current.value = '';
                }
              }}
            />
            <FilePreview file={file} />
          </div>
        ) : (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="flex w-full flex-col items-center justify-center gap-5 rounded-xl py-10 text-center transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
            aria-label="계약서 파일 선택"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-brand shadow-sm">
              <UploadCloud size={30} aria-hidden="true" />
            </span>
              <span>
                <span className="block break-keep text-base font-bold text-brand">
                  전월세·임대차 계약서를 업로드하세요
                </span>
                <span className="mt-2 block text-sm text-brand-muted">PDF, JPG, PNG 형식 · 최대 20MB</span>
              </span>
          </button>
        )}
      </div>

      {error ? <p className="text-sm font-semibold text-red-700">{error}</p> : null}
    </div>
  );
}
