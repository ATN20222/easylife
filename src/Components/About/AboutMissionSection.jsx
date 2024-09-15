import React from "react";
import OurMissionImage from '../../Assets/Images/AboutOurMission.svg'
import { NavLink } from "react-router-dom";
import { t } from "i18next";
const AboutMissionSection = ()=>{
    return(
        <section className="HomeFirstSection AboutMissionSection">
            <div className="HomeFirstSectionContainer container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={OurMissionImage} width="100%" alt="" />
                    </div>
                    <div className="col-lg-6 HomeFirstSectionTextCol">
                        <h1>
                            {t('our_mission')}
                            <br />
                            {/* {t('easy_life')} */}
                        </h1>
                        <span>{t('our_mission_description')}</span>
                        {/* <div className="GoldBtnContainer">
                            <NavLink className="btn btn-danger GoldBtn" to="/Login">
                            {t('get_started')}
                            </NavLink>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default AboutMissionSection;