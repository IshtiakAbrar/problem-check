import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import SubscribeSection from "../components/SubscribeSection.jsx";
import TestimonialList from "../components/TestimonialList.jsx";
import TestimonialHeader from "../components/TestimonialHeader.jsx";

const TestimonialsPage = () => {
    return (
        <div>
            <Navbar/>
            <TestimonialHeader/>
            <TestimonialList/>
            <SubscribeSection/>
            <Footer/>
        </div>
    );
};

export default TestimonialsPage;