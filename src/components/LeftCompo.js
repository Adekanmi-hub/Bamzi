import React from "react"
import { MdDelete, MdShoppingCart } from "react-icons/md"

const LeftCompo = ({ products }) => {
  return (
    <div className="lg:basis-2/3 px-8 py-10">
      <div className="bg-white border px-8 py-4 rounded-md">
        <div className="flex justify-between">
          <div className="font-extrabold sm:text-md lg:text-xl">
            Wishlist (3)
          </div>
          <div className="flex item-center">
            <img
              src="https://img.icons8.com/ios/50/000000/delete--v1.png"
              className="w-5 h-4"
              alt="delete all"
            />
            <div className="text-sm text-gray-600 px-1">Delete All</div>
          </div>
        </div>
      </div>

      <div>
        {products.map(product => (
          <div
            key={product._id}
            className="flex md:flex-row flex-col border mt-10 py-4 px-6"
          >
            <div className="w-32 h-32 border border-primary md:flex hidden justify-center items-center">
              <img
                src={product.images[0]}
                className="w-24 h-24 object-contain"
              />
            </div>

            <div className="md:w-1/2 w-full flex md:flex-col flex-row md:space-y-4 md:justify-start justify-between md:px-4">
              <p className="text-lg text-primary font-semibold">
                {product.name}
              </p>
              <p className="text-secondary font-semibold">{`$${product.price}`}</p>
            </div>

            <div className="flex md:flex-col flex-row-reverse md:w-1/3 w-full md:items-end md:space-y-4 md:justify-start justify-between md:mt-0 mt-4">
              <MdDelete size={24} />

              <button className="bg-primary w-7/12 py-1.5 text-white text-sm rounded-md flex items-center justify-center space-x-1">
                <MdShoppingCart size={24} />
                <p className="text-white text-sm">Add to Cart</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeftCompo
