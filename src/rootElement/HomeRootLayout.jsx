import { Outlet } from "react-router-dom";
import ListedBooks from "../pages/ListedBooks";



const HomeRootLayout = () => {
    return (
        <div>
            <ListedBooks />
            <Outlet />
        </div>
    );
};

export default HomeRootLayout;