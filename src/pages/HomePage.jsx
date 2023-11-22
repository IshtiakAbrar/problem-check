import React from 'react';

import Navbar from "../components/Navbar.jsx";
import HeroList from "../components/HeroList.jsx";
import {Link} from "react-router-dom";
import WorkList from "../components/WorkList.jsx";
import Footer from "../components/Footer.jsx";
import SubscribeSection from "../components/SubscribeSection.jsx";
import {StaticRouter} from "react-router-dom/server.js";
import StatList from "../components/StatList.jsx";
import FeaturedProject from "../components/FeaturedProject.jsx";

const HomePage = () => {
    let position="[background:linear-gradient(180deg,_#d7f5dc,_#d7f5dc)]"

    return (

        <div className="overflow-hidden">
            <Navbar position={position}/>
            <HeroList/>
            <WorkList/>
            <StatList/>
            <FeaturedProject/>

            <SubscribeSection/>


            <Footer/>
        </div>

    );
};

export default HomePage;