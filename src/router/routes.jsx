import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home/index.jsx';
import { DefaultLayout } from '../pages/_layout/defaultLayout/index.jsx';
import { NotFound } from '../pages/error/index.jsx';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
