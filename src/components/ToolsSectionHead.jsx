import { useState } from "react";

export const ToolsSectionHead = (props) => {
  const { isActiveCart, setIsActiveCart, isActiveProducts, setIsActiveProducts } = props

  const handleProductsClick = () => {
    setIsActiveProducts(true);
    setIsActiveCart(false)
  }
  const handleCartClick = () => {
    setIsActiveCart(true)
    setIsActiveProducts(false);
  }



  return (
    <div className="max-w-137.5 mx-auto flex flex-col gap-4">
      <h2 className="text-5xl font-extrabold">Premium Digital Tools</h2>
      <p>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
      <div className="flex justify-center gap-2">
        <button onClick={handleProductsClick} className={`btn ${isActiveProducts ? 'bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white' : 'text-purple-500'} font-semibold py-2.5 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md`}>Products</button>
        <button onClick={handleCartClick} className={`btn ${isActiveCart ? 'bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white' : 'text-purple-500'} font-semibold py-2.5 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md`}>Cart</button>

      </div>
    </div>
  )
}