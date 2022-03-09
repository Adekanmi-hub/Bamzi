import React from "react"

const OrderItem = ({ order, showDetails, setShowDetails, setShowStatus }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-sm shadow-sm flex md:flex-row flex-col">
      <div className="flex space-x-4 md:w-8/12 w-full">
        <div className="w-24 h-24 xl:py-2 lg:py-4 md:py-3 md:px-4 py-3 px-3 rounded-sm shadow-sm bg-white">
          <img src={order.product.img} alt="" className="object-cover" />
        </div>

        <div className="flex flex-col justify-between">
          <p className="text-sm font-semibold text-black">
            {order.product.title}
          </p>

          <div className="flex space-x-4">
            {order.product.color === "red" && (
              <div className="flex items-center space-x-2">
                <p className="text-sm font-semibold text-black">Color</p>
                <span className="w-6 h-6 rounded bg-red-500"></span>
              </div>
            )}
            {order.product.color === "blue" && (
              <div className="flex items-center space-x-2">
                <p className="text-sm font-semibold text-black">Color</p>
                <span className="w-6 h-6 rounded bg-blue-500"></span>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <p className="text-sm font-semibold text-black">Size</p>
              <span className="text-center text-sm py-1 px-3 rounded-xl font-semibold bg-gray-200 text-gray-500">
                {order.product.size}
              </span>
            </div>
          </div>
        </div>
      </div>

      {!showDetails && (
        <div className="flex flex-col md:justify-between md:space-y-0 space-y-3 md:w-4/12 w-full mt-4 md:mt-0">
          <span className="flex items-center justify-between text-sm font-semibold">
            <p className="text-green underline">Confirm Order</p>
            <p className="text-black">{order.date}</p>
          </span>

          <button
            className="w-full py-2 bg-primary text-white text-center text-sm rounded-lg"
            onClick={() => setShowDetails(true)}
          >
            View Details
          </button>
        </div>
      )}

      {showDetails && (
        <div className="flex flex-col md:justify-between md:space-y-0 space-y-3 md:w-4/12 w-full mt-4 md:mt-0">
          <span className="flex items-center justify-between text-sm font-semibold">
            <p className="text-primary underline">{order.statusMsg}</p>
            <p className="text-primary">{order.date}</p>
          </span>

          <span className="flex items-center justify-between text-sm font-semibold">
            <p className="text-secondary">{`$${order.product.price}`}</p>
            <p className="text-primary">{`QTY: ${order.product.qty}`}</p>
          </span>

          <button
            className="w-full py-2 bg-primary text-white text-center text-sm rounded-lg"
            onClick={() => setShowStatus(true)}
          >
            View Status
          </button>
        </div>
      )}
    </div>
  )
}

export default OrderItem
