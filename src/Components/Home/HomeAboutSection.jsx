import { t } from "i18next";
import React from "react";
import HomeAboutImage from '../../Assets/Images/AboutUsSectionImage.svg'
import { NavLink } from "react-router-dom";
const HomeAboutSection = ()=>{
    return(
        <section className="HomeAboutSection">
        
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 ServiceHomeCardTextCol HomeAboutTextCol">
                        <h3>
                        {t('who_we_are')}
                        </h3>
                        <span>
                        {t('home_about_description')}
                        </span>
                        <div className="GetNowBtnContainer">
                            <NavLink className="btn btn-danger MoreBtnDark" to="/Login">
                                {t('LearnMore')}
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 ServiceHomeCardImageCol">
                        <img src={HomeAboutImage} width="100%" alt="" />
                    </div>
                    
                </div>
                
            </div>
        </section>
    );
}
export default HomeAboutSection;