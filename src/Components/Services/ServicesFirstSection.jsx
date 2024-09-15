import React from "react";
import ServicesImage from '../../Assets/Images/ServicesImage.svg'
import { NavLink } from "react-router-dom";
import { t } from "i18next";
const ServicesFirstSection = ()=>{
    return(
        <section className="HomeFirstSection">
            <div className="HomeFirstSectionContainer container">
                <div className="row">
                    <div className="col-lg-6 HomeFirstSectionTextCol">
                        <h1>
                            {t('our_services')}
                            <br />
                            {/* {t('easy_life')} */}
                        </h1>
                        <span>{t('our_services_description')}</span>
                        {/* <div className="GoldBtnContainer">
                            <NavLink className="btn btn-danger GoldBtn" to="/Login">
                            {t('get_started')}
                            </NavLink>
                        </div> */}
                    </div>
                    <div className="col-lg-6">
                        <img src={ServicesImage} width="100%" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ServicesFirstSection;