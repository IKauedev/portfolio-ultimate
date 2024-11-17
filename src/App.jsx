import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './global.css';
import { darkTheme } from './pages/_layout/themes/Themes.js';
import { routes } from './router/routes.jsx';
import { CookieModal } from './components/Cookie/index.jsx';

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CookieModal />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}
