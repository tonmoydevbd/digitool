import { FiShoppingCart } from "react-icons/fi";

export const Navbar = ({ cartProduct }) => {
  const navLink = ['products', 'features', 'pricing', 'testimonials', 'faq'];
  const navLinkElements = navLink.map(item => <li key={item}><a href="/">{item.trim().toUpperCase()}</a></li>)


  return (

    <div className=" bg-base-100 shadow-sm ">
      <div className="navbar max-w-300 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {navLinkElements}
              <a className="btn rounded-full hover:bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 hover:text-white sm:hidden">Login</a>
              <a className="btn bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300  hover:scale-105 active:scale-100 shadow-md">Get Started</a>
            </ul>
          </div>
          <a className="bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-bold text-2xl btn btn-ghost">DigiTools</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinkElements}
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <div className="inline-flex justify-center items-center relative ">
            <FiShoppingCart className="font-bold text-xl " />
            {cartProduct.length > 0 && <span className="absolute bottom-3 left-3 bg-red-800 py-0 px-1 text-xs text-white rounded-full">{cartProduct.length}</span>}
          </div>
          <a className="btn btn-ghost  hidden sm:flex">Login</a>
          <a className="btn bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300  hover:scale-105 shadow-md hidden lg:flex">Get Started</a>
        </div>
      </div>
    </div>
  )
}