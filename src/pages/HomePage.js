import React from "react"
import Header from "../components/header"
import Section from "../components/Section"
import CarouselSlider from "../components/CarouselSlider"
import Section2 from "../components/Section2"
import FeaturedProducts from "../components/FeaturedProducts"
import FeaturedBottom from "../components/FeaturedBottom"
import Footer from "../components/footer"

const HomePage = () => {
  return (
    <div>
      <div className="bg-bgcolors">
        <Header pryNav="auth" secNav="auth" bg />
        <Section />
        <CarouselSlider />
      </div>
      <div>
        <Section2 />
        <FeaturedProducts />
        <FeaturedBottom />
        <Footer
          bgColor={"bg-primary"}
          bgC={"bg-bgcolors"}
          btnColor={"bg-secondary"}
        />
      </div>
    </div>
  )
}

export default HomePage
