import React from "react"
import styles from "../styles/prelaunch.module.css"
import { Link } from "react-router-dom"

export default function Prelaunch() {
  return (
    <div>
      <div className={"w-full my-0 mx-auto bg-bluelight min-h-screen"}>
        <div
          className={
            "flex justify-between items-center w-11/12 my-0 mx-auto py-3 px-0"
          }
        >
          <Link to="/">
            <img src={require("../assets/BAMZI.png")} width={"60"} />
          </Link>
          <div className={"mx-auto"}>
            <ul className={"flex flex-row list-none"}>
              <li>
                <a
                  className={
                    "text-#000033 py-3 px-3.5 text-base font-poppins font-bold no-underline"
                  }
                  href="#"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className={
                    "text-#000033 py-3 px-3.5 text-base font-poppins font-bold no-underline"
                  }
                  href="#"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={"grid grid-cols-2 my-10 mx-auto w-11/12 items-center"}>
          <div className={"text-center"}>
            <h1 className={"text-4xl font-semibold text-left"}>
              Get Ready, Online Stores Coming Through
            </h1>
            <p className={"text-left text-gray-500"}>
              Get awesome rewards and discounts, be the first to book your space
              in this awesome digital world. Join us on the train to greatness.
            </p>
            <div className={"w-11/12"}>
              <form
                className={"py-0 mt-4 w-full"}
                method="get"
                action="login.php"
              >
                <input
                  className={
                    "py-3 px-4 min-h-7 my-2 mx-0 rounded-3xl outline-none border-none"
                  }
                  type="text"
                  name="name"
                  className={"w-full"}
                  placeholder="Full Name"
                />

                <div className={"flex flex-row justify-between w-full"}>
                  <input
                    type="text"
                    name="email"
                    className={"w-2/3"}
                    placeholder="Email here"
                  />
                  <input
                    type="text"
                    name="industry"
                    className={"ml-4 w-1/3"}
                    placeholder="Industry"
                  />
                </div>

                <div className={"grid grid-cols-2 gap-1.5 my-2 mx-0"}>
                  <div
                    className={
                      "flex border-3 border-solid border-lightorange rounded-3xl bg-transparent items-center justify-center py-2 px-0"
                    }
                  >
                    <img
                      src={require("../assets/Icon ionic-ios-cart.png")}
                      width={"16px"}
                    />
                    <p className={"ml-1.5 text-xs text-gray-500"}>Buyer</p>
                  </div>
                  <div
                    className={
                      "bg-lightorange flex rounded-3xl items-center justify-center py-2 px-0"
                    }
                  >
                    <img
                      src={require("../assets/Icon metro-shop.png")}
                      width={"16px"}
                    />
                    <p className={"text-white"}>Seller</p>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className={
                      "bg-primary text-white py-4 px-16 my-2 mx-0 rounded-md text-center font-bold"
                    }
                    style={{ backgroundColor: "#000033" }}
                  >
                    Book your reservation
                  </button>
                </div>
              </form>
            </div>
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
