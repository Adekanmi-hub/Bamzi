import React, { useState } from "react"
import Sidebar from "../components/sidebar"
import SellersHeader from "../components/SellersHeader"
import { FaQuestionCircle, FaHeart } from "react-icons/fa"
import { HiUsers } from "react-icons/hi"
import { MdNotificationsActive, MdInfoOutline } from "react-icons/md"

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

        <div className="flex space-x-4 mt-2">
          <div className="pt-6 pr-8 pb-4 pl-4 bg-secondary rounded-xl relative">
            <p className="text-xs text-black">Total Sales</p>
            <p className="text-xl text-black">28,345</p>
          </div>

          <div className="pt-6 pr-8 pb-4 pl-4 text-white bg-red-500 rounded-xl relative">
            <FaQuestionCircle size={12} className=" absolute top-2 right-2" />
            <p className="text-xs text-white">Bad goods</p>
            <p className="text-xl text-white">28 errors</p>
          </div>

          <div className="pt-6 pr-8 pb-4 pl-4 text-white bg-primary rounded-xl relative">
            <FaQuestionCircle size={12} className=" absolute top-2 right-2" />
            <p className="text-xs text-white">Pending Sales</p>
            <p className="text-xl text-white">120</p>
          </div>

          <div className="pt-6 pr-8 pb-4 pl-4 text-gray-400 bg-white rounded-xl relative">
            <FaQuestionCircle size={12} className=" absolute top-2 right-2" />
            <p className="text-xs text-black">Wishlist Store</p>
            <span className="flex text-xl items-center space-x-4">
              <p className="text-black">500</p>
              <FaHeart className="text-secondary" />
            </span>
          </div>

          <div className="pt-6 pr-8 pb-4 pl-4 text-gray-400 bg-white rounded-xl relative">
            <FaQuestionCircle size={12} className=" absolute top-2 right-2" />
            <p className="text-xs text-black">Customers</p>
            <span className="text-xl flex items-center space-x-4">
              <p className="text-black">829</p>
              <HiUsers className="text-black" />
            </span>
          </div>
        </div>

        <div className="flex space-x-3 mt-10">
          <div className="w-1/2"></div>

          <div className="w-1/2 flex space-x-3">
            <div className="w-1/2 bg-secondary py-4 pr-8 pl-4 rounded-lg space-y-3">
              <div className="w-6 h-6 flex justify-center items-center bg-white rounded-full">
                <MdNotificationsActive size={16} />
              </div>

              <p className="text-xl text-black font-semibold">Error in Order</p>
              <p className="text-sm text-black">
                You have an urgent package to take care of please check this and
                revert to them
              </p>
            </div>

            <div className="w-1/2 bg-split py-4 pr-8 pl-4 rounded-lg space-y-2.5">
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
                    <button className="bg-primary py-1.5 w-full rounded text-xs text-white">
                      View Sales
                    </button>
                  </div>
                </div>

                <div className="w-1/3 -mt-6">
                  <img src={require("../assets/cup.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-10">
          <div className="w-7/12 bg-white rounded-lg py-4 px-4 space-y-2 divide-y divide-gray-100">
            <div className="relative">
              <MdInfoOutline className="absolute right-1" />
              <p className="text-sm text-black font-semibold">Lead Sales</p>
            </div>
            <img src={require("../assets/dashboard.png")} alt="" />
          </div>
          <div className="w-5/12"></div>
        </div>
      </div>
    </div>
  )
}
