import React from "react"
import Header from "../components/header"
import UserBody from "../components/user/UserBody"
import UserSidebar from "../components/user/UserSidebar"

export default function Buyeraccount() {
  return (
    <div className="font-poppins min-h-screen bg-gray-50">
      <Header pryNav="user" secNav="user" />

      <UserBody>
        <UserSidebar page="my-account" />

        <div className="flex justify-between bg-white lg:w-9/12 w-full lg:py-12 lg:px-16 md:py-6 md:px-8 py-3 px-4 md:rounded-r-xl shadow md:flex-row flex-col">
          <div className="bg-white py-5 mx-2 text-sm">
            <form method="get" action="login.php">
              <h6>Account Info</h6>

              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  className={
                    "rounded-md border border-solid border-gray-200"
                  }
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  name="email"
                  className={
                    "rounded-md border border-solid border-gray-200 bg-gray-200 text-black"
                  }
                  placeholder="omololadaniel@gmail.com"
                />
                <input
                  type="number"
                  name="number"
                  className={
                    "rounded-md border border-solid border-gray-200"
                  }
                  placeholder="Phone Number"
                />
                <input
                  type="number"
                  name="number"
                  className={
                    "rounded-md border border-solid border-gray-200"
                  }
                  placeholder="Date of Birth"
                />
                <input
                  type="text"
                  name="text"
                  className={
                    "rounded-md border border-solid border-gray-200"
                  }
                  placeholder="Gender"
                />
              </div>
              <div className={"flex items-center"}>
                <button
                  type="submit"
                  className={"py-2 px-20 mt-8  text-white text-sm"}
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
                    "rounded-md border border-solid border-gray-200"
                  }
                  placeholder="Old Password"
                />
                <input
                  type="text"
                  name="name"
                  className={
                    "rounded-md border border-solid border-gray-200"
                  }
                  placeholder="New Password"
                />
                <input
                  type="text"
                  name="name"
                  className={
                    "rounded-md border border-solid border-gray-200"
                  }
                  placeholder="Confirm Password"
                />
              </div>
              <div className="flex items-center">
                <button
                  type="submit"
                  className={"py-2 px-12 mt-8 text-white text-sm"}
                  style={{ backgroundColor: "#000033" }}
                >
                  Change Password
                </button>
              </div>
            </form>

            <div className="py-5 mx-0 text-sm text-blue-700">
              <h6>Deactivate Account</h6>
            </div>
          </div>
        </div>
      </UserBody>
    </div>
  )
}
