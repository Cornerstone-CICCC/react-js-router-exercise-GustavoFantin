import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gray-200 p-2 mb-5">
      <div className="text-blue-500 font-bold underline">Fake Exercise</div>
      <nav> 
         <menu className="flex gap-4 ">
            <li className="hover:text-green-500 underline"><Link to="/">Home</Link></li>
            <li className="hover:text-green-500 underline"><Link to="/products">Products</Link></li>
            <li className="hover:text-green-500 underline"><Link to="/about">About</Link></li>
            <li className="hover:text-green-500 underline"><Link to="/contact">Contact Us</Link></li>
            
         </menu>
      </nav>
    </header>
  )
}

export default Header