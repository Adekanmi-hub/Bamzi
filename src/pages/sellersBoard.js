import React, { useState } from "react"
import {
  FiGrid,
  FiChevronDown,
  FiSearch,
  FiAlertCircle,
  FiEdit3,
  FiTrash2,
  FiFilter,
} from "react-icons/fi"

import { data } from "../utils/data"
import Card from "../components/card"
import Pagination from "../components/pagination"
import Sidebar from "../components/sidebar"
import Filter from "../components/filter"
import SellersHeader from "../components/SellersHeader"

export default function SellersBoard() {
  const [products, setProducts] = useState(data)
  const [showSidebar, setShowSidebar] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const pageNumberLimit = 5
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
  const productsPerPage = 6

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )
  console.log(currentProducts)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  const prevPage = () => {
    setCurrentPage(currentPage - 1)

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1)

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="font-poppins lg:grid lg:grid-cols-6 min-h-screen relative">
      <Sidebar showSidebar={showSidebar} page="sellers-board" />

      <div className="col-span-5 bg-gray-100 px-6 py-3 sm:px-16 sm:py-8">
        <SellersHeader
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />

        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <Filter
            showModal={showModal}
            closeModal={closeModal}
            products={data}
            setProducts={setProducts}
            btnColor="bg-primary"
            accentColor="accent-primary"
          />

          <div className="sm:col-span-1 lg:col-span-2">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-3">
              <form action="" className="w-full sm:w-1/2">
                <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search here"
                    autoComplete="off"
                    aria-label="Search anything"
                    className="w-full p-2 placeholder:text-gray-400 lg:text-sm text-xs text-black border-none rounded-2xl ring-2 ring-gray-200 focus:ring-gray-500 focus:ring-2"
                  />
                  <FiSearch className="lg:w-5 lg:h-5 w-4 h-4 absolute right-2" />
                </div>
              </form>
              <div className="flex justify-center sm:justify-between items-center space-x-2 w-full mt-3 sm:w-auto sm:mt-0 ">
                <span
                  className="sm:hidden flex items-center p-2 bg-white rounded-md border-none shadow text-sm"
                  onClick={() => setShowModal(true)}
                >
                  Filter <FiFilter className="ml-4" />
                </span>
                <span className="flex items-center p-2 bg-white rounded-md border-none shadow text-sm">
                  Action <FiChevronDown className="ml-4" />
                </span>
                <span className="p-2 bg-white rounded-md border-none shadow">
                  <FiGrid />
                </span>
              </div>
            </div>
            <span className="text-sm">7,618 results found in 5ms</span>

            {/**cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
              {currentProducts.map(product => (
                <div key={product._id}>
                  <Card product={product} btnColor="bg-primary" />
                  <div className="flex items-center -mt-1.5 border-none shadow text-sm">
                    <span className="flex items-center justify-center border-none rounded-bl-md bg-secondary text-white py-2 w-1/3">
                      <FiAlertCircle className="mr-2" /> Disable
                    </span>
                    <span className="flex items-center justify-center bg-gray-200 py-2 w-1/3">
                      <FiEdit3 className="mr-2" /> Edit
                    </span>
                    <span className="flex items-center justify-center border-none rounded-br-md bg-primary text-white py-2 w-1/3">
                      <FiTrash2 className="mr-2" /> Delete
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/**cards */}

            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              paginate={paginate}
              minPageNumberLimit={minPageNumberLimit}
              pageNumberLimit={pageNumberLimit}
              maxPageNumberLimit={maxPageNumberLimit}
              currentPage={currentPage}
              prevPage={prevPage}
              nextPage={nextPage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
