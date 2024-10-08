import React, { useEffect, useState } from "react";
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGlobe, faHandshake, faLocationDot, faPhone, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
// import Logo from '../../Assets/Images/Logo.png';
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { getToken } from "../../Services/axiosInstance";

const Nav = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
            setIsMenuOpen(false);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to scroll to the top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const { i18n } = useTranslation();
    const [showDropdown, setShowDropdown] = useState(false);
  
    // Toggle the dropdown menu
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
  
    // // Handle language change
    // const changeLanguage = (lang) => {
    //     i18n.changeLanguage(lang);
    //     setShowDropdown(false); // Close the dropdown after language selection
    // };
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng); 
        setShowDropdown(false); 

        window.location.reload();

    };
    const dropdownStyle = {
    position: 'absolute',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    listStyle: 'none',
    padding: '5px 0',
    zIndex: 1000,
    };

    const dropdownItemStyle = {
    padding: '10px 20px',
    cursor: 'pointer',
    };
    const isLoggedIn = getToken();
    return (
<section>
            <div className={`MainNav ${isSticky ? 'sticky' : ''}`}>
                <div className="container">
                    <div className="row NavRow">
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="LogoContainer">
                                <div className="LogoNavContainer">
                                    <FontAwesomeIcon icon={faHandshake} /> {t('logo')}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 LinksNav">
                            <ul className="list-list-unstyled">
                                <li className="list-inline-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                                        to="/home"
                                        onClick={scrollToTop}
                                    >
                                        {t('home')}
                                    </NavLink>
                                </li>
                                <li className="list-inline-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                                        to="/about"
                                        onClick={scrollToTop}
                                    >
                                        {t('about_us')}
                                    </NavLink>
                                </li>
                                <li className="list-inline-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                                        to="/services"
                                        onClick={scrollToTop}
                                    >
                                        {t('services')}
                                    </NavLink>
                                </li>
                                <li className="list-inline-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                                        to="/news"
                                        onClick={scrollToTop}
                                    >
                                        {t('news')}
                                    </NavLink>
                                </li>
                                <li className="list-inline-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                                        to="/contact"
                                        onClick={scrollToTop}
                                    >
                                        {t('contact_us')}
                                    </NavLink>
                                </li>
                                {!isLoggedIn?
                                    <>
                                    <li className="list-inline-item">
                                    <NavLink className="btn btn-danger NavLoginBtn" to="/Login" onClick={scrollToTop}>
                                        {t('login')}
                                    </NavLink>
                                    </li>
                                    <li className="list-inline-item">
                                        <NavLink className="btn btn-danger NavRegisterBtn" to="/Register" onClick={scrollToTop}>
                                            {t('register')}
                                        </NavLink>
                                    </li>
                                    </>:
                                    <li className="list-inline-item">
                                        <NavLink
                                            className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                                            to="/myprofile"
                                            onClick={scrollToTop}
                                        >
                                            {/* {t('')} */}
                                            <FontAwesomeIcon icon={faUser}/>
                                        </NavLink>
                                    </li>
                                }
                                
                                <li className="list-inline-item">
                                    <div className="Nav-Link LanguageBtn" onClick={toggleDropdown}>
                                        <FontAwesomeIcon icon={faGlobe} />
                                        {showDropdown && (
                                        <ul style={dropdownStyle}>
                                            <li style={dropdownItemStyle} onClick={() => changeLanguage('en')}>
                                                {t('english')}
                                            </li>
                                            <li style={dropdownItemStyle} onClick={() => changeLanguage('ar')}>
                                                {t('arabic')}
                                            </li>
                                        </ul>
                                        )}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`OverlayMenu ${isMenuOpen ? 'open' : ''}`}>
                <button className="CloseButton" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <ul className="OverlayLinks">   
                    <li>
                        <NavLink to="/home" onClick={() => { scrollToTop(); toggleMenu(); }}>{t('home')}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={() => { scrollToTop(); toggleMenu(); }}>{t('about_us')}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" onClick={() => { scrollToTop(); toggleMenu(); }}>{t('services')}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/solutions" onClick={() => { scrollToTop(); toggleMenu(); }}>{t('solutions')}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news" onClick={() => { scrollToTop(); toggleMenu(); }}>{t('news')}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/clients" onClick={() => { scrollToTop(); toggleMenu(); }}>{t('clients')}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/careers" onClick={() => { scrollToTop(); toggleMenu(); }}>{t('careers')}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contactus" onClick={() => { scrollToTop(); toggleMenu(); }}>{t('contact_us')}</NavLink>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Nav;
