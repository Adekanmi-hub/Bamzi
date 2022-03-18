import React, { useState } from "react"
import {
  FiGrid,
  FiPlus,
  FiSearch,
  FiAlertCircle,
  FiEdit3,
  FiTrash2,
  FiFilter,
} from "react-icons/fi"
import { MdOutlineAddBusiness } from "react-icons/md"
import Select from "react-select"

import {
  checkboxBrandData,
  checkboxCategoryData,
  colors,
  data,
  ram,
  sizes,
} from "../utils/data"
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
  const [addProduct, setAddProduct] = useState(false)
  const [editProduct, setEditProduct] = useState(false)

  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedRam, setSelectedRam] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [subCategory, setSubCategory] = useState("")
  const [price, setPrice] = useState("")
  const [length, setLength] = useState("")
  const [texture, setTexture] = useState("")
  const [stock, setStock] = useState("")

  const inputStyles =
    "px-2 py-1.5 border border-gray-300 rounded  w-full placeholder:text-gray-400 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-0"

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

  const handleSubmit = e => {
    e.preventDefault()
    setAddProduct(false)
  }

  const handleEdit = e => {
    e.preventDefault()
    setEditProduct(false)
  }

  return (
    <div className="font-poppins lg:grid lg:grid-cols-6 min-h-screen relative">
      <Sidebar showSidebar={showSidebar} page="sellers-board" />

      <div className="col-span-5 bg-gray-100 px-6 py-3 sm:px-16 sm:py-8">
        <SellersHeader
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />

        {!addProduct && !editProduct && (
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
                  <span
                    className="flex items-center p-2 bg-white rounded-md border-none shadow text-sm cursor-pointer"
                    onClick={() => setAddProduct(true)}
                  >
                    Add Product <FiPlus className="ml-4" />
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
                      <span className="flex items-center justify-center border-none rounded-bl-md bg-secondary text-white py-2 w-1/3 cursor-pointer">
                        <FiAlertCircle className="mr-2" /> Disable
                      </span>
                      <span
                        className="flex items-center justify-center bg-gray-200 py-2 w-1/3 cursor-pointer"
                        onClick={() => setEditProduct(true)}
                      >
                        <FiEdit3 className="mr-2" /> Edit
                      </span>
                      <span className="flex items-center justify-center border-none rounded-br-md bg-primary text-white py-2 w-1/3 cursor-pointer">
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
        )}

        {addProduct && !editProduct && (
          <div>
            <div className="flex mt-4 py-4 w-full items-center justify-between">
              <span className="flex space-x-2 text-primary items-center">
                <MdOutlineAddBusiness size={32} />
                <p className="text-lg font-semibold text-black">Add Product</p>
              </span>
              <div className="w-4/12 flex justify-end space-x-2">
                <button
                  className="bg-red-500 text-white py-2 w-4/12 rounded-lg text-center"
                  onClick={() => setAddProduct(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-primary text-white py-2 w-4/12 rounded-lg text-center"
                  onClick={e => handleSubmit(e)}
                >
                  Save
                </button>
              </div>
            </div>

            <div className="w-full space-y-2">
              <div className="bg-white p-4 rounded font-semibold shadow">
                Product Info
              </div>

              <div className="flex space-x-4 bg-white p-4 rounded shadow">
                <div className="space-y-4 w-1/2">
                  <div className="space-y-1">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      value={title}
                      className={inputStyles}
                      placeholder="Product Title"
                      autoComplete=""
                      onChange={e => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      value={description}
                      className={inputStyles}
                      rows="4"
                      placeholder="Product Description Max (40)"
                      onChange={e => setDescription(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="space-y-1">
                    <span>Category</span>
                    <Select
                      options={checkboxCategoryData}
                      placeholder="Please choose"
                      defaultValue={selectedCategory}
                      onChange={setSelectedCategory}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="subCategory">Sub-Category</label>
                    <input
                      type="text"
                      id="subCategory"
                      value={subCategory}
                      className={inputStyles}
                      placeholder="Sub-Category"
                      autoComplete=""
                      onChange={e => setSubCategory(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1">
                    <span>Brand</span>
                    <Select
                      options={checkboxBrandData}
                      placeholder="Please choose"
                      defaultValue={selectedBrand}
                      onChange={setSelectedBrand}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      id="price"
                      value={price}
                      className={inputStyles}
                      placeholder="Price"
                      autoComplete=""
                      onChange={e => setPrice(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1">
                    <span>Images</span>
                    <input
                      type="text"
                      className={inputStyles}
                      placeholder="Images"
                      autoComplete=""
                    />
                  </div>
                </div>

                <div className="space-y-4 w-1/2">
                  <div className="space-y-1">
                    <span>Color</span>
                    <Select
                      options={colors}
                      placeholder="Please choose"
                      defaultValue={selectedColor}
                      onChange={setSelectedColor}
                      isMulti
                    />
                  </div>

                  <div className="space-y-1">
                    <span>RAM</span>
                    <Select
                      options={ram}
                      placeholder="Please choose"
                      defaultValue={selectedRam}
                      onChange={setSelectedRam}
                      isMulti
                    />
                  </div>

                  <div className="space-y-1">
                    <span>Size</span>
                    <Select
                      options={sizes}
                      placeholder="Please choose"
                      defaultValue={selectedSize}
                      onChange={setSelectedSize}
                      isMulti
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="length">Length</label>
                    <input
                      type="text"
                      id="length"
                      value={length}
                      className={inputStyles}
                      placeholder="Length"
                      autoComplete=""
                      onChange={e => setLength(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="texture">Texture</label>
                    <input
                      type="text"
                      id="texture"
                      value={texture}
                      className={inputStyles}
                      placeholder="Texture"
                      autoComplete=""
                      onChange={e => setTexture(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="stock">Stock</label>
                    <input
                      type="number"
                      id="stock"
                      value={stock}
                      className={inputStyles}
                      placeholder="Stock"
                      autoComplete=""
                      onChange={e => setStock(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!addProduct && editProduct && (
          <div>
            <div className="flex mt-4 py-4 w-full items-center justify-between">
              <span className="flex space-x-2 text-primary items-center">
                <MdOutlineAddBusiness size={32} />
                <p className="text-lg font-semibold text-black">Edit Product</p>
              </span>
              <div className="w-4/12 flex justify-end space-x-2">
                <button
                  className="bg-red-500 text-white py-2 w-4/12 rounded-lg text-center"
                  onClick={() => setEditProduct(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-primary text-white py-2 w-4/12 rounded-lg text-center"
                  onClick={e => handleEdit(e)}
                >
                  Save
                </button>
              </div>
            </div>

            <div className="w-full space-y-2">
              <div className="bg-white p-4 rounded font-semibold shadow">
                Product Info
              </div>

              <div className="flex space-x-4 bg-white p-4 rounded shadow">
                <div className="space-y-4 w-1/2">
                  <div className="space-y-1">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      className={inputStyles}
                      placeholder="Product Title"
                      autoComplete=""
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      className={inputStyles}
                      rows="4"
                      placeholder="Product Description Max (40)"
                    ></textarea>
                  </div>

                  <div className="space-y-1">
                    <span>Category</span>
                    <Select
                      options={checkboxCategoryData}
                      placeholder="Please choose"
                      defaultValue={selectedCategory}
                      onChange={setSelectedCategory}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="subCategory">Sub-Category</label>
                    <input
                      type="text"
                      id="subCategory"
                      className={inputStyles}
                      placeholder="Sub-Category"
                      autoComplete=""
                    />
                  </div>

                  <div className="space-y-1">
                    <span>Brand</span>
                    <Select
                      options={checkboxBrandData}
                      placeholder="Please choose"
                      defaultValue={selectedBrand}
                      onChange={setSelectedBrand}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      id="price"
                      className={inputStyles}
                      placeholder="Price"
                      autoComplete=""
                    />
                  </div>

                  <div className="space-y-1">
                    <span>Images</span>
                    <input
                      type="text"
                      className={inputStyles}
                      placeholder="Images"
                      autoComplete=""
                    />
                  </div>
                </div>

                <div className="space-y-4 w-1/2">
                  <div className="space-y-1">
                    <span>Color</span>
                    <Select
                      options={colors}
                      placeholder="Please choose"
                      defaultValue={selectedColor}
                      onChange={setSelectedColor}
                      isMulti
                    />
                  </div>

                  <div className="space-y-1">
                    <span>RAM</span>
                    <Select
                      options={ram}
                      placeholder="Please choose"
                      defaultValue={selectedRam}
                      onChange={setSelectedRam}
                      isMulti
                    />
                  </div>

                  <div className="space-y-1">
                    <span>Size</span>
                    <Select
                      options={sizes}
                      placeholder="Please choose"
                      defaultValue={selectedSize}
                      onChange={setSelectedSize}
                      isMulti
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="length">Length</label>
                    <input
                      type="text"
                      id="length"
                      className={inputStyles}
                      placeholder="Length"
                      autoComplete=""
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="texture">Texture</label>
                    <input
                      type="text"
                      id="texture"
                      className={inputStyles}
                      placeholder="Texture"
                      autoComplete=""
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="stock">Stock</label>
                    <input
                      type="number"
                      id="stock"
                      className={inputStyles}
                      placeholder="Stock"
                      autoComplete=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
