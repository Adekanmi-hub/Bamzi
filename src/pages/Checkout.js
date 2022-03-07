import React from "react"
import checkout from "../styles/checkout.module.css"
import Header from "../components/header"

export default function Checkout() {
  return (
    <div>
      <div className={"bg-fadewhite w-full my-0 mx-auto"}>
        <Header pryNav="user" secNav="user" />

        <div
          className={
            "flex lg:flex-row flex-col md:w-full py-5 lg:px-16 md:px-12 px-0 justify-center items-center lg:justify-between lg:items-start lg:space-x-8 mt-5"
          }
        >
          <div className={"lg:w-2/3 md:3/4 w-full md:m-0"}>
            <div
              className={
                "py-4 px-4 border-0 border-solid bg-white rounded-md font-bold"
              }
            >
              Checkout
            </div>

            <div
              className={
                "flex items-center justify-between py-0.5 px-4 mt-2 border-0 border-solid bg-white rounded-md font-bold"
              }
            >
              <h4>Shipping Information</h4>
              <button
                className={"p-4 bg-white border-0 cursor-pointer text-2xl"}
              >
                +
              </button>
            </div>

            <div
              className={
                "bg-white rounded-md border-0 py-1.5 px-4 mt-2 text-base"
              }
            >
              <form method="get" action="login.php">
                <h6>Basic Info</h6>

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
                      "py-3 px-6 rounded-md md:w-2/5 w-full mr-2 border border-solid border-gray-400"
                    }
                    placeholder="Street Address/Apartment Unit"
                  />
                  <input
                    type="text"
                    name="state"
                    className={
                      "py-3 px-6 rounded-md md:w-1/3 w-full mr-2 border border-solid border-gray-400"
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
                      "py-3 px-6 rounded-md w-1/2 mr-2 border border-solid border-gray-400"
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
                      "py-3 px-6 rounded-md w-1/2 bg-primary text-white md:text-base text-sm"
                    }
                    style={{ backgroundColor: "#000033" }}
                  >
                    Save and Continue
                  </button>
                  <div className={"flex items-center space-x-2"}>
                    <input type="checkbox" className={checkout.checkbox} />
                    <label>Set as default</label>
                  </div>
                </div>
              </form>
            </div>

            <div className={checkout.payment}>
              <div
                className={
                  "py-4 px-4 mt-8 border-0 border-solid bg-white rounded-md font-bold"
                }
              >
                Payment Method
              </div>

              <div
                className={
                  "flex py-7 px-4 mt-1 border-0 border-solid bg-white rounded-md font-bold"
                }
              >
                <img
                  src={require("../assets/D4a-image9.png")}
                  className={
                    "border-2 border-solid border-lightgray rounded-md my-0 mx-1.5"
                  }
                  width={"120"}
                />
                <img src={require("../assets/M2-image10.png")} width={"120"} />
                <img src={require("../assets/GooglePay.png")} width={"120"} />
              </div>
            </div>

            <div
              className={
                "py-4 px-4 mt-8 border-0 border-solid bg-white rounded-md font-bold"
              }
            >
              Shopping Summary (4)
            </div>
          </div>

          <div
            className={
              "w-full lg:w-1/3 md:w-1/2 lg:mt-0 py-0 lg:px-6 mt-6 px-0"
            }
          >
            <div className={"bg-white rounded-t-lg shadow-sm"}>
              <div className={checkout.order}>
                <div
                  className={"font-bold font text-lg pb-2.5 pl-5 pt-5 ml-0.5"}
                >
                  Order Summary
                </div>

                <div className={"flex justify-between text-gray-500"}>
                  <span className={"pl-5"}>Shipping fee</span>
                  <span className={"py-0 px-5"}>$10.70</span>
                </div>
              </div>

              <div className={"flex justify-between text-gray-500"}>
                <span className={"px-5"}>Sub total</span>
                <span className={"py-0 px-5"}>$19.00</span>
              </div>

              <div
                className={
                  "flex items-center justify-between my-2.5 mx-0 py-0 px-5"
                }
              >
                <input
                  type="text"
                  className={
                    "rounded-md py-1.5 px-[3px] border border-solid border-lightpink w-1/2 text-sm"
                  }
                  placeholder="Coupon Code"
                />
                <div className={"text-colorange flex items-center"}>
                  <i className="fas fa-gift"></i>
                  <span className={"text-colorange ml-1.5"}>My Gifts</span>
                </div>
              </div>

              <div
                className={
                  "flex justify-between py-2.5 pr-0 pl-5 font-semibold border-t border-gray-500 border-solid"
                }
              >
                Total <span className={"py-0 px-5"}>$0.00</span>
              </div>

              <div className={"pt-0 w-auto"}>
                <button
                  type="submit"
                  className={
                    "bg-blueshade text-white justify-center border-0 w-full py-2 px-6"
                  }
                  style={{ backgroundColor: "#000033" }}
                >
                  Proceed
                </button>
              </div>
            </div>

            <div
              className={
                "bg-lightgrey rounded-xl w-auto border-2 border-solid border-white text-center mt-[30px]"
              }
            >
              <div className={"text-green pt-[15px]"}>SECURED PAY</div>

              <div className={"text-gray-400 text-xs py-[15px] px-5"}>
                Every Payments are secured with Bamzi and additional security is
                ensured with Money Gauranss.
              </div>

              <div className={"flex justify-center py-2.5 px-0"}>
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/shield.png"
                  className={"w-[10%] h-1/5 p-1.5"}
                />
                <img
                  src="https://img.icons8.com/material-outlined/24/000000/recycle-sign.png"
                  className={"w-[10%] h-1/5 p-1.5"}
                />
                <img
                  src="https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/64/000000/external-payment-supermarket-photo3ideastudio-flat-photo3ideastudio.png"
                  className={"w-[10%] h-1/5 p-1.5"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
