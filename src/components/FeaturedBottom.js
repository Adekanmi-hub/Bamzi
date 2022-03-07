import image14 from "../assets/D1-image6.png"
const FeaturedBottom = () => {
  return (
    <div className="bg-bgcolors sm:px-16 lg:px-24 xl:px-28 mt-28">
      <div className="flex">
        <div className="">
          <div className="text-primary font-bold sm:text-2xl lg:text-4xl xl:text-5xl py-10">
            Find your <span className="text-secondary">favourite</span> online
            store on the go anytime anywhere.
          </div>
          <div className="py-6">
            <button className="text-white sm:py-3 sm:px-8 lg:py-4 lg:px-14 text-lg font-bold border rounded-xl bg-primary">
              Go Shopping
            </button>
          </div>
        </div>
        <div className="relative top-3">
          <img src={image14} alt="" className="" />
        </div>
      </div>
    </div>
  )
}

export default FeaturedBottom
