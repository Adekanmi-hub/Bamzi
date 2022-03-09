import image5 from "../assets/Group 11581.png"
import image6 from "../assets/day78-wallet.png"
import image7 from "../assets/day77-pocket-knief.png"
import image8 from "../assets/day80-tea.png"
import image9 from "../assets/M2-image2.png"

const Section2 = () => {
  return (
    <>
      <div className="rightbg-image">
        <div className="md:flex lg:flex flex-row">
          <div className="w-1/2 left-image">
            <img src={image5} alt="" className="pl-32" />
          </div>
          <div className="md:flex-col md:flex justify-center px-12 w-1/2">
            <div className="font-bold sm:mt-16 lg:mt-24 sm:text-xl lg:text-4xl">
              Get your Store online
            </div>
            <div className="sm:text-md lg:text-xl mt-4 text-gray-400">
              Every Product deserves a digital presence. Create your store from
              Bamzi and have a wide reach of market audience. Its simple and
              flexible to use.
            </div>
            <div className="sm:text-md lg:text-lg sm:mt-6 sm:lg:mt-8 text-gray-400">
              Every Product deserves a digital presence. Create your store from
              Bamzi and have a wide reach of market audience. Its simple and
              flexible to use.
            </div>
            <div className="sm:py-6 lg:py-16">
              <button className="text-gray-400 py-2 px-10 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300">
                Get Started<ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
        <div className="py-8 my-8 sm:text-3xl lg:text-4xl font-extrabold text-center">
          Why use Bamzi
        </div>
        <div className="lg:flex px-28">
          <div className="bg-bgcolors rounded lg:pt-8">
            <img src={image6} alt="" className="" />
            <div className="text-center font-bold text-lg">Make More Money</div>
            <div className="text-gray-600 text-center sm:mx-12 lg:mx-3 pt-4 pb-6">
              Save time, avoid losing work and information,delegate, and track
              tasks to stay on schedule
            </div>
          </div>
          <div className="bg-primary rounded pt-8 my-14 mx-14">
            <img src={image7} alt="" />
            <div className="text-center text-white font-bold text-lg">
              Flexible Digital Store
            </div>
            <div className="text-white text-center sm:mx-12 lg:mx-3 px-3 pt-4 pb-6">
              Save time, avoid losing work and information,delegate, and track
              tasks to stay on schedule
            </div>
          </div>
          <div className="bg-bgcolors rounded pt-8">
            <img src={image8} alt="" />
            <div className="text-center font-bold text-lg">
              Sell products with convenience
            </div>
            <div className="text-gray-600 text-center sm:mx-12 lg:mx-3 px-3 pt-4 pb-6">
              Save time, avoid losing work and information,delegate, and track
              tasks to stay on schedule
            </div>
          </div>
        </div>
        <div className="flex px-28 mt-24">
          <div className="">
            <img src={image9} alt="" className="" />
          </div>
          <div className="px-8">
            <div className="font-bold sm:text-2xl lg:text-4xl uppercase">
              Easy store with bamzi !!!
            </div>
            <div className="text-gray-300 py-4">
              Get the best from us with flexible store customization. Easy to
              setup and mobile responsive. We make your customer closer to you
            </div>

            <div className="py-6">
              <button className="text-white sm:py-2 sm:px-8 lg:py-4 lg:px-14 sm:text-md lg:text-lg font-bold border rounded-xl bg-primary">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="py-4 mx-8 border-b-2"></div>
      </div>
    </>
  )
}

export default Section2
