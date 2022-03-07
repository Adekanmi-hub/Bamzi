import React from 'react'
import Header from "../components/header";
import Section from "../components/pages/Section";
import CarouselSlider from "../components/pages/CarouselSlider";
import Section2 from "../components/pages/Section2";
import FeaturedProducts from "../components/pages/FeaturedProducts";
import FeaturedBottom from "../components/pages/FeaturedBottom";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <div>
      <div className="bg-bgcolors">
        <Header items pri sec bg />
        <Section />
        <CarouselSlider />
      </div>
      <div>
        <Section2 />
        <FeaturedProducts />
        <FeaturedBottom />
        <Footer bgColor={'bg-primary'} bgC={'bg-bgcolors'} btnColor={'bg-secondary'} />
      </div>
    </div>
  );
};

export default HomePage;
