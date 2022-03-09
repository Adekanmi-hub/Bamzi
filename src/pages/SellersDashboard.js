import React, { useState } from "react"
import Sidebar from "../components/sidebar"
import SellersHeader from "../components/SellersHeader"
import { FaQuestionCircle, FaHeart } from "react-icons/fa"
import { HiUsers } from "react-icons/hi"
import { MdNotificationsActive, MdInfoOutline } from "react-icons/md"
import { tickets, latestSales } from "../utils/data"
import { Link } from "react-router-dom"

export default function SellersDashboard() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="font-poppins lg:grid lg:grid-cols-6  min-h-screen relative">
      <Sidebar showSidebar={showSidebar} page="dashboard" />

      <div className="col-span-5 bg-gray-100 px-6 py-3 lg:px-16 sm:py-8">
        <SellersHeader
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />

        <p className="mt-10 text-sm text-black">Quick Stats</p>

        <div className="flex flex-wrap mt-2">
          <div className="min-w-[8.5rem] pt-6 pr-8 pb-4 pl-4 bg-secondary rounded-xl relative m-2">
            <p className="text-xs text-black">Total Sales</p>
            <p className="text-xl text-black">28,345</p>
          </div>

          <div className=" min-w-[8.5rem] pt-6 pr-8 pb-4 pl-4 text-white bg-red-500 rounded-xl relative m-2">
            <FaQuestionCircle size={12} className=" absolute top-2 right-2" />
            <p className="text-xs text-white">Bad goods</p>
            <p className="text-xl text-white">28 errors</p>
          </div>

          <div className="min-w-[8.5rem] pt-6 pr-8 pb-4 pl-4 text-white bg-primary rounded-xl relative m-2">
            <FaQuestionCircle size={12} className=" absolute top-2 right-2" />
            <p className="text-xs text-white">Pending Sales</p>
            <p className="text-xl text-white">120</p>
          </div>

          <div className="min-w-[8.5rem] pt-6 pr-8 pb-4 pl-4 text-gray-400 bg-white rounded-xl relative m-2">
            <FaQuestionCircle size={12} className=" absolute top-2 right-2" />
            <p className="text-xs text-black">Wishlist Store</p>
            <span className="flex text-xl items-center space-x-4">
              <p className="text-black">500</p>
              <FaHeart className="text-secondary" />
            </span>
          </div>

          <div className="min-w-[8.5rem] pt-6 pr-8 pb-4 pl-4 text-gray-400 bg-white rounded-xl relative m-2">
            <FaQuestionCircle size={12} className=" absolute top-2 right-2" />
            <p className="text-xs text-black">Customers</p>
            <span className="text-xl flex items-center space-x-4">
              <p className="text-black">829</p>
              <HiUsers className="text-black" />
            </span>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col-reverse sm:space-x-3 sm:space-y-0 space-y-3 sm:mt-10 mt-6 items-start">
          <div className="sm:w-1/2 w-full space-y-3 py-4 px-4 bg-white rounded-lg sm:mt-0 mt-3">
            <p className="text-sm text-black">Latest Sales (28)</p>

            {latestSales.map(item => (
              <div key={item._id}>
                <div className="flex space-x-3">
                  <div className="border border-primary rounded w-12 h-12 p-2">
                    <img src={item.product.image} alt="" />
                  </div>

                  <div className="text-sm sm:w-3/5 w-1/2">
                    <p className="text-black">{item.product.name}</p>
                    <span className="flex space-x-1">
                      <p className="text-black">QTY</p>
                      <p className="text-center text-sm py-0.5 px-3 rounded-xl font-semibold bg-gray-200 text-gray-500">
                        {item.product.quantity}
                      </p>
                    </span>
                    <p className="text-secondary">${item.product.price}</p>
                  </div>

                  <p className="text-sm text-black">{item.timeOfSale}</p>
                </div>
              </div>
            ))}

            <div className="flex justify-end">
              <Link to="/sales-page" className="p-0">
                <button className="bg-primary text-white text-sm py-1.5 px-6 rounded">
                  View Sales
                </button>
              </Link>
            </div>
          </div>

          <div className="sm:w-1/2 w-full flex sm:flex-row flex-col sm:space-x-3 sm:space-y-0 space-y-3">
            <div className="sm:w-1/2 w-3/4 bg-secondary py-4 pr-8 pl-4 rounded-lg space-y-3">
              <div className="w-6 h-6 flex justify-center items-center bg-white rounded-full">
                <MdNotificationsActive size={16} />
              </div>

              <p className="text-xl text-black font-semibold">Error in Order</p>
              <p className="text-sm text-black">
                You have an urgent package to take care of please check this and
                revert to them
              </p>
            </div>

            <div className="sm:w-1/2 w-3/4 bg-split py-4 pr-8 pl-4 rounded-lg space-y-2.5">
              <div>
                <p className="text-black">Congratulations John!</p>
                <p className="text-xs text-black">Best Seller of the Month.</p>
              </div>

              <div className="flex items-center">
                <div className="space-y-2.5 w-2/3">
                  <p className="text-2xl text-black">$89k</p>

                  <div className="space-y-2">
                    <p className="text-xs text-black">
                      You have done 57.6% more sales today
                    </p>

                    <Link to="/sales-page" className="p-0">
                      <button className="bg-primary py-1.5 mt-2 w-full rounded text-xs text-white">
                        View Sales
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="w-1/3 -mt-6">
                  <img src={require("../assets/cup.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col sm:mt-10 mt-6 sm:space-x-3 sm:space-y-0 space-y-3">
          <div className="sm:w-7/12 w-full bg-white rounded-lg py-4 px-4 space-y-2 divide-y divide-gray-200">
            <div className="relative">
              <MdInfoOutline className="absolute right-1" />
              <p className="text-sm text-black font-semibold">Lead Sales</p>
            </div>
            <img src={require("../assets/dashboard.png")} alt="" />
          </div>

          <div className="sm:w-5/12 w-full bg-white rounded-lg py-4 px-4 space-y-2 divide-y divide-gray-200">
            <div className="relative">
              <MdInfoOutline className="absolute right-1" />
              <p className="text-sm font-semibold text-black">Latest Tickets</p>
            </div>

            {tickets.map(ticket => (
              <div key={ticket._id} className="space-y-2">
                <span className="text-xs text-gray-400 flex space-x-1">
                  <p>Ticket</p>
                  <p className="text-primary">{`#${ticket.number}`}</p>
                </span>
                <p className="text-sm text-black">{ticket.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
