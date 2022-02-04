import image1 from "../../assets/BAMZI.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosCart, IoIosClose, IoIosMenu } from "react-icons/io";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
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
                  <div className="font-bold py-1 text-sm text-primary hover:bg-blue-300 hover:text-white">
                    <a href="#!" className="items-center px-4 py-2 ">
                      Products
                    </a>
                  </div>
                  <div className="font-bold py-1 text-sm text-primary hover:bg-blue-300 hover:text-white">
                    <a href="#!" className="items-center px-4 py-2 ">
                      Stores
                    </a>
                  </div>
                  <div className="font-bold py-1 text-sm text-primary hover:bg-blue-300 hover:text-white">
                    <a href="#!" className="items-center px-4 py-2 ">
                      Pricing
                    </a>
                  </div>
                  <div className="font-bold py-1 text-sm text-primary hover:bg-blue-300 hover:text-white">
                    <a href="#!" className="items-center px-4 py-2">
                      Features
                    </a>
                  </div>
                  <div className="py-1 text-sm hover:bg-blue-300 text-primary hover:text-white">
                    <Link
                        to="/Shopping-Cart"
                      className="font-bold flex items-center px-4 py-2"
                    >
                
                        Cart
                        <IoIosCart className="w-5 h-5" />
                    
                    </Link>
                  </div>
                  <div className="text-sm mr-10 px-2 pb-1 text-primary hover:bg-blue-300 hover:text-white">
                    <div
                      href="#!"
                      className="font-bold border py-1 px-2 mx- rounded-md border-yellow-500"
                    >
                      Login
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/**Primary Nav Items */}
            <div className="hidden lg:flex items-center py-4 ml-10 space-x-10">
              <a
                href="#!"
                className="text-primary hover:text-gray-400 font-bold"
              >
                Products
              </a>
              <a
                href="#!"
                className="text-primary hover:text-gray-400 font-bold"
              >
                Stores
              </a>
              <a
                href="#!"
                className="text-primary hover:text-gray-400 font-bold"
              >
                Pricing
              </a>
              <a
                href="#!"
                className="text-primary hover:text-gray-400 font-bold"
              >
                Features
              </a>
            </div>
          </div>

          {/**secondary nav items */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
               to="/Shopping-Cart"
              className="flex text-primary hover:text-gray-400 font-bold">
            
              <span className="mr-1">Cart</span>
              <IoIosCart className="w-5 h-5" />
            </Link>      
            <a href="#!" className="flex hover:text-gray-400 font-bold">
              <span className="mr-1 border py-1 px-3 rounded-md border-yellow-500">
                Login
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
