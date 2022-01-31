import React from "react"

const Radio = ({ onRadioChange, accentColor }) => {
  return (
    <div className="py-4 border-b-2 border-gray-200">
      <h3>Multi Range</h3>
      <div className="flex flex-col mt-2">
        <div className="text-sm flex space-x-2 items-center">
          <input
            type="radio"
            name="price-range"
            className={`${accentColor}`}
            onClick={() => onRadioChange("under $10")}
          />
          <label htmlFor="price-range">under $10</label>
        </div>
        <div className="text-sm flex space-x-2 items-center">
          <input
            type="radio"
            name="price-range"
            className={`${accentColor}`}
            onClick={() => onRadioChange("$10 - $100")}
          />
          <label htmlFor="price-range">$10 - $100</label>
        </div>
        <div className="text-sm flex space-x-2 items-center">
          <input
            type="radio"
            name="price-range"
            className={`${accentColor}`}
            onClick={() => onRadioChange("$100 -$500")}
          />
          <label htmlFor="price-range">$100 - $500</label>
        </div>
        <div className="text-sm flex space-x-2 items-center">
          <input
            type="radio"
            name="price-range"
            className={`${accentColor}`}
            onClick={() => onRadioChange("more than $500")}
          />
          <label htmlFor="price-range">more than $500</label>
        </div>
        <div className="text-sm flex space-x-2 items-center">
          <input
            type="radio"
            name="price-range"
            className={`${accentColor}`}
            onClick={() => onRadioChange("All")}
          />
          <label htmlFor="price-range">All</label>
        </div>
      </div>
    </div>
  )
}

export default Radio
