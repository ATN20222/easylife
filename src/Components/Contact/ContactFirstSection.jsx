import React from "react";
import ContactImage from '../../Assets/Images/Contact.svg'
import { Link, NavLink } from "react-router-dom";
import { t } from "i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
const ContactFirstSection = ()=>{
    return(
        <section className="HomeFirstSection">
            <div className="HomeFirstSectionContainer container">
                <div className="row">
                    <div className="col-lg-6 HomeFirstSectionTextCol">
                        <h1>
                            {t('contact_title')}
                            <br />
                            {/* {t('easy_life')} */}
                        </h1>
                        <span>{t('contact_description')}</span>
                        <div className="SocialContactLinks">
                            <Link to='#' target="blank"><FontAwesomeIcon icon={faFacebook}/></Link>
                            <Link to='#' target="blank"><FontAwesomeIcon icon={faWhatsapp}/></Link>
                            <Link to='#' target="blank"><FontAwesomeIcon icon={faInstagram}/></Link>
                            <Link to='#' target="blank"><FontAwesomeIcon icon={faXTwitter}/></Link>
                        </div>
                        {/* <div className="GoldBtnContainer">
                            <NavLink className="btn btn-danger GoldBtn" to="/Login">
                            {t('get_started')}
                            </NavLink>
                        </div> */}
                    </div>
                    <div className="col-lg-6">
                        <img src={ContactImage} width="100%" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ContactFirstSection;