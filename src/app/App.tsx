import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/router';
import { dexonlineAPI } from './config/store/api/dexonline';
import './styles/index.scss';

export const App = () => {
  return (
    <ApiProvider api={dexonlineAPI}>
      <RouterProvider router={router} />
    </ApiProvider>
  );
};
