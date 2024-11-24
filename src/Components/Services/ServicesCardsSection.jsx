import React, { useEffect, useState } from "react";
import { t } from "i18next";
import { ServicesService } from "../../Services/Api";  // Import your service API
import CleaningServiceImage from "../../Assets/Images/CleaningService.svg";
import ElderlyCareImage from "../../Assets/Images/Elderly Care.svg";
import ChildCareImage from "../../Assets/Images/Childcare.svg";
import ServiceCard from "./ServiceCard";

const ServicesCardsSection = () => {
    const [services, setServices] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const data = [
        {
            id:1,
            image: CleaningServiceImage,
            title: t('cleaning_services_title'),
            text: t('cleaning_services_text'),
        },
        {
            id:2,
            image: ElderlyCareImage,
            title: t('elderly_care_title'),
            text: t('elderly_care_text'),
        },
        {            
            id:3,
            image: ChildCareImage,
            title: t('child_care_title'),
            text: t('child_care_text'),
        }
    ];

    useEffect(() => {
        getServicesData();
    }, []);

    const getServicesData = async () => {
        try {
            const response = await ServicesService.List(); 
            console.log(response);
            setServices(response.data); 
            setLoading(false);
        } catch (error) {
            console.error("Error fetching services:", error);
            setLoading(false);  
        }
    };

    if (loading) {
        return <div>Loading...</div>;  
    }

    return (
        <section className="ServicesCardsSection">
            <div className="ServicesCardsTitle">
                <h1 className="">{t("choose_your_service")}</h1>
            </div>
            <div className="container">
                <div className="row Center">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id} 
                            Id={service.id}
                            Image={service.imageUrl || (service.id === 1 ? CleaningServiceImage : service.id === 2 ? ElderlyCareImage : ChildCareImage)} // Default image handling
                            Title={service.name}
                            Description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesCardsSection;
