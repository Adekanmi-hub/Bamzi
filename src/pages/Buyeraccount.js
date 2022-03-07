import React from "react";
import Header from "../components/header";

export default function Buyeraccount() {
  return (
    <div>
      <div className={"bg-white w-full my-0 mx-auto"}>
        <Header items />
        
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
