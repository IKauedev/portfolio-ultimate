import { useState } from "react";
import { ThemeProvider } from "styled-components";
import './App.css';

import LayoutRouter from "./router/router.jsx";
import { darkTheme, lightTheme } from './utils/Themes.js';



export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <LayoutRouter />
    </ThemeProvider>
  );
}
