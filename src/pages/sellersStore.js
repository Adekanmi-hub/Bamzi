import React, { useState } from "react"
import Filter from "../components/filter"
import Footer from "../components/footer"
import Header from "../components/header"
import Card from "../components/card"
import { FiAlignLeft, FiGrid, FiAlignJustify, FiFilter, FiSearch } from "react-icons/fi"
import { IoIosHeartEmpty, IoIosCart, IoIosHeart } from "react-icons/io"
import { data } from "../utils/data"

export default function SellersStore() {
  const [tab, setTab] = useState(0)
  const [products, setProducts] = useState(data)
  const [showModal, setShowModal] = useState(false)

  const toggleTab = index => {
    setTab(index)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="font-poppins bg-store bg-repeat">
      <Header items />
      <div className="w-full h-80 py-6 bg-storeHeader bg-cover flex items-end relative">
        <div className="flex md:flex-row flex-col md:space-x-4 space-y-4 md:px-24 px-6 md:items-center">
          <div className="md:w-48 md:h-36 w-32 h-24 ">
            <img
              src={require("../assets/fashion-img01.png")}
              alt=""
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="md:text-3xl text-base text-white font-semibold">
              Sabrina Fashion Store
            </h2>
            <p className="md:text-sm text-xs text-white">
              Get the best out of royal fashion from Sabrina the great.
            </p>
          </div>
        </div>

        <button className="absolute right-0 top-10 bg-lightPurple text-white text-xs md:text-sm md:w-64 w-48 py-2 px-6 rounded-l-xl border-none">
          Add to Favourite Store
        </button>
      </div>
      <div className="w-full md:px-24 bg-gray-200 shadow-lg flex lg:space-x-16 md:space-x-8">
        <div className="text-white bg-lightPurple md:w-48 w-3/4 py-3 md:px-4 px-6 flex items-center space-x-4">
          <FiAlignLeft />
          <p className="text-sm">Store Brands</p>
        </div>
        <ul className="hidden md:flex lg:space-x-8 md:space-x-4 text-black text-sm py-3">
          <li>Apple</li>
          <li>Canon</li>
          <li>HP</li>
          <li>LG</li>
          <li>Samsung</li>
          <li>Sony</li>
          <li>Xiaomi</li>
        </ul>
        <div className="md:hidden flex w-1/4 py-3 bg-lightBrown justify-center text-white">
          <IoIosHeart />
        </div>
      </div>

      <div className="lg:px-24 px-6 py-3">
        <nav className="flex md:space-x-10 space-x-4 pt-3 text-sm pb-1 border-b-2 border-b-gray-200 ">
          <div
            className={
              tab === 0
                ? "text-primary font-semibold cursor-pointer relative after:absolute after:bg-lightBrown after:w-full after:h-1 after:-bottom-1.5 after:left-0 "
                : "text-gray-400 hover:text-primary font-semibold cursor-pointer"
            }
            onClick={() => toggleTab(0)}
          >
            Products
          </div>
          <div
            className={
              tab === 1
                ? "text-primary font-semibold cursor-pointer relative after:absolute after:bg-lightBrown after:w-full after:h-1 after:-bottom-1.5 after:left-0 "
                : "text-gray-400 hover:text-primary font-semibold cursor-pointer"
            }
            onClick={() => toggleTab(1)}
          >
            Shop Info
          </div>
          <div
            className={
              tab === 2
                ? "text-primary font-semibold cursor-pointer relative after:absolute after:bg-lightBrown after:w-full after:h-1 after:-bottom-1.5 after:left-0 "
                : "text-gray-400 hover:text-primary font-semibold cursor-pointer"
            }
            onClick={() => toggleTab(2)}
          >
            Promotions
          </div>
        </nav>

        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <Filter
            showModal={showModal}
            closeModal={closeModal}
            products={data}
            setProducts={setProducts}
            btnColor="bg-lightBrown"
            accentColor="accent-lightBrown"
          />
          <div className="sm:col-span-1 lg:col-span-3">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-3">
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
              <div className="flex items-center sm:justify-end justify-between space-x-4 mt-3 sm:mt-0">
                <span
                  className="sm:hidden flex items-center p-2 bg-white rounded-md border-none shadow text-sm"
                  onClick={() => setShowModal(true)}
                >
                  Filter <FiFilter className="ml-4" />
                </span>
                <div className="flex items-center space-x-2">
                  <span className="p-2 rounded-md bg-white shadow">
                    <FiGrid />
                  </span>
                  <span className="p-2 rounded-md bg-white shadow">
                    <FiAlignJustify />
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm">7,618 results found in 5ms</p>

            <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map(product => (
                <div key={product._id}>
                  <Card product={product} btnColor="bg-lightBrown" />
                  <div className="flex items-center text-sm border-none shadow -mt-1.5">
                    <span className="flex items-center justify-center border-none rounded-bl-md bg-lightBrown text-white py-2 w-1/2">
                      <IoIosHeartEmpty className="mr-2" /> WISHLIST
                    </span>
                    <span className="flex items-center justify-center border-none rounded-br-md bg-lightPurple text-white py-2 w-1/2">
                      <IoIosCart className="mr-2" /> ADD TO CART
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer bgColor="bg-lightPurple" btnColor="bg-lightBrown" />
    </div>
  )
}
