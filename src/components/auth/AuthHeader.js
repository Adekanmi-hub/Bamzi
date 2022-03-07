import React from "react"
import { Link } from "react-router-dom"
import { IoIosMenu } from "react-icons/io"

const AuthHeader = () => {
  return (
    <nav className="flex justify-between lg:justify-start lg:space-x-16 items-center lg:px-32 px-4 py-2">
      <Link to="/">
        <img src={require("../../assets/BAMZI.png")} alt="" className="w-16" />
      </Link>
      <div className="block lg:hidden">
        <IoIosMenu size={24} />
      </div>
      <div className="hidden lg:flex items-center space-x-8 text-primary font-semibold">
        <Link to="/sellers-board">Products</Link>
        <Link to="/sellers-store">Stores</Link>
        <a href="#!">Pricing</a>
        <a href="#!">Features</a>
      </div>
    </nav>
  )
}

export default AuthHeader
