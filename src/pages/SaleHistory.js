import React, { useState } from "react"
import { FaChevronDown, FaCalendarAlt } from "react-icons/fa"
import { FiGrid, FiSearch, FiUsers } from "react-icons/fi"

import Sidebar from "../components/sidebar"
import SellersHeader from "../components/SellersHeader"
import { salesHistoryData } from "../utils/data"
import SalesHistoryItem from "../components/SalesHistoryItem"

export default function SaleHistory() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="font-poppins lg:grid lg:grid-cols-6 bg-cover bg-seller min-h-screen relative">
      <Sidebar showSidebar={showSidebar} page="sales-history" />

      <div className="col-span-5 bg-gray-100 px-6 py-3 sm:px-16 sm:py-8">
        <SellersHeader
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />

        <div className="flex lg:flex-row flex-col mt-8 w-full">
          <div className="xl:w-1/2 lg:w-2/5 w-full pr-4">
            <span className="flex space-x-3 items-center">
              <FiUsers size={28} className="text-primary" />
              <p className="text-primary text-lg font-semibold">
                Sales History
              </p>
            </span>

            <form action="" className="w-full sm:w-3/4 mt-4">
              <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                <input
                  type="text"
                  name="search"
                  placeholder="Search anything"
                  autoComplete="off"
                  aria-label="Search anything"
                  className="w-full py-2 px-4 placeholder:text-gray-400 lg:text-sm text-xs text-black border-none rounded-2xl ring-2 ring-gray-200 focus:ring-gray-500 focus:ring-2"
                />
                <FiSearch className="lg:w-5 lg:h-5 w-4 h-4 absolute right-4" />
              </div>
            </form>
          </div>

          <div className="xl:w-1/2 lg:w-3/5 w-full lg:mt-0 pt-16 flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 sm:items-center items-start lg:justify-end justify-start">
            <div className="flex space-x-2 sm:-mt-8 items-start">
              <span className="flex items-center space-x-8 p-2 bg-white rounded-md border-none shadow text-sm">
                <p>Export</p> <FaChevronDown />
              </span>
              <span className="flex items-center space-x-8 p-2 bg-white rounded-md border-none shadow text-sm">
                <p>Filter</p> <FaChevronDown />
              </span>
              <span className="p-2 bg-white rounded-md border-none shadow">
                <FiGrid />
              </span>
              <span className="p-2 bg-white rounded-md border-none shadow">
                <FaCalendarAlt />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full mt-16">
          <div className="bg-primary text-white py-2 px-4 w-full flex items-center">
            <span className="md:w-3/12 w-4/12 pl-6">Product Name</span>
            <span className="xl:w-2/12 w-2/12 pl-8 ml-8 hidden sm:block">
              Transaction ID
            </span>
            <span className="w-2/12 text-center hidden sm:block">Price</span>
            <span className="text-center">Status</span>
            <span className="md:w-2/12 w-2/6 pl-6 text-center">
              Buyer&apos;s Info
            </span>
            <span className="md:w-1/12 w-3/12 text-center">QTY</span>
            <span className="w-2/12 text-center hidden xl:block">Date</span>
          </div>

          <div className="w-full bg-white">
            {salesHistoryData.map(item => (
              <div key={item._id}>
                <SalesHistoryItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
