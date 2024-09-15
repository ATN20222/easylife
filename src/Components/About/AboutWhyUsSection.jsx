import React from "react";
import WhyUsImage from '../../Assets/Images/AboutwhyChoose.svg'
import { NavLink } from "react-router-dom";
import { t } from "i18next";
const AboutWhyUsSection = ()=>{
    return(
        <section className="HomeFirstSection">
            <div className="HomeFirstSectionContainer container">
                <div className="row">
                    <div className="col-lg-6 HomeFirstSectionTextCol">
                        <h1>
                            {t('why_choose_us')}
                            <br />
                            {/* {t('easy_life')} */}
                        </h1>
                        <span>
                            <ul>
                                <li>{t('why_choose_us_description_1')}</li>
                                <li>{t('why_choose_us_description_2')}</li>
                                <li>{t('why_choose_us_description_3')}</li>
                                <li>{t('why_choose_us_description_4')}</li>
                            </ul>
                        </span>
                        {/* <div className="GoldBtnContainer">
                            <NavLink className="btn btn-danger GoldBtn" to="/Login">
                            {t('get_started')}
                            </NavLink>
                        </div> */}
                    </div>
                    <div className="col-lg-6">
                        <img src={WhyUsImage} width="100%" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default AboutWhyUsSection;