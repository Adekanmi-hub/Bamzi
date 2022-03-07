import React, { useState } from "react"
import { FcGoogle } from "react-icons/fc"
import { RiFacebookBoxFill } from "react-icons/ri"
import { RiMailUnreadLine } from "react-icons/ri"
import { FaMailBulk } from "react-icons/fa"
import Sidebar from "../components/sidebar"
import SellersHeader from "../components/SellersHeader"

export default function Marketing() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="font-poppins lg:grid lg:grid-cols-6  min-h-screen relative">
      <Sidebar showSidebar={showSidebar} page="marketing" />

      <div className="col-span-5 bg-gray-100 px-6 py-3 lg:px-16 sm:py-8">
        <SellersHeader
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />

        <div className="flex flex-col space-y-1 w-4/5 mt-10">
          <p className="text-xl font-bold">Marketing</p>
          <p className="text-gray-600 text-xs ">
            Every products needs a customer. Use the best marketing practices to
            acquire new customers, raise the average order value, and keep
            buyers coming back for more.
          </p>
        </div>

        <div className="flex mt-6 w-full lg:flex-row flex-col">
          <div className="lg:w-3/12 w-full pr-2">
            <p className="text-sm mb-2 font-semibold">Get more traffic</p>
            <p className="text-gray-600 text-xs">
              Start an advertising campaign to reach your target audience and
              get more traffic into your store.
            </p>
          </div>

          <div className="flex flex-col lg:w-9/12 w-full space-y-4 mt-2">
            <div className="flex py-2 px-4 border border-solid rounded-md items-center bg-white w-full justify-center shadow">
              <span className="w-1/12 flex justify-center">
                <FcGoogle size={24} />
              </span>

              <div className="flex flex-col space-y-1.5 px-2 py-1 w-8/12">
                <h1 className="text-sm font-semibold">
                  Advertise across Google
                </h1>

                <p className="text-gray-600 text-xs">
                  Advertise your products to people who have displayed interest in similar products. Launch an automated ad campaign in 5 minutes right from store&apos;s dashboard
                </p>
              </div>

              <button className="bg-blue-500 py-2 w-3/12 text-xs text-white rounded text-center">
                Get Started
              </button>
            </div>

            <div className="flex py-2 px-4 border border-solid rounded-md items-center bg-white w-full justify-center shadow">
              <span className="w-1/12 flex justify-center">
                <RiFacebookBoxFill size={24} color={"#6366F1"} />
              </span>

              <div className="flex flex-col space-y-1.5 px-2 py-1 w-8/12">
                <h1 className="text-sm font-semibold">
                  Promote and Sell on Facebook
                </h1>

                <p className="text-gray-600 text-xs">
                  Connect with Facebook to get your very own Facebook Shop and
                  launch an ad campaign to show your products in newsfeed of
                  potential customers.
                </p>
              </div>

              <button className="bg-blue-500 text-xs text-white py-2 w-3/12 rounded text-center">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="flex mt-6 w-full lg:flex-row flex-col">
          <div className="lg:w-3/12 pr-2">
            <p className="text-sm font-semibold mb-2">Make customers loyal</p>
            <p className="text-gray-600 text-xs">
              Engage past customers to build loyalty and have them return as
              repeat buyers.
            </p>
          </div>

          <div className="flex flex-col lg:first-letter:w-9/12 space-y-4 mt-2">
            <div className="flex py-2 px-4 border border-solid rounded-md items-center bg-white w-full justify-center shadow">
              <span className="w-1/12 flex justify-center">
                <RiMailUnreadLine size={24} color={"#FBBF24"} />
              </span>

              <div className="flex flex-col space-y-1.5 px-2 py-1 w-8/12">
                <h1 className="text-sm font-semibold">
                  Retain customers with automated emails
                </h1>

                <p className="text-gray-600 text-xs">
                  Automated marketing emails remind customers of the products they liked, offer related goods, personal discounts, and more.The emails are sent in response to customers&apos; actions and timely encourage them to come back and buy.
                </p>
              </div>

              <button className="bg-blue-500 text-xs text-white py-2 w-3/12 rounded text-center">
                Manage Emails
              </button>
            </div>

            <div className="flex py-2 px-4 border border-solid rounded-md items-center bg-white w-full justify-center shadow">
              <span className="w-1/12 flex justify-center">
                <FaMailBulk size={24} color={"#FBBF24"} />
              </span>

              <div className="flex flex-col space-y-1.5 px-2 py-1 w-8/12">
                <h1 className="text-sm font-semibold">
                  Engaged customers with emails newsletters
                </h1>

                <p className="text-gray-600 text-xs">
                  Send out newsletters promoting new arrivals, discounts and
                  special offers to convert first-time customers to repeat
                  buyers.
                </p>
              </div>

              <button className="bg-blue-500 text-xs text-white py-2 w-3/12 rounded text-center">
                Create Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
