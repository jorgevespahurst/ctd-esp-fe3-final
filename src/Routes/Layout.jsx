import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";


export default function Layout() {
    const {state}=useContext(ContextGlobal);
    const {color, backgroundColor}= state.theme;
    return (
    <div className="App" style={{ color: color, backgroundColor: backgroundColor }}>
            <Navbar />
            <Outlet />
            <Footer />
    </div>
    );
}