import React from "react";
import ServiceHomeCard from "./ServiceHomeCard";
import CleaningServiceImage from '../../Assets/Images/CleaningService.svg'
import ElderlyCareImage from '../../Assets/Images/Elderly Care.svg'
import ChildCareImage from '../../Assets/Images/Childcare.svg'
import { t } from "i18next";
const HomeServicesSection = ()=>{
    const services = [
        {
            image: CleaningServiceImage,
            title: t('cleaning_services_title'),
            text: t('cleaning_services_text'),
        },
        {
            image: ElderlyCareImage,
            title: t('elderly_care_title'),
            text: t('elderly_care_text'),
        },
        {
            image: ChildCareImage,
            title: t('child_care_title'),
            text: t('child_care_text'),
        }
    ];
    return(
        <section className="HomeServicesSection">
            <div className="Center HomeServicesHeader">
                <h1>
                    {t('our_services')}
                </h1>
            </div>
            <div className="container">
                <div className="row Center">
                    {services.map((service)=>(
                        <ServiceHomeCard 
                            Image={service.image}
                            Ttile={service.title}
                            Description={service.text}
                        />
                    ))}
                    {/* <div className="col-lg-6 col-md-6 col-sm-6 col-10 ServiceHomeCardContainer"></div> */}
                </div>
            </div>
        </section>
    );
}
export default HomeServicesSection;