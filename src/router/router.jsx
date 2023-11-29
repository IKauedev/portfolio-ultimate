import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DefaultLayout } from "../layout/defaultLayout/index.jsx";
import { Home } from "../pages/Home/index.jsx";

export default function LayoutRouter() {
    return (
        <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
  
    );
}
