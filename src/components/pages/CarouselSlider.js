import React from "react";
import { Carousel } from "react-responsive-carousel";
import image13 from "../../assets/D1-image3.png";
import image4 from "../../assets/D1-image.png";

const CarouselSlider = () => {
  return (
    <Carousel axis="horizontal" autoPlay={true} centerMode={true} centerSlidePercentage={30}>
      <div class="px-8 w-48">
        <img
          src={image13}
          alt=""
          class="w-32 h-32 xl:w-40 xl:h-40 feature-images"
        />
        <h5 class="text-sm pt-2 text-center font-bold text-gray-600">Phones</h5>
      </div>
      <div class="px-8 w-48">
        <img
          src={image4}
          alt=""
          class="w-32 h-32 xl:w-40 xl:h-40 feature-images"
        />
        <h5 class="text-sm pt-2 text-center font-bold text-gray-600">Watch</h5>
      </div>
      <div class="px-8 w-48">
        <img
          src={image13}
          alt=""
          class="w-32 h-32 xl:w-40 xl:h-40 feature-images"
        />
        <h5 class="text-sm pt-2 text-center font-bold text-gray-600">
          Ear-Pod
        </h5>
      </div>
      <div class="px-8 w-48">
        <img
          src={image4}
          alt=""
          class="w-32 h-32 xl:w-40 xl:h-40 feature-images"
        />
        <h5 class="text-sm pt-2 text-center font-bold text-gray-600">
          Dell Laptop
        </h5>
      </div>
      <div class="px-8 w-48">
        <img
          src={image13}
          alt=""
          class="w-32 h-32 xl:w-40 xl:h-40 feature-images"
        />
        <h5 class="text-sm pt-2 text-center font-bold text-gray-600">
          Camera Len
        </h5>
      </div>
    </Carousel>
  );
};

export default CarouselSlider;
