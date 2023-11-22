import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import SubscribeSection from "../components/SubscribeSection.jsx";
import WorkList from "../components/WorkList.jsx";
import AllProject from "../components/AllProject.jsx";
import ProjectHeader from "../components/ProjectHeader.jsx";


const ProjectsPage = () => {
    let position=" ";
    return (
        <div>
        <Navbar position={position}/>
            <ProjectHeader/>
            <AllProject/>
            <SubscribeSection/>
        <Footer/>
        </div>
    );
};

export default ProjectsPage;