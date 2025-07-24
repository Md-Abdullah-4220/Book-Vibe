import { Outlet } from "react-router-dom";
import Naveber from "../components/Naveber";
import Footer from "../components/Footer";



const MainrootLayout = () => {
    
    return (
       <div>
        <Naveber />
        <Outlet />
        <Footer />
       </div>
    );
};

export default MainrootLayout;