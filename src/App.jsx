import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import './global.css';
import { darkTheme } from "./pages/_layout/themes/Themes.js";
import { routes } from "./router/routes.jsx";

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
       <RouterProvider router={routes} />
    </ThemeProvider>
  );
}
