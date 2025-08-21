'use client'
import { useState } from "react"
import { products } from "@/data/product"
import { useCart } from "@/store/cart"
import QuantitySelector from "./QuantitySelector"

export default function ProductInfo() {
  const [value, setValue] = useState(0)
  const { addItem} = useCart()

    const discountedPrice = products.price ? products.price * (1 - (products.discount || 0)) : products.price
    const originalPrice = products.price
    const handleAddToCart = () => {
    addItem({
      id: products.id,
      title: products.title,
      price: discountedPrice,
      discount: products.discount,
      quantity: value,
      thumbnail: products.thumbnails[0],
    }, value)
  }
  return (
    <section className="md:flex flex-col md:space-y-6 md:px-10 space-y-4 py-4 px-6">
        <p className="uppercase tracking-widest text-gray-500 font-bold text-sm">{products.company}</p>
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">{products.title}</h1>
        <p className="text-gray-500 md:pt-4 md:text-lg tracking-wide">{products.description}</p>
        <div className="flex items-center justify-between md:block">
            <div className="flex items-center gap-4 py-1">
                <span className="text-3xl font-bold">${discountedPrice.toFixed(2)}</span>
                {products.discount && (
                    <span className="flex justify-center items-center px-2.5 py-0.5 bg-black text-white font-bold rounded-md">{Math.round(products.discount * 100)}%</span>

                )}
            </div>
            {originalPrice && <div className="text-gray-500 line-through font-bold">
                ${originalPrice.toFixed(2)}
            </div>}
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:justify-start md:w-full">
            <QuantitySelector value={value} onChange={setValue} />

            <button className="cursor-pointer flex items-center justify-center gap-2 p-4 md:w-[18rem] bg-orange-400 text-black font-bold rounded-md shadow-card hover:opacity-90 active:scale-[0.99]" 
            onClick={handleAddToCart}
            disabled={value === 0}
            >

<svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#00001D"/></svg>

                Add to cart
            </button>

        </div>
    </section>
  )}