import React from "react"
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa"

export default function Footer({ bgColor, btnColor }) {
  return (
    <footer className="text-white text-left mt-10">
      {/**contact us */}
      <div
        className={`${bgColor} w-full md:w-3/4 lg:w-1/2 grid md:grid-cols-2 items-center md:rounded-xl md:mx-auto py-6 px-8 relative md:-mb-12`}
      >
        <div>
          <h5 className="text-lg font-semibold">Contact Us!</h5>
          <p className="text-sm font-light mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <form action="">
          <div className="relative flex items-center mt-4 md:mt-0">
            <input
              type="text"
              name="email"
              className="py-3 px-4 rounded-3xl border-none w-full placeholder:text-gray-500 text-black"
              placeholder="Email here"
              autoComplete="off"
              aria-label="Email here"
            />
            <button
              className={`${btnColor} rounded-3xl py-2 px-6 absolute right-1`}
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/**main footer */}
      <div className="w-full bg-darkGray">
        <section className="md:container md:mx-auto px-6 pt-8 md:pt-24 pb-8">
          <div className="grid gap-y-6 grid-cols-2 md:grid-cols-4 text-sm">
            <div>
              <a href="/">
                <img
                  src={require("../assets/BAMZI.png")}
                  width={"60px"}
                  alt="bamzi"
                />
              </a>
              <div className="flex space-x-2 lg:space-x-4 mt-8">
                <a
                  href="#!"
                  className="text-gray-400 hover:text-white rounded-full ring-2 ring-gray-400 hover:ring-white p-1"
                >
                  <FaFacebookF size={12} />
                </a>
                <a
                  href="#!"
                  className="text-gray-400 hover:text-white rounded-full ring-2 ring-gray-400 hover:ring-white p-1 "
                >
                  <FaTwitter size={12} />
                </a>
                <a
                  href="#!"
                  className="text-gray-400 hover:text-white rounded-full ring-2 ring-gray-400 hover:ring-white p-1"
                >
                  <FaLinkedinIn size={12} />
                </a>
                <a
                  href="#!"
                  className="text-gray-400 hover:text-white rounded-full ring-2 ring-gray-400 hover:ring-white p-1"
                >
                  <FaPinterest size={12} />
                </a>
              </div>

              <div className="mt-4 pr-8 sm:pr-16 lg:pr-24">
                <img src={require("../assets/group.png")} alt="" />
              </div>

              {/* <div className="grid grid-cols-4 gap-x-1 gap-y-2 mt-4 pr-20">
                <img src={require("../assets/D1-image01.png")} alt="" />
                <img src={require("../assets/D1-image02.png")} alt="" />
                <img src={require("../assets/D1-image03.png")} alt="" />
                <img src={require("../assets/D1-image04.png")} alt="" />
                <img src={require("../assets/D1-image05.png")} alt="" />
                <img src={require("../assets/D1-image06.png")} alt="" />
                <img src={require("../assets/D1-image07.png")} alt="" />
                <img src={require("../assets/D1-image08.png")} alt="" />
              </div> */}
            </div>

            <div className="text-sm">
              <h6 className="font-semibold mb-6">Links</h6>
              <div className="flex flex-col space-y-2 font-light text-gray-400">
                <a href="/">Home</a>
                <a href="#!">Pricing</a>
                <a href="#!">Download</a>
                <a href="#!">About</a>
                <a href="#!">Service</a>
              </div>
            </div>

            <div>
              <h6 className="font-semibold mb-6">Support</h6>
              <div className="flex flex-col space-y-2 font-light text-gray-400">
                <a href="#!">FAQ</a>
                <a href="#!">How To</a>
                <a href="#!">Features</a>
                <a href="#!">Contact</a>
                <a href="#!">Reporting</a>
              </div>
            </div>

            <div>
              <h6 className="font-semibold mb-6">Contact Us</h6>
              <div className="flex flex-col space-y-2 font-light text-gray-400">
                <span>+880 1234 5678</span>
                <span>example@email.com</span>
                <span>Rangpur City</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}
