import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import SubscribeSection from "../components/SubscribeSection.jsx";
import ServiceHeader from "../components/ServiceHeader.jsx";
import AllService from "../components/AllService.jsx";




const ServicePage = () => {
    let position=" ";
    return (
        <div>
            <Navbar position={position}/>
            <ServiceHeader/>
            <AllService/>

            <SubscribeSection/>
            <Footer/>

        </div>
    );
};

export default ServicePage;