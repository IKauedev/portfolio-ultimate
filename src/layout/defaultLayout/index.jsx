import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { Body } from "./components/index.js";

export function DefaultLayout() {
  return (
    <Body>
      <Navbar />
      <Outlet />
      <Footer />
    </Body>
  );
}
