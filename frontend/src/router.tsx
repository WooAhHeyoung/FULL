import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import LoadingPage from './pages/LoadingPage';
import ReportPage from './pages/ReportPage';
import UploadPage from './pages/UploadPage';
import { getAnalysis, getPendingFileMeta } from './lib/storage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <UploadPage /> },
      {
        path: 'analyzing',
        loader: () => {
          if (!getPendingFileMeta()) {
            throw redirect('/');
          }
          return null;
        },
        element: <LoadingPage />,
      },
      {
        path: 'report',
        loader: () => {
          if (!getAnalysis()) {
            throw redirect('/');
          }
          return null;
        },
        element: <ReportPage />,
      },
      { path: 'error', element: <ErrorPage /> },
    ],
  },
]);
