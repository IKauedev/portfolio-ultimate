import { ThemeProvider } from "styled-components";
import './App.css';
import LayoutRouter from "./router/router.jsx";
import { darkTheme, lightTheme } from './utils/Themes.js';

export default function App() {

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <LayoutRouter />
    </ThemeProvider>
  );
}
