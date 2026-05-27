import { useSearchParams } from 'react-router-dom';
import ErrorMessage from '../components/error/ErrorMessage';

export default function ErrorPage() {
  const [searchParams] = useSearchParams();

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-10">
      <ErrorMessage code={searchParams.get('code')} />
    </main>
  );
}
