import image1 from "../../assets/BAMZI.png";
import image2 from "../../assets/Icon feather-user.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  IoIosCart,
  IoIosClose,
  IoIosHeartEmpty,
  IoIosMenu,
  IoIosSearch,
} from "react-icons/io";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-lg bg-white">
      <div className="md:container md:mx-auto md:px-6 px-4 py-2">
        <div className="flex w-full lg:justify-between">
          <div className="flex w-full justify-between lg:justify-start items-center">
            {/**Website Brand*/}
            <div className="px-4">
              <Link to="/Home-Page">
                <img src={image1} className="w-16" alt="bamzi" />
              </Link>
            </div>

            {/**menu */}
            <div className="relative lg:hidden items-center flex justify-end">
              <button className="w-6 h-6" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <IoIosClose size={24} /> : <IoIosMenu size={24} />}
              </button>

              {isOpen && (
                <div className="origin-top-right absolute top-0 right-0 mt-8 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50">
                  <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
                    <a
                      href="#!"
                      className="font-bold primaryBtntext items-center px-4 py-2 "
                    >
                      My Account
                    </a>
                  </div>
                  <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
                    <a
                      href="#!"
                      className="font-bold primaryBtntext items-center px-4 py-2 "
                    >
                      Products
                    </a>
                  </div>
                  <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
                    <a
                      href="#!"
                      className="font-bold text-primary items-center px-4 py-2 "
                    >
                      Stores
                    </a>
                  </div>
                  <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
                    <a
                      href="#!"
                      className="font-bold text-primary items-center px-4 py-2 "
                    >
                      Wishlist
                    </a>
                  </div>
                  <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
                    <a
                      href="#!"
                      className="font-bold text-primary flex items-center px-4 py-2 "
                    >
                      
                      <span className="mr-1">Cart</span>
                      <IoIosCart className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/**Primary Nav Items */}
            <div className="hidden lg:flex items-center ml-10 space-x-10">
              <a
                href="#!"
                className=" text-primary hover:text-gray-400 font-semibold"
              >
                Products
              </a>
              <a
                href="#!"
                className=" text-primary hover:text-gray-400 font-semibold"
              >
                Stores
              </a>
              <form action="">
                <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
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
          </div>

          {/**secondary nav items */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="#!"
              className="flex text-primary hover:text-gray-400 font-semibold"
            >
              <span className="mr-1">Wishlist</span>
              <IoIosHeartEmpty className="w-5 h-5" />
            </a>
            <a
              href="#!"
              className="flex text-primary hover:text-gray-400 font-semibold"
            >
              <span className="mr-1">Cart</span>
              <IoIosCart className="w-5 h-5" />
            </a>

            <a href="#!">
              <img
                src={image2}
                alt="cart"
                className="h-6 rounded-full shadow-sm w-20 object-contain aspect-square"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
