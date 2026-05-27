const MAX_FILE_SIZE = 20 * 1024 * 1024;
const ALLOWED_TYPES = ['application/pdf', 'image/jpeg', 'image/png'];

export function validateFile(file: File): string | null {
  if (!ALLOWED_TYPES.includes(file.type)) {
    return 'PDF, JPG, PNG 파일만 업로드할 수 있어요.';
  }

  if (file.size > MAX_FILE_SIZE) {
    return '최대 20MB까지 업로드할 수 있어요.';
  }

  return null;
}
