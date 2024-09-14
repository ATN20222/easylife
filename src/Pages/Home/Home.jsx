import React from "react";
import './Home.css'
import HomeFirstSection from "../../Components/Home/HomeFirstSection";
import HomeServicesSection from "../../Components/Home/HomeServicesSection";
import HomeAboutSection from "../../Components/Home/HomeAboutSection";
import HomeHowItWorksSection from "../../Components/Home/HomeHowItWorksSection";
const Home = ()=>{
    return(
        <div className="Home">
            <HomeFirstSection/>
            <HomeServicesSection/>
            <HomeAboutSection/>
            <HomeHowItWorksSection/>
        </div>
    );
}
export default Home;