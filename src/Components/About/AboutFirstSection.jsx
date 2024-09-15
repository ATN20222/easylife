import React from "react";
import OurStoryImage from '../../Assets/Images/AbourOurStoryImage.svg'
import { NavLink } from "react-router-dom";
import { t } from "i18next";
const AboutFirstSection = ()=>{
    return(
        <section className="HomeFirstSection">
            <div className="HomeFirstSectionContainer container">
                <div className="row">
                    <div className="col-lg-7 HomeFirstSectionTextCol">
                        <h1>
                            {t('our_story')}
                            <br />
                            {/* {t('easy_life')} */}
                        </h1>
                        <span>{t('our_story_description')}</span>
                        {/* <div className="GoldBtnContainer">
                            <NavLink className="btn btn-danger GoldBtn" to="/Login">
                            {t('get_started')}
                            </NavLink>
                        </div> */}
                    </div>
                    <div className="col-lg-5">
                        <img src={OurStoryImage} width="100%" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default AboutFirstSection;