import React from "react";
import AboutFirstSection from "../../Components/About/AboutFirstSection";
import AboutMissionSection from "../../Components/About/AboutMissionSection";
import './About.css'
import AboutWhyUsSection from "../../Components/About/AboutWhyUsSection";
const About = ()=>{
    return(
        <div className="About">
            <AboutFirstSection/>
            <AboutMissionSection/>
            <AboutWhyUsSection/>
        </div>
    );
}
export default About;