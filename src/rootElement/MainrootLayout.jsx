import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";


const MainrootLayout = () => {
    const route = createBrowserRouter(
        createRoutesFromElements(

        )
    );
    return (
       <RouterProvider router={route} />
    );
};

export default MainrootLayout;