import { Outlet } from "react-router-dom"
import Header from "../components/Header"



const Layout = () => {
  return (
    <div className="container max-w-full">
      <Header />

      <main className="max-w-md mx-auto">
         <Outlet />
      </main>
    </div>
  )
}

export default Layout