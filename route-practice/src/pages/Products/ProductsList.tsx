import { useEffect, useState } from "react"
import type { IProduct } from "../../types/product.type"
import { Link } from "react-router-dom"


const ProductsList = () => {
   const [products, setProducts] = useState<IProduct[]>([])

   useEffect(() => {
      const getProducts = async () => {
         const res = await fetch(`https://dummyjson.com/products`)
         const data = await res.json()
         setProducts(data.products)
      }
      getProducts()
   }, [])

   return (
    <div>
      <h1 className="font-bold text-lg">Products available:</h1>
      <section className="grid grid-cols-4 gap-4 m-5" >
         {products.map(p => (
            <Link to={`/products/${p.id}`} className="flex items-center flex-col border-2 rounded-md hover:scale-105 transition-all bg-green-200">
               <img className="w-2xs" src={p.images[0]} alt={p.title} />
               <span className="text-md font-semibold">{p.title}</span>
               <p className="text-md underline">${p.price}</p>
            </Link>
         ))}
      </section>
    </div>
  )
}

export default ProductsList