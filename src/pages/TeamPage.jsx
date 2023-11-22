import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import SubscribeSection from "../components/SubscribeSection.jsx";
import TeamMember from "../components/TeamMember.jsx";
import TeamHeader from "../components/TeamHeader.jsx";

const TeamPage = () => {
    return (
        <div>
            <Navbar/>
            <TeamHeader/>


            <TeamMember/>

            <SubscribeSection/>
            <Footer/>
        </div>
    );
};

export default TeamPage;