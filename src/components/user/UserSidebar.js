import React from "react"
import { Link } from "react-router-dom"
import { FaShoppingBag, FaTruck, FaUser } from "react-icons/fa"

const UserSidebar = ({ page }) => {
  const currentPage =
    "flex items-center space-x-2 py-2 px-4 bg-gray-200 relative md:before:absolute md:before:left-0 md:before:h-6 md:before:w-1 md:before:bg-primary after:absolute after:w-full after:h-1 after:bg-primary after:left-0 after:bottom-0 md:after:w-0 md:after:h-0"
  const regularPage = "flex items-center space-x-2 py-2 px-4"
  const LinkReset = "p-0"

  return (
    <div className="bg-gray-100 lg:w-3/12 md:py-16 md:rounded-xl shadow flex md:flex-col md:justify-start justify-center">
      <Link to="/my-account" className={LinkReset}>
        <span className={page === "my-account" ? currentPage : regularPage}>
          <FaUser className="text-gray-700" />
          <p className="text-primary font-semibold lg:text-lg text-sm lg:block hidden">
            Bamzi Account
          </p>
        </span>
      </Link>

      <Link to="/orders" className={LinkReset}>
        <span className={page === "orders" ? currentPage : regularPage}>
          <FaShoppingBag className="text-gray-700" />
          <p className="text-primary font-semibold lg:text-lg text-sm lg:block hidden">
            Orders
          </p>
        </span>
      </Link>

      <Link to="" className={LinkReset}>
        <span className={regularPage}>
          <FaTruck className="text-gray-700" />
          <p className="text-primary font-semibold lg:text-lg text-sm lg:block hidden">
            Shipping Address
          </p>
        </span>
      </Link>
    </div>
  )
}

export default UserSidebar
