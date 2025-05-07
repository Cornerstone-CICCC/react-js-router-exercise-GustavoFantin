import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ProductsLayout from "./pages/Products/ProductsLayout"
import ProductsList from "./pages/Products/ProductsList"
import ProductsDetails from "./pages/Products/ProductsDetails"
import ErrorPage from "./pages/ErrorPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
        </Route>
        <Route path="products" element={<ProductsLayout />}>
          <Route index element={<ProductsList />}/>
          <Route path=":id" element={<ProductsDetails />}/>
        </Route>



          <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App