import React, { useState} from "react"
import { FiStar, FiX } from "react-icons/fi"
import Radio from "./radio"
import CheckboxCategory from "./checkboxCategory"
import CheckboxBrand from "./checkboxBrand"

const Filter = ({
  showModal,
  closeModal,
  setProducts,
  accentColor,
  btnColor,
  products,
}) => {
  const [selectedRating, setSelectedRating] = useState(0)
  const [selectedRadio, setSelectedRadio] = useState("All")
  const [selectedCategory, setSelectedCategory] = useState([])
  const [selectedBrand, setSelectedBrand] = useState([])

  const filterByPrice = data => {
    console.log("filteredPrices")
    switch (selectedRadio) {
      case "under $10":
        return data.filter(prod => prod.price <= 10)
      case "$10 - $100":
        return data.filter(prod => prod.price >= 10 && prod.price <= 100)
      case "$100 -$500":
        return data.filter(prod => prod.price >= 100 && prod.price <= 500)
      case "more than $500":
        return data.filter(prod => prod.price >= 500)
      case "All":
        return data
      default:
        return data
    }
  }

  const filterByCategory = data => {
    console.log("filteredCategory")
    if (selectedCategory.length) {
      return data.filter(prod => selectedCategory.includes(prod.category))
    } else {
      return data
    }
  }

  const filterByBrand = data => {
    console.log("filteredBrand")
    if (selectedBrand.length) {
      return data.filter(prod => selectedBrand.includes(prod.brand))
    } else {
      return data
    }
  }

  const filterByRating = data => {
    console.log("filteredRating")
    switch (selectedRating) {
      case 5:
        return data.filter(prod => Math.floor(prod.rating) === 5)
      case 4:
        return data.filter(prod => Math.floor(prod.rating) === 4)
      case 3:
        return data.filter(prod => Math.floor(prod.rating) === 3)
      case 2:
        return data.filter(prod => Math.floor(prod.rating) === 2)
      case 1:
        return data.filter(prod => Math.floor(prod.rating) === 1)
      case 0:
        return data
      default:
        return data
    }
  }

  const filterData = product => {
    const filteredPrices = filterByPrice(product)
    console.log("filteredPrices :", filteredPrices)
    const filteredBrands = filterByBrand(filteredPrices)
    console.log("filteredBrands :", filteredBrands)
    const filteredCategories = filterByCategory(filteredBrands)
    console.log("filteredCategories :", filteredCategories)
    const filteredRatings = filterByRating(filteredCategories)
    console.log("filteredRatings :", filteredRatings)

    return filteredRatings
  }

  const onChangeHandler = () => {
    const filteredData = filterData(products)
    setProducts(filteredData)
  }

  // useEffect(() => {
  //   const filteredData = filterData(products)
  //   handleFilter(filteredData)

  // }, [selectedBrand, selectedCategory, selectedRadio, selectedRating, products])

  const handleToggle = (val, previousState) => {
    const currentIndex = previousState.indexOf(val)
    let newCheckedArray = [...previousState]
    if (currentIndex === -1) {
      if (val === "") {
        newCheckedArray = []
      } else {
        const filtered = newCheckedArray.filter(item => item !== "")
        newCheckedArray = [...filtered]
      }
      newCheckedArray.push(val)
    } else {
      newCheckedArray.splice(currentIndex, 1)
    }
    return newCheckedArray.sort((a, b) => a - b)
  }

  const onRadioChange = value => {
    setSelectedRadio(value)
  }

  const onCategoryChange = value => {
    const newCategoryState = handleToggle(value, selectedCategory)
    setSelectedCategory(newCategoryState)
  }

  const onBrandChange = value => {
    const newBrandState = handleToggle(value, selectedBrand)
    setSelectedBrand(newBrandState)
  }

  // useEffect(() => {
  //   console.log("brand :", selectedBrand)
  //   console.log("category :", selectedCategory)
  //   console.log("radio :", selectedRadio)
  //   console.log("rating :", selectedRating)
  // }, [selectedBrand, selectedCategory, selectedRadio, selectedRating])

  return (
    <div
      className={`bg-black bg-opacity-50 absolute inset-0 sm:bg-none sm:col-span-1 sm:relative sm:flex sm:flex-col sm:bg-opacity-0 ${
        showModal ? "flex flex-col z-10" : "hidden"
      }`}
    >
      <span className="hidden sm:block sm:text-sm">Filters</span>
      <div className="bg-white border-none shadow rounded px-4 mt-3 mb-6 flex flex-col">
        <div className="flex items-center justify-between py-4">
          <button
            className={`${btnColor} px-6 py-2 rounded text-white text-sm`}
            onClick={onChangeHandler}
          >
            Apply Filter
          </button>
          <button
            className="hover:bg-gray-200 rounded-full p-2 sm:hidden"
            onClick={closeModal}
          >
            <FiX />
          </button>
        </div>

        <Radio onRadioChange={onRadioChange} accentColor={accentColor} />
        <CheckboxCategory
          onCategoryChange={onCategoryChange}
          accentColor={accentColor}
        />
        <CheckboxBrand
          onBrandChange={onBrandChange}
          accentColor={accentColor}
        />

        <div className="py-4 space-y-2">
          <h3>Rating</h3>
          <div className="flex flex-col mt-2">
            <div className="text-sm flex space-x-2 items-center">
              <input
                type="radio"
                name="rating"
                className={`${accentColor}`}
                onClick={() => setSelectedRating(5)}
              />
              <label htmlFor="rating">
                <div className="flex">
                  <FiStar className="text-secondary w-5 h-5" />
                  <FiStar className="text-secondary w-5 h-5" />
                  <FiStar className="text-secondary w-5 h-5" />
                  <FiStar className="text-secondary w-5 h-5" />
                  <FiStar className="text-secondary w-5 h-5" />
                </div>
              </label>
            </div>
            <div className="text-sm flex space-x-2 items-center">
              <input
                type="radio"
                name="rating"
                className={`${accentColor}`}
                onClick={() => setSelectedRating(4)}
              />
              <label htmlFor="rating">
                <div className="flex">
                  <FiStar className="text-secondary w-5 h-5" />
                  <FiStar className="text-secondary w-5 h-5" />
                  <FiStar className="text-secondary w-5 h-5" />
                  <FiStar className="text-secondary w-5 h-5" />
                  <FiStar className="text-gray-400 w-5 h-5" />
                </div>
              </label>
            </div>
            <div className="text-sm flex space-x-2 items-center">
              <input
                type="radio"
                name="rating"
                className={`${accentColor}`}
                onClick={() => setSelectedRating(3)}
              />
              <label htmlFor="rating">
                <div className="flex">
                  <FiStar className="text-secondary w-5 h-5" />
                  <FiStar className="text-secondary w-5 h-5" />
                  <FiStar className="text-secondary w-5 h-5" />
                  <FiStar className="text-gray-400 w-5 h-5" />
                  <FiStar className="text-gray-400 w-5 h-5" />
                </div>
              </label>
            </div>
            <div className="text-sm flex space-x-2 items-center">
              <input
                type="radio"
                name="rating"
                className={`${accentColor}`}
                onClick={() => setSelectedRating(2)}
              />
              <label htmlFor="rating">
                <div className="flex">
                  <FiStar className="text-secondary w-5 h-5" />
                  <FiStar className="text-secondary w-5 h-5" />
                  <FiStar className="text-gray-400 w-5 h-5" />
                  <FiStar className="text-gray-400 w-5 h-5" />
                  <FiStar className="text-gray-400 w-5 h-5" />
                </div>
              </label>
            </div>
            <div className="text-sm flex space-x-2 items-center">
              <input
                type="radio"
                name="rating"
                className={`${accentColor}`}
                onClick={() => setSelectedRating(1)}
              />
              <label htmlFor="rating">
                <div className="flex">
                  <FiStar className="text-secondary w-5 h-5" />
                  <FiStar className="text-gray-400 w-5 h-5" />
                  <FiStar className="text-gray-400 w-5 h-5" />
                  <FiStar className="text-gray-400 w-5 h-5" />
                  <FiStar className="text-gray-400 w-5 h-5" />
                </div>
              </label>
            </div>
          </div>
        </div>

        <button
          className={`${btnColor} text-white text-sm py-2 px-6 rounded border-none mb-3`}
          onClick={() => setProducts(products)}
        >
          CLEAR ALL FILTERS
        </button>
      </div>
    </div>
  )
}

export default Filter
