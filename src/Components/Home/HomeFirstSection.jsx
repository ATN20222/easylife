import React from "react";
import HomeImage from '../../Assets/Images/Asset 2.svg'
import { NavLink } from "react-router-dom";
import { t } from "i18next";
const HomeFirstSection = ()=>{
    return(
        <section className="HomeFirstSection">
            <div className="HomeFirstSectionContainer container">
                <div className="row">
                    <div className="col-lg-5 HomeFirstSectionTextCol">
                        <h1>
                            {t('we_help_you')}
                            <br />
                            {/* {t('easy_life')} */}
                        </h1>
                        <span>{t('home_description')}</span>
                        <div className="GoldBtnContainer">
                            <NavLink className="btn btn-danger GoldBtn" to="/Login">
                            {t('get_started')}
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <img src={HomeImage} width="100%" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HomeFirstSection;