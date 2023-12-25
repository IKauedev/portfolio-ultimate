import { ThemeProvider } from "styled-components";
import './App.css';
import LayoutRouter from "./router/router.jsx";
import { darkTheme } from './utils/Themes.js';

export default function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <LayoutRouter />
    </ThemeProvider>
  );
}
