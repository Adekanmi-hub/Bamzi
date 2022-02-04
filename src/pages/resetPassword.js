import React from "react"
import { Link } from "react-router-dom"
import Header from "../components/header"
import { IoIosMenu } from "react-icons/io"

export default function ResetPassword() {
  return (
    <div className="bg-skyBlue lg:h-screen min-h-screen lg:py-8">
      <nav className="flex justify-between lg:justify-start lg:space-x-16 items-center lg:px-32 px-4 py-2">
        <Link to="/">
          <img src={require("../assets/BAMZI.png")} alt="" className="w-16" />
        </Link>
        <div className="block lg:hidden">
          <IoIosMenu size={24} />
        </div>
        <div className="hidden lg:flex items-center space-x-8 text-primary font-semibold">
          <a href="#!">Products</a>
          <Link to="/sellers-store">Stores</Link>
          <a href="#!">Pricing</a>
          <a href="#!">Features</a>
        </div>
      </nav>

      <div className="lg:px-16">
        <div className="mt-6 py-4 lg:py-0 lg:-ml-24 xl:-ml-48 xl:pl-32 lg:px-0 lg:pl-32 lg:bg-exclusion bg-contain bg-no-repeat bg-left flex flex-col-reverse lg:flex-row lg:h-[85vh] lg:space-x-4">
          <div className="lg:bg-store lg:block hidden xl:w-36 lg:w-24 xl:h-[72vh] lg:h-[50vh] lg:mt-[100px] xl:mt-0 bg-center bg-no-repeat bg-contain xl:ml-32 lg:ml-12"></div>
          <div className="xl:w-1/2 lg:w-2/5 mt-10 lg:mt-0 px-4 flex flex-col lg:place-content-center space-y-2 md:px-24 lg:px-0">
            <p className="text-4xl text-primary font-bold leading-6">
              Reset Password
            </p>
            <p className="text-sm text-primary font-semibold">
              Email@gmail.com
            </p>
            <input
              type="text"
              name="password"
              id=""
              autoComplete="off"
              placeholder="New Password"
              className="py-2 px-6 shadow rounded border-gray-100 border"
            />
            <input
              type="text"
              name="repeat"
              id=""
              autoComplete="off"
              placeholder="Repeat Password"
              className="py-2 px-6 shadow rounded border border-gray-100"
            />
            <button className="bg-primary rounded text-white py-2">
              Reset
            </button>
          </div>
          <div className="xl:w-1/2 lg:w-2/5 xl:h-[72vh] lg:h-[50vh] lg:mt-[100px] xl:mt-0 bg-primary rounded-r-2xl relative">
            <img
              src={require("../assets/home-image.jpg")}
              alt=""
              className="-mt-4 mx-auto lg:rounded-lg lg:h-[108%] lg:w-auto h-[30vh] sm:h-[60vh] w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
