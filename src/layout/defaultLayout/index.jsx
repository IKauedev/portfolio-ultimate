import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar/index.jsx";

export function DefaultLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}