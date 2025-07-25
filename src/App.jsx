import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainrootLayout from "./rootElement/MainrootLayout"
import Home from "./pages/Home"
import ListedBooks from "./pages/ListedBooks"
import PagesToRead from "./pages/PagesToRead"
import NotFounde from "./pages/NotFounde"
import { displayCard } from "./components/CardFatch"


function App() {
  
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainrootLayout />}>
        <Route index element={<Home />} loader={displayCard}>

        </Route>
        <Route path="listedBooks" element={<ListedBooks />} />
        <Route path="PagesToRead" element={<PagesToRead />} />
        <Route path="*" element={<NotFounde />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
