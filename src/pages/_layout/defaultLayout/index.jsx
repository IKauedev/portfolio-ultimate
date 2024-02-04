import { Outlet } from "react-router-dom";
import { Footer } from "../../../components/Footer/index.jsx";
import { Navbar } from "../../../components/Navbar/index.jsx";
import { Body } from "./index.js";

export function DefaultLayout() {
  return (
    <Body>
      <Navbar />
      <Outlet />
      <Footer />
    </Body>
  );
}
