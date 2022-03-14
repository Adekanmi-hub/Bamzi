import React from "react"
import Header from "../components/header"
import UserBody from "../components/user/UserBody"
import UserSidebar from "../components/user/UserSidebar"

export default function Shippinginfo() {
  return (
    <div className="font-poppins min-h-screen bg-gray-50">
      <Header pryNav="user" secNav="user" />

      <UserBody>
        <UserSidebar page="shipping" />

        <div className="flex justify-between bg-white lg:w-9/12 w-full lg:py-12 lg:px-16 md:py-6 md:px-8 py-3 px-4 md:rounded-r-xl shadow md:flex-row flex-col">
          <div className="bg-white py-5 mx-2 text-sm">
            <form method="get" action="login.php">
              <h6>Shipping Info</h6>

              <div className="flex flex-col">

                <div className={"flex w-full md:flex-row flex-col"}>
                  <input
                    type="text"
                    name="name"
                    className={
                      "py-3 px-6 rounded-md md:w-1/2 w-full mr-3 border border-solid border-gray-400"
                    }
                    placeholder="Name"
                  />
                  <input
                    type="number"
                    name="number"
                    className={
                      "py-3 px-6 rounded-md md:w-1/2 w-full border border-solid border-gray-400"
                    }
                    placeholder="+234     Phone Number"
                  />
                </div>

                <h6>Address</h6>

                <div className={"flex w-full md:flex-row flex-col"}>
                  <input
                    type="text"
                    name="address"
                    className={
                      "py-3 px-6 rounded-md md:w-3/4 w-full mr-2 border border-solid border-gray-400"
                    }
                    placeholder="Street Address/Apartment Unit"
                  />
                  <input
                    type="text"
                    name="state"
                    className={
                      "py-3 px-6 rounded-md md:w-2/5 w-full mr-2 border border-solid border-gray-400"
                    }
                    placeholder="State/Region"
                  />
                  <input
                    type="text"
                    name="city"
                    className={
                      "py-3 px-6 rounded-md md:w-1/4 w-full border border-solid border-gray-400"
                    }
                    placeholder="City"
                  />
                </div>
                <div className={"flex mt-2 w-full md:w-4/5"}>
                  <input
                    type="text"
                    name="country"
                    className={
                      "py-3 px-5 rounded-md w-1/2 mr-2 border border-solid border-gray-400"
                    }
                    placeholder="Nigeria"
                  />
                  <input
                    type="number"
                    name="Zip Code"
                    className={
                      "py-3 px-6 rounded-md md:w-1/2 w-full border border-solid border-gray-400"
                    }
                    placeholder="Zip Code"
                  />
                </div>

                <div className={"flex justify-between items-center mt-6"}>
                  <button
                    type="submit"
                    className={
                      "py-3 px-6 rounded-md w-full md:w-1/2 bg-primary text-white md:text-base text-sm"
                    }
                    style={{ backgroundColor: "#000033" }}
                  >
                    Save and Continue
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </UserBody>
    </div>
  )
}
