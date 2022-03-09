import React, { useState } from "react"
import {
  IoIosCart,
  IoIosClose,
  IoIosHeartEmpty,
  IoIosMenu,
  IoIosSearch,
} from "react-icons/io"
import { Link } from "react-router-dom"

const Header = ({ pryNav, secNav, bg }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={`${bg ? "bg-bgcolors" : "bg-white shadow-lg"}`}>
      <div className="w-full md:px-6 lg:px-24 px-4 ">
        <div className="flex w-full lg:justify-between">
          <div className="flex w-full justify-between lg:justify-start items-center">
            {/**Website Brand*/}
            <div>
              <Link to="/">
                <img
                  src={require("../assets/BAMZI.png")}
                  className="lg:w-16 w-20"
                  alt="bamzi"
                />
              </Link>
            </div>

            {/**menu */}
            {pryNav || secNav ? (
              <div className="relative lg:hidden items-center flex justify-end">
                <button className="w-6 h-6" onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <IoIosClose size={24} /> : <IoIosMenu size={24} />}
                </button>

                {isOpen && (
                  <div className="origin-top-right absolute top-0 right-0 mt-8 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50">
                    <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
                      <Link
                        to="/my-account"
                        className="items-center px-4 py-2 "
                      >
                        My Account
                      </Link>
                    </div>
                    <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
                      <Link
                        to="/sellers-board"
                        className="items-center px-4 py-2 "
                      >
                        Products
                      </Link>
                    </div>
                    <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
                      <Link
                        to="/sellers-store"
                        className="items-center px-4 py-2 "
                      >
                        Store
                      </Link>
                    </div>
                    <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
                      <Link to="/wishlist" className="items-center px-4 py-2 ">
                        Wishlist
                      </Link>
                    </div>
                    <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
                      <Link
                        to="/Shopping-Cart"
                        className="items-center px-4 py-2 "
                      >
                        Cart
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              ""
            )}

            {/**Primary Nav Items */}

            {pryNav === "auth" && (
              <div className="hidden lg:flex items-center py-4 ml-10 space-x-10">
                <Link
                  to="/sellers-board"
                  className="text-primary hover:text-gray-400 font-bold"
                >
                  Products
                </Link>
                <Link
                  to="/sellers-store"
                  className="text-primary hover:text-gray-400 font-bold"
                >
                  Stores
                </Link>
                <a
                  href="/"
                  className="text-primary hover:text-gray-400 font-bold"
                >
                  Pricing
                </a>
                <a
                  href="/"
                  className="text-primary hover:text-gray-400 font-bold"
                >
                  Features
                </a>
              </div>
            )}

            {pryNav === "user" && (
              <div className="hidden lg:flex items-center ml-10 space-x-2">
                <Link
                  to="/sellers-board"
                  className="text-primary hover:text-gray-400 font-semibold"
                >
                  Products
                </Link>
                <Link
                  to="/sellers-store"
                  className="text-primary hover:text-gray-400 font-semibold"
                >
                  Stores
                </Link>
                <form action="">
                  <div className="relative mb-3 flex items-center text-gray-400 focus-within:text-gray-600">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search anything"
                      autoComplete="off"
                      aria-label="Search anything"
                      className="px-3 py-2 placeholder:text-gray-500 text-black border-none rounded-2xl ring-2 ring-gray-200 focus:ring-gray-500 focus:ring-2"
                    />
                    <IoIosSearch className="w-5 h-5 absolute right-2" />
                  </div>
                </form>
              </div>
            )}
          </div>

          {/**secondary nav items */}
          {secNav === "auth" && (
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/Shopping-Cart"
                className="flex text-primary hover:text-gray-400 font-bold"
              >
                <span className="mr-1">Cart</span>
                <IoIosCart className="w-5 h-5" />
              </Link>
              <Link to="/login" className="flex hover:text-gray-400 font-bold">
                <span className="mr-1 border py-1 px-3 rounded-md border-yellow-500">
                  Login
                </span>
              </Link>
            </div>
          )}

          {secNav === "prelaunch" && (
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to=""
                className="flex text-primary hover:text-gray-400 font-semibold p-0"
              >
                <span className="mr-1">Contact</span>
                <span className="">Us</span>
              </Link>
              <Link to="" className="p-0">
                <span className="text-primary hover:text-gray-400 font-semibold">
                  Features
                </span>
              </Link>
            </div>
          )}

          {secNav === "user" && (
            <div className="hidden lg:flex items-center">
              <Link
                to="/wishlist"
                className="flex text-primary hover:text-gray-400 font-semibold"
              >
                <span className="mr-1">Wishlist</span>
                <IoIosHeartEmpty className="w-5 h-5" />
              </Link>
              <Link
                to="/shopping-cart"
                className="flex text-primary hover:text-gray-400 font-semibold"
              >
                <span className="mr-1">Cart</span>
                <IoIosCart className="w-5 h-5" />
              </Link>

              <Link to="/my-account">
                <img
                  src={require("../assets/avatar-0.jpg")}
                  alt=""
                  className="rounded-full shadow-sm w-36  object-contain aspect-square"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
