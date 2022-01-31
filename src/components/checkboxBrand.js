import React from "react"
import { checkboxBrandData } from "../utils/data"

const CheckboxBrand = ({ onBrandChange, accentColor }) => {
  return (
    <div className="py-4 border-b-2 border-gray-200">
      <h3>Brand</h3>
      <div className="flex flex-col mt-2">
        {checkboxBrandData.map((item, index) => (
          <div key={index} className="text-sm space-x-2 flex items-center">
            <input
              type="checkbox"
              id={item.name}
              className={`${accentColor}`}
              onClick={() => onBrandChange(item.value)}
            />
            <label htmlFor={item.name}>{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheckboxBrand
