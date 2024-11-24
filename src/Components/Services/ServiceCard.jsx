import { t } from "i18next";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ Id, Image, Title, Description }) => {
    // State to manage whether the full description is shown
    const [isReadMore, setIsReadMore] = useState(false);
    
    // Function to toggle between showing full description or truncated version
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-10 ServiceHomeCardContainer">
            <div className="ServiceCard">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 ServiceHomeCardImageCol ServiceCardImageContainer">
                            <img src={Image} width="100%" alt="" />
                        </div>
                        
                        <div className="col-lg-12 ServiceHomeCardTextCol">
                            <h3>{Title}</h3>
                            <span>
                                {/* Show the full description if read more is clicked, otherwise show truncated text */}
                                {isReadMore ? Description : `${Description.substring(0, 100)}...`}
                                <span 
                                    className="read-more-toggle"
                                    onClick={toggleReadMore}
                                    style={{ color: 'blue', cursor: 'pointer' }}
                                >
                                    {Description.length>100&&(isReadMore ? t('read_less') : t('read_more'))}
                                </span>
                            </span>
                            <div className="GetNowBtnContainer">
                                <NavLink className="btn btn-danger GoldBtn" to={`/reserve/${Id}`}>
                                    {t('book_now')}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
