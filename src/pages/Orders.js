import React, { useState } from "react"
import {
  FaChevronLeft,
  FaCreditCard,
  FaShoppingBag,
  FaTruck,
  FaUser,
} from "react-icons/fa"
import Header from "../components/header"
import OrderItem from "../components/OrderItem"
import { orders } from "../utils/data"

export default function Orders() {
  const [tab, setTab] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const [showStatus, setShowStatus] = useState(false)

  const toggleTab = index => {
    setTab(index)
  }

  return (
    <div className="font-poppins min-h-screen bg-gray-50">
      <Header />

      <div className="flex lg:px-16 lg:py-12 md:px-8 md:py-6">
        <div className="bg-gray-100 lg:w-3/12 py-16 rounded-xl shadow md:flex hidden flex-col">
          <span className="flex items-center space-x-2 py-2 px-4">
            <FaUser className="text-gray-700" />
            <p className="text-primary font-semibold lg:text-lg text-sm lg:block hidden">
              Bamzi Account
            </p>
          </span>
          <span className="flex items-center space-x-2 py-2 px-4 bg-gray-200 relative before:absolute before:left-0 before:h-6 before:w-1 before:bg-primary">
            <FaShoppingBag className="text-gray-700" />
            <p className="text-primary font-semibold lg:text-lg text-sm lg:block hidden">
              Orders
            </p>
          </span>
          <span className="flex items-center space-x-2 py-2 px-4">
            <FaCreditCard className="text-gray-700" />
            <p className="text-primary font-semibold lg:text-lg text-sm lg:block hidden">
              Billings
            </p>
          </span>
          <span className="flex items-center space-x-2 py-2 px-4">
            <FaTruck className="text-gray-700" />
            <p className="text-primary font-semibold lg:text-lg text-sm lg:block hidden">
              Shipping Address
            </p>
          </span>
        </div>

        <div className="bg-white lg:w-9/12 w-full lg:py-12 lg:px-16 md:py-6 md:px-8 py-3 px-4 space-y-8 md:rounded-r-xl shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <span
                className={`font-semibold text-sm cursor-pointer ${
                  tab === 0
                    ? "text-primary relative after:absolute after:bg-secondary after:w-full after:h-0.5 after:-bottom-2 after:left-0 "
                    : "text-gray-400 hover:text-primary"
                }`}
                onClick={() => toggleTab(0)}
              >
                Orders
              </span>
              <span
                className={`font-semibold text-sm cursor-pointer ${
                  tab === 1
                    ? "text-primary relative after:absolute after:bg-secondary after:w-full after:h-0.5 after:-bottom-2 after:left-0 "
                    : "text-gray-400 hover:text-primary"
                }`}
                onClick={() => toggleTab(1)}
              >
                Order History
              </span>
            </div>

            {/* <div className="flex space-x-2 items-center">
              <span className="flex items-center space-x-8 p-2 bg-white rounded-md border-none shadow text-sm">
                <p>Filter</p> <FaChevronDown />
              </span>
              <span className="p-2 bg-white rounded-md border-none shadow">
                <FiGrid />
              </span>
              <span className="p-2 bg-white rounded-md border-none shadow">
                <FaCalendarAlt />
              </span>
            </div> */}
          </div>

          {!showStatus && showDetails && (
            <div className="flex flex-col space-y-2">
              <span
                className="flex space-x-2 items-center text-sm text-blue-500 font-semibold cursor-pointer"
                onClick={() => setShowDetails(false)}
              >
                <FaChevronLeft size={10} />
                <p>Back</p>
              </span>

              <span className="flex items-center text-sm md:w-4/12 w-full">
                <p className="text-black font-semibold w-1/2">Order Number</p>
                <p className="text-blue-500 w-1/2">ODD908u023</p>
              </span>

              <div>
                <span className="flex items-center text-sm md:w-4/12 w-full">
                  <p className="text-black w-1/2">No of items</p>
                  <p className="text-blue-500 w-1/2">2</p>
                </span>
                <span className="flex items-center text-sm md:w-4/12 w-full">
                  <p className="text-black w-1/2">Placed On</p>
                  <p className="text-blue-500 w-1/2">3/12/2020</p>
                </span>
              </div>
            </div>
          )}

          <div>
            {!showStatus && showDetails && (
              <span className="text-sm text-black font-semibold">
                Items in your order
              </span>
            )}
            <div className="space-y-6">
              {!showStatus &&
                orders.map(order => (
                  <div key={order.id}>
                    <OrderItem
                      order={order}
                      showDetails={showDetails}
                      setShowDetails={setShowDetails}
                      setShowStatus={setShowStatus}
                    />
                  </div>
                ))}
            </div>
          </div>

          {!showStatus && showDetails && (
            <div>
              <div className="flex md:flex-row flex-col-reverse md:justify-between">
                <div className="md:w-5/12 w-full text-sm space-y-2 mt-6 md:mt-0">
                  <p>Payment Information</p>
                  <span className="flex items-center">
                    <p className="w-1/2">Sub Total</p>
                    <p className="w-1/2">$799.98</p>
                  </span>
                  <span className="flex items-center">
                    <p className="w-1/2">Shipping Fee</p>
                    <p className="w-1/2">$49.99</p>
                  </span>
                  <span className="flex items-center text-base font-semibold">
                    <p className="w-1/2">Total Payment</p>
                    <p className="w-1/2 text-secondary">$849.97</p>
                  </span>
                </div>
                <div className="md:w-5/12 w-full text-sm space-y-2">
                  <p>Shipping Address</p>
                  <p>Shipping Address by you, Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          )}

          {showStatus && (
            <div className="flex flex-col space-y-8">
              <span
                className="flex space-x-2 items-center text-sm text-blue-500 font-semibold cursor-pointer"
                onClick={() => setShowStatus(false)}
              >
                <FaChevronLeft size={10} />
                <p>Back</p>
              </span>

              <div className="flex flex-col space-y-8">
                <div className="flex space-x-4">
                  <span className="w-8 h-8 rounded-full border-4 border-secondary bg-primary relative after:absolute after:block after:h-14 after:left-2.5 after:w-1 after:-bottom-14 after:bg-secondary"></span>
                  <div className="flex flex-col">
                    <p className="text-secondary text-lg font-semibold">
                      Order Placed
                    </p>
                    <p className="text-sm text-gray-500">3/12/2020</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <span className="w-8 h-8 rounded-full border-4 border-secondary bg-primary relative after:absolute after:block after:h-14 after:left-2.5 after:w-1 after:-bottom-14 after:bg-secondary"></span>
                  <div className="flex flex-col">
                    <p className="text-secondary text-lg font-semibold">
                      Shipping in Progress
                    </p>
                    <p className="text-sm text-gray-500">
                      3/12/2020 - 5/12/2020
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <span className="w-8 h-8 rounded-full border-4 border-secondary bg-white"></span>
                  <div className="flex flex-col">
                    <p className="text-secondary text-lg font-semibold">
                      Delivered
                    </p>
                    <p className="text-sm text-gray-500"></p>
                  </div>
                  <button className="bg-gray-400 text-white text-sm text-center py-2 xl:w-1/5 sm:w-1/4 w-1/2 rounded-lg">
                    Confirm Delivery
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
