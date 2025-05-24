import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "../pages/Home";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Sales from "../pages/Sales";
import Inventory from "../pages/Inventory";
import NewArticle from "../pages/NewArticle";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { SidebarProvider } from '../components/SidebarContext';
import Shopping from "../pages/Shopping";
import OrdersC from "../pages/OrdersC";
import Supplers from "../pages/Suppliers";
import StocksReports from "../pages/StocksReports";
import Configuration from "../pages/Configuration";

const LayoutContainer = styled.div`
  //display: flex;
  //flex-direction: column;
  height: 100vh;
`;

const MainWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Content = styled.div`

  margin-left: 4%;

  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

export default function Router() {
    const Layout = () => {
        return (
            <>
                <LayoutContainer>
                    <Navigation />
                    <MainWrapper>
                        <Sidebar />
                        <Content>
                            <Outlet />
                        </Content>
                    </MainWrapper>
                    <Footer />
                </LayoutContainer>
                {/*  <Navigation />
                <Sidebar />
                <div className="content"><Outlet /></div>
                <Footer /> */}
            </>
        );
    }

    const BrowserRoutes = () => {
        return (
            <SidebarProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="shopping" element={<Shopping />} />
                            <Route path="inventory" element={<Inventory />} />
                            <Route path="newarticle" element={<NewArticle />} />
                            <Route path="ordersc" element={<OrdersC />} />
                            <Route path="suppliers" element={<Supplers />} />
                            <Route path="stocksreports" element={<StocksReports />} />
                            <Route path="configuration" element={<Configuration />} />
                        </Route>
                        <Route path="/sales" element={<Sales />} />
                    </Routes>
                </BrowserRouter>
            </SidebarProvider>
        );
    };

    return <BrowserRoutes />;
}