import { Outlet } from "react-router-dom";
import Naveber from "../components/Naveber";
import Footer from "../components/Footer";



const MainrootLayout = () => {
    
    return (
       <div className="flex flex-col min-h-screen">
        <Naveber />
        <main className="flex-3/4">
        <Outlet />
        </main>
        <Footer />
       </div>
    );
};

export default MainrootLayout;