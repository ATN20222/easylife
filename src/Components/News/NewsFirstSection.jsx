import React from "react";
import NewsImage from '../../Assets/Images/OurNews.svg'
import { NavLink } from "react-router-dom";
import { t } from "i18next";
const NewsFirstSection = ()=>{
    return(
        <section className="HomeFirstSection">
            <div className="HomeFirstSectionContainer container">
                <div className="row">
                    <div className="col-lg-6 HomeFirstSectionTextCol">
                        <h1>
                            {t('our_news')}
                            <br />
                            {/* {t('easy_life')} */}
                        </h1>
                        <span>{t('our_news_description')}</span>
                        {/* <div className="GoldBtnContainer">
                            <NavLink className="btn btn-danger GoldBtn" to="/Login">
                            {t('get_started')}
                            </NavLink>
                        </div> */}
                    </div>
                    <div className="col-lg-6">
                        <img src={NewsImage} width="100%" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default NewsFirstSection;