import React, { useEffect, useState } from "react";
import './News.css'
import { t } from "i18next";
import ElderlyCareImage from '../../Assets/Images/Elderly Care.svg'
import ChildCareImage from '../../Assets/Images/Childcare.svg'
import webImage from '../../Assets/Images/webImage.png'
import { useParams } from "react-router-dom";
const NewsDetails = ()=>{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const { id } = useParams();

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

    useEffect(()=>{
        var n = news.find(r=>r.id == id);
        setTitle(n.title);
        setImage(n.image);
        setDescription(n.text);
    },[]);
    return(
        <div className="NewsDetails">
            <section className="HomeFirstSection">
            <div className="HomeFirstSectionContainer container">
                <div className="row">
                    <div className="col-lg-6 HomeFirstSectionTextCol">
                        <h1>
                            {title}
                            <br />
                            {/* {t('easy_life')} */}
                        </h1>
                        <span className="NewsDescription">{description}</span>
                        {/* <div className="GoldBtnContainer">
                            <NavLink className="btn btn-danger GoldBtn" to="/Login">
                            {t('get_started')}
                            </NavLink>
                        </div> */}
                    </div>
                    <div className="col-lg-6">
                        <img src={image} width="100%" alt="" />
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}
export default NewsDetails;