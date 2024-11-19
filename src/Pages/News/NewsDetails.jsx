import React, { useEffect, useState } from "react";
import './News.css'
import { t } from "i18next";
import ElderlyCareImage from '../../Assets/Images/Elderly Care.svg'
import ChildCareImage from '../../Assets/Images/Childcare.svg'
import webImage from '../../Assets/Images/webImage.png'
import { useParams } from "react-router-dom";
import { NewsService } from "../../Services/Api";
const NewsDetails = ()=>{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [loading , setLoading] = useState(false);
    const { id } = useParams();

    // const news = [
    //     {
    //         id:1,
    //         image: webImage,
    //         title: 'Our New Website',
    //         text: 'Lunching our new website to order a service and reservations online.',
    //     },
    //     {
    //         id:2,
    //         image: ElderlyCareImage,
    //         title: t('elderly_care_title'),
    //         text: t('elderly_care_text'),
    //     },
    //     {
    //         id:3,
    //         image: ChildCareImage,
    //         title: t('child_care_title'),
    //         text: t('child_care_text'),
    //     }
    // ];

    // useEffect(()=>{
    //     var n = news.find(r=>r.id == id);
    //     setTitle(n.title);
    //     setImage(n.image);
    //     setDescription(n.text);
    // },[]);


    useEffect(() => {
        getNewsData();
    }, []);

    const getNewsData = async () => {
        try {
            const response = await NewsService.GetById(id);
            setImage(response.data[0].imageUrl);
            setDescription(response.data[0].description);
            setTitle(response.data[0].title); 
            
        } catch (error) {
            console.error("Error fetching news:", error);
            setLoading(false);  
        }
    };
    if (loading) {
        return <div>Loading...</div>;  
    }


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