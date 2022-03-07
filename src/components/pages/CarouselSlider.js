import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import image13 from "../../assets/D1-image3.png"

export default function CarouselSlider() {
  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows showArrows autoPlay centerMode showStatus={false} showThumbs={false} centerSlidePercentage={20}>
        <div className="px-8 w-48">
          <img src={image13} alt="" className="" />
          <h5 className="text-sm pt-2 text-center font-bold text-gray-600">
            Phones
          </h5>
        </div>
        <div className="px-8 w-48">
          <img src={image13} alt="" className="" />
          <h5 className="text-sm pt-2 text-center font-bold text-gray-600">
            Watch
          </h5>
        </div>
        <div className="px-8 w-48">
          <img src={image13} alt="" className="" />
          <h5 className="text-sm pt-2 text-center font-bold text-gray-600">
            Watch
          </h5>
        </div>
        <div className="px-8 w-48">
          <img src={image13} alt="" className="" />
          <h5 className="text-sm pt-2 text-center font-bold text-gray-600">
            Watch
          </h5>
        </div>
        <div className="px-8 w-48">
          <img src={image13} alt="" className="" />
          <h5 className="text-sm pt-2 text-center font-bold text-gray-600">
            Watch
          </h5>
        </div>
        <div className="px-8 w-48">
          <img src={image13} alt="" className="" />
          <h5 className="text-sm pt-2 text-center font-bold text-gray-600">
            Watch
          </h5>
        </div>
        <div className="px-8 w-48">
          <img src={image13} alt="" className="" />
          <h5 className="text-sm pt-2 text-center font-bold text-gray-600">
            Watch
          </h5>
        </div>
        <div className="px-8 w-48">
          <img src={image13} alt="" className="" />
          <h5 className="text-sm pt-2 text-center font-bold text-gray-600">
            Ear-Pod
          </h5>
        </div>
        <div className="px-8 w-48">
          <img src={image13} alt="" className="" />
          <h5 className="text-sm pt-2 text-center font-bold text-gray-600">
            Dell Laptop
          </h5>
        </div>
        <div className="px-8 w-48">
          <img src={image13} alt="" className="" />
          <h5 className="text-sm pt-2 text-center font-bold text-gray-600">
            Camera Len
          </h5>
        </div>
      </Carousel>
    </div>
  )
}
