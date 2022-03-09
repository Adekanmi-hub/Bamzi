import React from "react"
import { RiEqualizerFill } from "react-icons/ri"

const SalesHistoryItem = ({ item }) => {
  return (
    <div className="flex w-full items-center">
      <div className="lg:w-4/12 w-5/12 p-4 flex items-center text-md space-x-4">
        <input type="checkbox" className="accent-secondary" />

        <p className="">{item.product.title}</p>
      </div>
      <div className="xl:w-2/12 w-1/12 pr-3">
        <span className="text-sm py-1 font-semibold">
          {item.transaction_id}
        </span>
      </div>

      <div className="xl:w-2/12 w-2/12">
        <p className="font-semibold text-green-600 ml-24 lg:text-sm text-xs">{`$${item.price}`}</p>
      </div>

      <div className="xl:w-2/12 w-1/12">
        <span className="ml-12 text-sm py-1 font-semibold">{item.status}</span>
      </div>
      <div className="xl:w-2/12 w-3/12">
        <span className="ml-2 text-sm py-1 font-semibold">
          {item.buyers_info}
        </span>
      </div>

      <div className="xl:w-2/12 w-1/12">
        <span className="text-sm py-1 px-4 ml-8 rounded-xl font-semibold bg-gray-200 text-gray-500">
          {item.qty}
        </span>
      </div>
      <div className="xl:w-2/12 w-1/12 hidden xl:block">
        <span className="flex items-center justify-between">
          <p className="text-sm font-semibold">{item.date}</p>
          <RiEqualizerFill size={20} />
        </span>
      </div>
    </div>
  )
}

export default SalesHistoryItem
