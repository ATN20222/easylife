import React, { useEffect, useState } from "react";
import ServiceHomeCard from "./ServiceHomeCard";
import CleaningServiceImage from '../../Assets/Images/CleaningService.svg';
import ElderlyCareImage from '../../Assets/Images/Elderly Care.svg';
import ChildCareImage from '../../Assets/Images/Childcare.svg';
import { t } from "i18next";
import { ServicesService } from "../../Services/Api"; // Assuming you have a Services API service file

const HomeServicesSection = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch the services from the API using the getData function
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await ServicesService.List();
                setServices(response.data); 
                console.log(response);  
                setLoading(false);
            } catch (error) {
                console.error("Error fetching services:", error);
                setLoading(false);
            }
        };
        
        getData();
    }, []);

    return (
        <section className="HomeServicesSection">
            <div className="Center HomeServicesHeader">
                <h1>{t('our_services')}</h1>
            </div>
            <div className="container">
                <div className="row Center">
                    {loading ? (
                        <p>Loading services...</p>
                    ) : (
                        services.map((service, index) => (
                            <ServiceHomeCard 
                                key={index} // Ensure each card has a unique key
                                Image={service.imageUrl || (index === 0 ? CleaningServiceImage : index === 1 ? ElderlyCareImage : ChildCareImage)} // Fallback images
                                Title={service.title} // Assuming service data contains title
                                Description={service.description} // Assuming service data contains description
                            />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default HomeServicesSection;
