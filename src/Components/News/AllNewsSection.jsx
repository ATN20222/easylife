import { t } from "i18next";
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import CleaningServiceImage from '../../Assets/Images/CleaningService.svg'
import ElderlyCareImage from '../../Assets/Images/Elderly Care.svg'
import ChildCareImage from '../../Assets/Images/Childcare.svg'
import webImage from '../../Assets/Images/webImage.png'
import { NewsService } from "../../Services/Api"; 

const AllNewsSection = () => {
    const [news, setNews] = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getNewsData();
    }, []);

    const getNewsData = async () => {
        try {
            const response = await NewsService.List();
            setNews(response.data); 
            setLoading(false);
        } catch (error) {
            console.error("Error fetching news:", error);
            setLoading(false);  
        }
    };

    const data = [
        {
            id:1,
            image: webImage,
            title: 'Our New Website',
            text: 'Lunching our new website to order a service and reservations online.',
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

    if (loading) {
        return <div>Loading...</div>;  // Display loading message while data is being fetched
    }

    return (
        <section className="AllNewsSection mb-5">
            <div className="ServicesCardsTitle">
                <h1>{t('our_latest_news')}</h1>
            </div>
            <div className="container">
                <div className="row Center">
                    {news.map((newsItem) => (
                        <NewsCard
                            key={newsItem.id}
                            Id={newsItem.id}
                            Image={newsItem.imageUrl || webImage} 
                            Ttile={newsItem.title}
                            Description={newsItem.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllNewsSection;
