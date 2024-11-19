import React from "react";
import './Footer.css'
// import Logo from '../../Assets/Images/Logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTiktok, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { t } from "i18next";
const Footer = ()=>{
    return( 
        <section className="FooterSection">
                <div className="">
                <footer>
                    <div className="container">
                    <div className="row FooterRow">
                            <div className="col-lg-3 FooterCol">
                                <div className="Footerlogo">
                                    {/* <img src={Logo} width="130px" alt="" /> */}
                                    <div className="LogoContainer">
                                        <div className="LogoNavContainer">
                                            <FontAwesomeIcon icon={faHandshake} />Easy Life         
                                        </div>
                                    </div>
                                </div>
                                <span className="FooterLogoText">
                                Easy Life enhances your daily life with top-notch services. From pristine home cleaning to compassionate elderly and reliable child care, we make your life easier.
                                
                                </span>
                            </div>
                            <div className="col-lg-4 FooterCol">
                                <span className="FooterEventsTitle">Latest News</span>
                                <div className="FooterEventsItem">
    <span>
        Our Latest Home Cleaning Innovations
    </span>    
                                </div>
                                <div className="FooterEventsItem">
                                    <span>
                                        Highlights from Our Elderly Care Workshop
                                    </span>
                                </div>
                                <div className="FooterEventsItem">
                                    <span>
                                        New Child Care Programs and Initiatives
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-3 FooterCol">
                                <span className="FooterContactTitle">Contact info</span>
                                <br />
                                <div className="FooterContactItem">
                                    <b>Adress: </b><span>10st. Elshiekh Mansour Ezbet-Elnakhel Cairo , Egypt.</span>
                                </div>
                                <div className="FooterContactItem">
                                    <b>Phone: </b><span>(+02) 1200835855</span>
                                </div>
                                <div className="FooterContactItem">
                                    <b>WhatsApp: </b><span>(+20) 1200835855</span>
                                </div>
                                <div className="FooterContactItem">
                                    <b>Email: </b><span>info@easylifeservices.com</span>
                                </div>

                             
                            </div>
                        </div>
                    </div>
                       
                </footer>
                    <div className="row PrivacyRow">
                    <div className="col-lg-9 PrivacyCol">©IStack for web solutions and developement. All Rights Reserved.</div>
                    <div className="col-lg-3 PrivacyCol">
                            <div className="FooterSocial">
                                <a className="FooterIcon" href="">
                                <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a className="FooterIcon" href="">
                                <FontAwesomeIcon icon={faXTwitter} />
                                </a>
                                <a className="FooterIcon" href="">
                                <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a className="FooterIcon" href="">
                                <FontAwesomeIcon icon={faTiktok} />
                                </a>
                                <a className="FooterIcon" href="">
                                <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
        </section>
    );
}
export default Footer;