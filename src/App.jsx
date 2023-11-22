import React from 'react';
//import Navbar from "./components/Navbar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import TestimonialsPage from "./pages/TestimonialsPage.jsx";

const App = () => {
    return (
        <div className="text-xl  font-poppins">
            <BrowserRouter>

                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>

                    <Route path={"/projects"} element={<ProjectsPage/>}/>
                    <Route path={"/service"} element={<ServicePage/>}/>
                    <Route path={"/team"} element={<TeamPage/>}/>
                    <Route path={"/testimonials"} element={<TestimonialsPage/>}/>
                </Routes>

            </BrowserRouter>

        </div>
    );
};

export default App;