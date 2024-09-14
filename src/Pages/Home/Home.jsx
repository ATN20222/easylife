import React from "react";
import './Home.css'
import HomeFirstSection from "../../Components/Home/HomeFirstSection";
import HomeServicesSection from "../../Components/Home/HomeServicesSection";
const Home = ()=>{
    return(
        <div className="Home">
            <HomeFirstSection/>
            <HomeServicesSection/>
        </div>
    );
}
export default Home;