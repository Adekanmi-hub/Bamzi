import React, { useState } from "react"
import { FaStar } from "react-icons/fa"
import { FiAward, FiAlertTriangle } from "react-icons/fi"

const Tab = ({ product }) => {
  const [tab, setTab] = useState(0)

  const toggleTab = index => {
    setTab(index)
  }

  let ratings = []
  product.reviews.forEach((review) => { ratings.push(review.rating) })

  let total = 0
  for (let i = 0; i < ratings.length; i++) {
    total += ratings[i]
  }
  const average = Math.floor(total / ratings.length)
  

  let starRating = []
  for (var i = 1; i <= 5; i++) {
    let icon = <FaStar className="text-secondary" />

    if (i > average) {
      icon = <FaStar className="text-gray-200" />
    }

    starRating.push(icon)
  }
  

  return (
    <div className="w-full my-5">
      <nav className="flex space-x-4 pb-1 border-b-2 border-b-gray-200 ">
        <div
          className={
            tab === 0
              ? "text-primary font-semibold border-b-secondary cursor-pointer relative after:absolute after:bg-secondary after:w-full after:h-1 after:-bottom-1.5 after:left-0 "
              : "text-gray-400 hover:text-primary font-semibold cursor-pointer"
          }
          onClick={() => toggleTab(0)}
        >
          Description
        </div>
        <div
          className={
            tab === 1
              ? "text-primary font-semibold border-b-secondary cursor-pointer relative after:absolute after:bg-secondary after:w-full after:h-1 after:-bottom-1.5 after:left-0"
              : "text-gray-400 hover:text-primary font-semibold cursor-pointer"
          }
          onClick={() => toggleTab(1)}
        >
          Reviews
        </div>
      </nav>

      <div className="mt-5">
        <div className={tab === 0 ? "block" : "hidden"}>
          <p className="text-sm text-gray-400 mb-4">
            {product.description.content}
          </p>
          <img
            src={product.description.image}
            alt=""
            className="w-full h-72 aspect-auto object-cover"
          />
        </div>

        <div className={`${tab === 1 ? "block" : "hidden"} bg-gray-50 p-8`}>
          <div className="flex items-center mb-6">
            <p className="font-semibold lg:w-1/4">{`Customer's Reviews (${product.reviews.length})`}</p>
            <div className="hidden lg:flex items-center space-x-4 w-1/4">
              <div className="flex space-x-1">{starRating}</div>
              <p className="text-lg font-semibold">{average}</p>
            </div>
            <span className="hidden lg:flex space-x-2 text-green-500 items-center w-1/4">
              <FiAward />
              <p>Verified Seller</p>
            </span>
            <span className="hidden lg:flex space-x-2 items-center w-1/4">
              <FiAlertTriangle />
              <p>Report Item</p>
            </span>

            <div></div>
          </div>
          {product.reviews.map((review, index) => {
            let stars = []

            for (var i = 1; i <= 5; i++) {
              let icon = <FaStar className="text-secondary" />

              if (i > review.rating) {
                icon = <FaStar className="text-gray-200" />
              }

              stars.push(icon)
            }

            return (
              <div
                key={index}
                className="px-2 py-6 flex flex-col-reverse lg:flex-row"
              >
                <div className="flex items-start space-x-2 lg:w-1/4 mt-2 lg:mt-0">
                  <img
                    src={review.avatar}
                    className="w-12 aspect-square rounded-full object-contain"
                    alt=""
                  />
                  <div className="space-y-1">
                    <p className="text-sm">{review.name}</p>
                    <p className="text-sm font-semibold">{review.date}</p>
                  </div>
                </div>
                <div className="space-y-2 ">
                  <div className="flex space-x-1">{stars}</div>
                  <p className="text-sm md:text-base ">{review.content}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Tab
