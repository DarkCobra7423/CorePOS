import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Sales from "../pages/Sales";
import Inventory from "../pages/Inventory";

export default function Router() {
    const Layout = () => {
        return (
            <>
                <Header />
                <div className="content"><Outlet /></div>
                <Footer />
            </>
        )
    }

    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="inventory" element={<Inventory />} />
                    </Route>
                    <Route path="/sales" element={<Sales />} />
                </Routes>
            </BrowserRouter>
        )
    }


    return (
        <BrowserRoutes />
    )
}