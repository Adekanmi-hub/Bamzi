import React, { useState } from "react"
import styles from "../styles/prelaunch.module.css"
import axios from "axios"
import Header from "../components/header"

export default function Prelaunch() {
  const url = "http://localhost:3030/bamzi/reservation"
  const [data, setData] = useState({
    name: "",
    email: "",
    industry: "",
  })
  const [designation, setDesignation] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post(url, {
        name: data.name,
        email: data.email,
        industry: data.industry,
        designation: designation,
      })
      .then(res => {
        console.log(res)
      })
    setData({
      name: "",
      email: "",
      industry: "",
    })
    setDesignation("")
  }

  const onInputChange = e => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }

  return (
    <div className="font font-poppins ">
      <div className={"w-full my-0 mx-auto bg-bluelight min-h-screen"}>
        <div className={'flex  items-center justify-between  md:pr-6 lg:pr-24 pr-4 lg:py-2 "'}>
          <Header bg />
          <div className={'flex font-bold space-x-4 text-lg'}>
            <div>Contact Us</div>
            <div>Features</div>
          </div>
        </div>
        

        <div
          className={
            "lg:grid grid-cols-2 flex flex-col py-8 md:px-16 px-6 w-full items-center"
          }
        >
          <div className={"text-center"}>
            <h1
              className={
                "sm:text-4xl text-2xl text-primary font-bold text-left"
              }
            >
              Get Ready, Online Stores Coming Through
            </h1>
            <p className={"text-left text-gray-500 mt-2 sm:text-base text-sm"}>
              Get awesome rewards and discounts, be the first to book your space
              in this awesome digital world. Join us on the train to greatness.
            </p>

            <form
              className={"py-0 mt-4 lg:w-11/12 w-full"}
              onSubmit={e => handleSubmit(e)}
            >
              <input
                className={
                  "py-3 px-4 min-h-7 my-2 mx-0 rounded-3xl outline-none border-none w-full"
                }
                type="text"
                id="name"
                value={data.name}
                placeholder="Full Name"
                onChange={e => onInputChange(e)}
              />

              <div className={"flex flex-row justify-between w-full"}>
                <input
                  type="text"
                  id="email"
                  value={data.email}
                  className={"sm:w-2/3 w-1/2"}
                  placeholder="Email here"
                  onChange={e => onInputChange(e)}
                />
                <input
                  type="text"
                  id="industry"
                  value={data.industry}
                  className={"ml-2 sm:w-1/3 w-1/2"}
                  placeholder="Industry"
                  onChange={e => onInputChange(e)}
                />
              </div>

              <div className={"grid grid-cols-2 gap-1.5 my-2 mx-0"}>
                <div
                  className={
                    "flex cursor-pointer border-2 border-lightorange rounded-3xl bg-transparent items-center justify-center py-2 px-0"
                  }
                  onClick={() => {
                    setDesignation("Buyer")
                    console.log(designation)
                  }}
                >
                  <img
                    src={require("../assets/Icon ionic-ios-cart.png")}
                    width={"16px"}
                  />
                  <p className={"ml-1.5 text-sm text-gray-500"}>Buyer</p>
                </div>
                <div
                  className={
                    "bg-lightorange flex cursor-pointer rounded-3xl items-center justify-center py-2 px-0"
                  }
                  onClick={() => {
                    setDesignation("Seller")
                    console.log(designation)
                  }}
                >
                  <img
                    src={require("../assets/Icon metro-shop.png")}
                    width={"16px"}
                  />
                  <p className={"text-white ml-1.5 text-sm"}>Seller</p>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={
                    "bg-primary text-white py-4 sm:px-16 px-0 my-2 mx-0 rounded-md text-center font-bold sm:w-auto w-full"
                  }
                  style={{ backgroundColor: "#000033" }}
                  onClick={e => handleSubmit(e)}
                >
                  Book your reservation
                </button>
              </div>
            </form>
          </div>

          <div className={styles.jumboImage}>
            <img
              src={require("../assets/Mask.png")}
              className={"object-cover max-w-full h-auto"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
