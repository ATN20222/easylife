import React from "react";
import './Services.css'
import ServicesFirstSection from "../../Components/Services/ServicesFirstSection";
import ServicesCardsSection from "../../Components/Services/ServicesCardsSection";
const Services = ()=>{
    return(
        <div className="Services">
            <ServicesFirstSection/>
            <ServicesCardsSection/>
        </div>
    );
}
export default Services;