import React, { useState } from "react"
import { Link } from "react-router-dom"
import { IoIosMenu, IoIosClose } from "react-icons/io"

const AuthHeader = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex justify-between lg:justify-start lg:space-x-16 items-center lg:px-32 px-4 pt-4">
      <Link to="/">
        <img src={require("../../assets/BAMZI.png")} alt="" className="w-24" />
      </Link>
      <div className="block lg:hidden " onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoIosClose size={24} /> : <IoIosMenu size={24} />}
      </div>
      {isOpen && (
        <div className="origin-top-right absolute top-0 right-0 mt-8 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50">
          <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
            <Link to="/buyeraccount" className="items-center px-4 py-2 ">
              My Account
            </Link>
          </div>
          <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
            <Link to="/sellers-board" className="items-center px-4 py-2 ">
              Products
            </Link>
          </div>
          <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
            <Link to="/sellers-store" className="items-center px-4 py-2 ">
              Store
            </Link>
          </div>
          <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
            <Link to="/wishlist" className="items-center px-4 py-2 ">
              Wishlist
            </Link>
          </div>
          <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
            <Link to="/Shopping-Cart" className="items-center px-4 py-2 ">
              Cart
            </Link>
          </div>
        </div>
      )}
      <div className="hidden lg:flex items-center space-x-8 text-primary font-semibold">
        <Link to="/sellers-board">Products</Link>
        <Link to="/sellers-store">Stores</Link>
        <Link to="/">Pricing</Link>
        <Link to="/">Features</Link>
      </div>
    </nav >
  )
}

export default AuthHeader
