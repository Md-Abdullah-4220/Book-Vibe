import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainrootLayout from "./rootElement/MainrootLayout";
import Home from "./pages/Home";
import ListedBooks from "./pages/ListedBooks";
import PagesToRead from "./pages/PagesToRead";
import NotFounde from "./pages/NotFounde";
import BooksDetails from "./pages/BooksDetails";
import HomeRootLayout from "./rootElement/HomeRootLayout";
import ReadsBooks from "./components/ReadsBooks";
import WhishlistBooks from "./components/WhishlistBooks";
function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainrootLayout />}>
        <Route index element={<Home />} />
        <Route path="books/:id" element={<BooksDetails />} />
        <Route path="listedBooks" element={ <HomeRootLayout />}>
        <Route path="listedBooks"  element={<ListedBooks />}/>
        <Route path="readsBooks"  element={<ReadsBooks />}/>
        <Route path="WhishlistBooks"  element={<WhishlistBooks />}/>
        </Route>
        <Route path="PagesToRead" element={<PagesToRead />} />
        <Route path="*" element={<NotFounde />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
