import { useParams } from "react-router-dom"
import type { IProduct } from "../../types/product.type"
import { useEffect, useState } from "react"
import { SyncLoader } from "react-spinners"

const ProductsDetails = () => {
   const { id } = useParams()
   const [product, setProduct] = useState<IProduct | null>()

   useEffect(() => {
      const getProductById = async () => {
         const res = await fetch(`https://dummyjson.com/products/${id}`)
         const data = await res.json()
         setProduct(data)
      }
      getProductById()
   }, [id])

   if (!product) return <SyncLoader />

  return (
    <div className="grid grid-cols-2 gap-5 place-items-center justify-center items-center text-center">

      <div className="">
         <img src={product.images[0]} className="w-sm self-center" alt={product.title} />
         <span className="text-lg">${product.price}</span>
      </div>
      <div className="p-3">
         <h3 className="text-xl font-bold ">{product.title}</h3>
         <p className="text-sm border rounded-md m-4 p-4">{product.description}</p>
      </div>
    </div>
  )
}

export default ProductsDetails