import { Outlet } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";

export default function Template() {
    return (
        <>
            <NavbarComp />
            {/* menyediakan temapat dinamis, yang akan berubah2 == @yield */}
            <Outlet />
        </>
    )
}