import { t } from "i18next";
import React from "react";
import HomeHowImage from '../../Assets/Images/HowItWorksSectionImage.svg'
import { NavLink } from "react-router-dom";
const HomeHowItWorksSection = ()=>{
    return(
        <section className="HomeHowItWorksSection">
        
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 ServiceHomeCardImageCol">
                        <img src={HomeHowImage} width="100%" alt="" />
                    </div>
                    <div className="col-lg-6 ServiceHomeCardTextCol">
                        <h3>
                        {t('how_it_works_title')}
                        </h3>
                        <span>
                            <ul>
                                <li>{t('choose_a_service')}</li>
                                <li>{t('make_a_booking')}</li>
                                <li>{t('relax_and_enjoy')}</li>
                            </ul>
                        </span>
                        <div className="GetNowBtnContainer">
                            <NavLink className="btn btn-danger GoldBtn" to="/Login">
                            {t('book_now')}
                            </NavLink>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
        </section>
    );
}
export default HomeHowItWorksSection;