import { DesprePage } from '@/pages/DesprePage';
import { MainPage } from '@/pages/MainPage';
import { Layout } from '@/widgets/Layout';
import { createBrowserRouter, Link, Navigate } from 'react-router-dom';
import { ErrorBoundary } from './ErrorBoundary';

export enum RouterPaths {
  MAIN = '/',
  DESPRE = '/despre',
  OTHER = '*',
}

export const router = createBrowserRouter([
  {
    path: RouterPaths.MAIN,
    element: (
      <Layout
        headerLinks={[
          <Link key={RouterPaths.DESPRE} to={RouterPaths.DESPRE}>
            Despre
          </Link>,
        ]}
        body={<MainPage />}
      />
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: RouterPaths.DESPRE,
    element: (
      <Layout
        headerLinks={[
          <Link key={RouterPaths.MAIN} to={RouterPaths.MAIN}>
            Back
          </Link>,
        ]}
        body={<DesprePage />}
      />
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: RouterPaths.OTHER,
    element: <Navigate to={RouterPaths.MAIN} />,
  },
]);
