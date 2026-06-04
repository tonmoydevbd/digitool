import { useState } from "react"
import { toast } from "react-toastify";

export const CartSection = (props) => {

  const { productsData, clickedProduct, setClickedProduct, cartProduct, handleRemoveProduct } = props


  const notify = (name) => toast.error(`${name} remove.`);
  const checkoutNotify = () => toast.info('Proceed to checkout page...')

  const totalPrice = () => {
    let price = 0
    cartProduct.map(product => {
      price += product.price
    })
    return price
  }

  const cartProductEl = cartProduct.length === 0
    ? <h3 className="font-bold text-xl">No product in cart.</h3>
    : cartProduct.map(item => <div key={item.id} className="my-6 flex flex-col gap-4 ">
      <div className="flex flex-col sm:flex-row gap-4 bg-gray-200 rounded-xl items-center p-4">
        <img className="rounded-full p-4 bg-white" src={item.icon} alt="" />
        <div className="grow text-start">
          <h4 className="font-semibold text-xl">{item.name}</h4>
          <p>${item.price}</p>
        </div>
        <button onClick={() => { handleRemoveProduct(item.id); notify(item.name) }} className="btn btn-ghost text-red-800">Remove</button>
      </div>
    </div>)


  return (
    <div className="max-w-300 mx-auto mt-10 p-4 sm:p-10 border border-gray-300 rounded-xl">
      <h3 className="text-2xl font-bold text-start">Your Cart</h3>
      {cartProductEl}
      <div className="flex justify-between items-center my-6">
        <p>Total</p>
        <p className="text-2xl font-bold">${totalPrice()}</p>
      </div>
      <a onClick={() => { checkoutNotify(); setClickedProduct('') }} className="btn bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300  active:scale-99 hover:scale-101 capitalize shadow-md w-full">Proceed To Checkout</a>
    </div>
  )
}