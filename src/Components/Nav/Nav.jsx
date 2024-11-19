import React, { useEffect, useState } from "react";
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faGlobe, faHandshake, faLocationDot, faPhone, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
// import Logo from '../../Assets/Images/Logo.png';
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { deleteToken, getToken } from "../../Services/axiosInstance";
import { NotificationService } from "../../Services/Api";
import Cookies from "universal-cookie";

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
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [notifications, setNotifications] = useState([]); // State for notifications
    const [showNotifications, setShowNotifications] = useState(false); // State to toggle notifications dropdown
    // Toggle the dropdown menu
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
  
    const toggleNotifications = () => {
        setShowNotifications(!showNotifications); // Toggle notifications dropdown
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

    const dropdownStyle2 = {
        position: 'absolute',
        top:'25px',
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

    useEffect(() => {
        // Fetch notifications when the bell icon is clicked
        const fetchNotifications = async () => {
            try {
                const response = await NotificationService.List(); // Replace with actual API method
                setNotifications(response.data.reverse()); // Assuming API returns notification data
            } catch (error) {
                console.log("Error fetching notifications: ", error);
            }
        };

        if (showNotifications) {
            fetchNotifications(); // Fetch notifications when the dropdown is shown
        }
    }, [showNotifications]);

    function formatDateToTimeAgo(dateString) {
        console.log("date " , dateString);
        const now = new Date();
        const date = new Date(dateString);
        const diffInSeconds = Math.floor((now - date) / 1000);
    
        const seconds = diffInSeconds;
        const minutes = Math.floor(diffInSeconds / 60);
        const hours = Math.floor(diffInSeconds / 3600);
        const days = Math.floor(diffInSeconds / 86400);
        const months = Math.floor(diffInSeconds / 2592000);
        const years = Math.floor(diffInSeconds / 31536000);
        if (seconds < 60) {
            return `${seconds} seconds ago`;
        } else if (minutes < 60) {
            return `${minutes} minutes ago`;
        } else if (hours < 24) {
            return `${hours} hours ago`;
        } else if (days < 30) {
            return `${days} days ago`;
        } else if (months < 12) {
            return `${months} months ago`;
        } else {
            return `${years} years ago`;
        }
    }
    
    const isLoggedIn = getToken();
    const Name = localStorage.getItem('Name');
    return (
<section>
            <div className={`MainNav ${isSticky ? 'sticky' : ''}`}>
                <div className="container">
                    <div className="row NavRow">
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="LogoContainer">
                                <div className="LogoNavContainer">
                                    <FontAwesomeIcon icon={faHandshake} /> Easy Life
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
                                            onClick={()=>{setShowDropdown2(!showDropdown2)}}
                                            className={({ isActive }) => isActive ? "Nav-Link ActiveLink userName" : "Nav-Link userName"}
                                            // to="/myprofile"
                                            // onClick={scrollToTop}
                                        >
                                            {/* {t('')} */}
                                            
                                            {showDropdown2 && (
                                                <ul style={dropdownStyle2}>
                                                    <li style={dropdownItemStyle}>
                                                        <Link className="Nav-Link" to='/MyReservations'>{t('MyReservations')}</Link>
                                                    </li>
                                                    <li style={dropdownItemStyle} onClick={()=>{
                                                        deleteToken();
                                                        localStorage.clear();
                                                        window.location.reload();
                                                    }}>
                                                        {t('Logout')}
                                                    </li>
                                                    
                                                </ul>
                                            )}
                                            <FontAwesomeIcon icon={faUser}/> {Name}
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
                                {isLoggedIn&&
                                
                                <li className="list-inline-item Notify">
                                    <div className="Nav-Link LanguageBtn" onClick={toggleNotifications}>
                                        <FontAwesomeIcon icon={faBell} />
                                    </div>
                                    {showNotifications && (
                                        <div className={`${i18n.language==='ar'?'notification-dropdown':'notification-dropdownEn'}`}>
                                            
                                            <div className="notification-list">
                                                {notifications.length > 0 ? notifications.map((notification, index) => (
                                                    <div key={index} className="notification-item text-start">
                                                        <div className="TitleNotify d-flex justify-content-between flex-row">
                                                            <h6>{notification.title}</h6>
                                                            <small>{formatDateToTimeAgo(notification.date)}</small>
                                                        </div>
                                                        <p>{notification.description}</p>
                                                        
                                                    </div>
                                                )) : (
                                                    <div className="notification-item">
                                                        <p>{t('no_notifications')}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </li>
                                }
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
