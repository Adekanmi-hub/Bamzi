import React from "react"
import { Link } from "react-router-dom"

export default function Buyeraccount() {
  return (
    <div>
      <div className={"bg-white w-full my-0 mx-auto"}>
        <div className={"flex items-center py-2 px-4 bg-white justify-between"}>
          <div className={"flex items-center"}>
            <Link to="/">
              <img src={require("../assets/BAMZI.png")} width={"60"} />
            </Link>

            <ul className={"flex"}>
              <li>
                <a
                  className={
                    "text-blueshade py-0 px-2.5 text-base font-poppins font-semibold no-underline"
                  }
                  href="#"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  className={
                    "text-blueshade py-0 px-2.5 text-base font-poppins font-semibold no-underline"
                  }
                  href="#"
                >
                  Stores
                </a>
              </li>
              <li>
                <div className={"relative w-52 flex items-center"}>
                  <input
                    className={
                      "border-2 border-solid border-lightgray rounded-full py-1 px-2 w-full"
                    }
                    type="text"
                    placeholder="Search anything"
                  />
                  <svg
                    className={"absolute right-2 w-4 h-4 text-lightgray"}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex">
            <ul className={"flex flex-row list-none my-2 mx-4 items-center"}>
              <li>
                <a href="#">
                  <span className={"flex items-center ml-2"}>
                    Whishlist{" "}
                    <svg
                      className={"ml-1.5 w-6 h-6"}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={"flex items-center ml-2"}>
                    Cart{" "}
                    <svg
                      className={"ml-1.5 w-6 h-6"}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col bg-gray-200 rounded-xl w-1/5 border-2 border-solid border-gray-200 py-5 text-sm">
            <div className="w-full">
              <div className="py-2 px-4 font-semibold">Bamzi Account</div>
              <div className="py-2 px-4 font-semibold">Orders</div>
              <div className="py-2 px-4 font-semibold">Billings</div>
              <div className="py-2 px-4 font-semibold">Shipping Address</div>
            </div>
          </div>

          <div className="flex w-full justify-around border">
            <div className="bg-white py-5 mx-2 text-sm">
              <form method="get" action="login.php">
                <h6>Account Info</h6>

                <div className="flex flex-col">
                  <input
                    type="text"
                    name="name"
                    className={
                      "py-2 px-6 rounded-md border border-solid border-gray-200"
                    }
                    placeholder="Full Name"
                  />
                  <input
                    type="text"
                    name="email"
                    className={
                      "py-2 px-6 rounded-md border border-solid border-gray-200 bg-gray-200 text-black"
                    }
                    placeholder="omololadaniel@gmail.com"
                  />
                  <input
                    type="number"
                    name="number"
                    className={
                      " py-2 px-6 rounded-md border border-solid border-gray-200"
                    }
                    placeholder="Phone Number"
                  />
                  <input
                    type="number"
                    name="number"
                    className={
                      " py-2 px-6 rounded-md border border-solid border-gray-200"
                    }
                    placeholder="Date of Birth"
                  />
                  <input
                    type="text"
                    name="text"
                    className={
                      "w-1/12 py-2 px-6 rounded-md border border-solid border-gray-200"
                    }
                    placeholder="Gender"
                  />
                </div>
                <div className={"flex items-center"}>
                  <button
                    type="submit"
                    className={"py-2 px-6 mt-8  text-white text-sm"}
                    style={{ backgroundColor: "#000033" }}
                  >
                    Save Info
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white py-5 mx-2 text-sm">
              <form method="get" action="login.php">
                <h6>Change Password</h6>

                <div className="flex flex-col">
                  <input
                    type="text"
                    name="name"
                    className={
                      " py-2 px-6 rounded-md border border-solid border-gray-200"
                    }
                    placeholder="Old Password"
                  />
                  <input
                    type="text"
                    name="name"
                    className={
                      " py-2 px-6 rounded-md border border-solid border-gray-200"
                    }
                    placeholder="New Password"
                  />
                  <input
                    type="text"
                    name="name"
                    className={
                      " py-2 px-6 rounded-md border border-solid border-gray-200"
                    }
                    placeholder="Confirm Password"
                  />
                </div>
                <div className={"flex items-center"}>
                  <button
                    type="submit"
                    className={"py-2 px-6 mt-8  text-white text-sm"}
                    style={{ backgroundColor: "#000033" }}
                  >
                    Change Password
                  </button>
                </div>
              </form>

              <div className="py-5 mx-6 text-sm">
                <h6>Deactivate Account</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
