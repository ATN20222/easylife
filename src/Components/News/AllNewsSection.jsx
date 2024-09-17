import { t } from "i18next";
import React from "react";
import NewsCard from "./NewsCard";
import CleaningServiceImage from '../../Assets/Images/CleaningService.svg'
import ElderlyCareImage from '../../Assets/Images/Elderly Care.svg'
import ChildCareImage from '../../Assets/Images/Childcare.svg'
import webImage from '../../Assets/Images/webImage.png'
const AllNewsSection = ()=>{
    const news = [
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
    return(
        <section className="AllNewsSection">
            <div className="ServicesCardsTitle">
                <h1 className="">
                {t('our_latest_news')}
                </h1>
                <div className="container">
                    <div className="row Center">
                        {news.map((service)=>(
                            <NewsCard
                                Id={service.id}
                                Image={service.image}
                                Ttile={service.title}
                                Description={service.text}
                            />
                        ))}
                        {/* <div className="col-lg-6 col-md-6 col-sm-6 col-10 ServiceHomeCardContainer"></div> */}
                    </div>
            </div>
            </div>
        </section>
    );
}
export default AllNewsSection;