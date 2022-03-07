import React from "react"
import { Link } from "react-router-dom"
import { FaCreditCard, FaShoppingBag, FaTruck, FaUser } from "react-icons/fa"

const UserSidebar = ({ page }) => {
  const currentPage =
    "flex items-center space-x-2 py-2 px-4 bg-gray-200 relative before:absolute before:left-0 before:h-6 before:w-1 before:bg-primary"
  const regularPage = "flex items-center space-x-2 py-2 px-4"
  const LinkReset = "p-0"

  return (
    <div className="bg-gray-100 lg:w-3/12 py-16 rounded-xl shadow md:flex hidden flex-col">
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
          <FaCreditCard className="text-gray-700" />
          <p className="text-primary font-semibold lg:text-lg text-sm lg:block hidden">
            Billings
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
