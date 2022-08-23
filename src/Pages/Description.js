import React from 'react'
import Footer from '../Components/Description/Footer';
import Navbar from '../Components/Description/Navbar';
import Section1 from '../Components/Description/Section1';
import Section2 from '../Components/Description/Section2';
import Section3 from '../Components/Description/Section3';

export const Description = () => {
    return (
        <div>
            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
        </div>
    )
};

export default Description