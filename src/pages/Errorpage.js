import React from "react"
import styles from "../styles/errorpage.module.css"
import { Link } from "react-router-dom"
import { IoIosWarning } from "react-icons/io"

export default function Errorpage() {
  return (
    <div>
      <div className={"w-full my-0 mx-auto h-screen bg-bluelight"}>
        <div className={"py-5 px-12"}>
          <Link to="/">
            <img src={require("../assets/BAMZI.png")} width={"60"} />
          </Link>
        </div>

        <div className={"flex my-10 mx-auto py-12 px-20 justify-between items-center mt-0"}>
          <div className={"w-1/2 pl-16 bg-contain bg-left bg-no-repeat bg-errorbg"}> 
            <div>
              <h1 className={"text-right text-3xl text-gray-500 mx-auto"}>Page Not Found</h1>
            </div>

            <div className={"flex justify-center items-start text-[#f6da8b]"}>
              <img src={require("../assets/Cart404.png")} className={"w-[400px]"} />
            </div>
          </div>

          <div className={"bg-errorbg bg-no-repeat bg-right bg-contain w-1/2 pr-16 items-center"}>
            <div className={"flex flex-col text-gray-500 py-0 px-6"}>
              <span className={"inline-block"}>
                <IoIosWarning size={24} color={"#f1a79c"} style={{display: "inline-block"}}/> OOPs!!! Looks like the page you are looking for is not available
                or is missing, kindly contact us for any further problem.
              </span>

              <button className={"bg-primary text-white py-4 px-0 w-full text-center font-bold mt-4 rounded-lg"}>Go to Homepage</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
