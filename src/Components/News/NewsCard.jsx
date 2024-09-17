import { t } from "i18next";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NewsCard = ({ Image, Ttile, Description , Id }) => {
    // State to manage whether the full description is shown
    const [isReadMore, setIsReadMore] = useState(false);
    
    // Function to toggle between showing full description or truncated version
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-10 ServiceHomeCardContainer">
            <div className="ServiceCard NewsCard">
                <div className="container">
                    <div className="row">
                        {Image&&
                            <div className="col-lg-12 ServiceHomeCardImageCol NewsCardCardImageContainer">
                                <img src={Image} width="100%" alt="" />
                            </div>
                        }
                        
                        
                        <div className="col-lg-12 ServiceHomeCardTextCol">
                            <h3>{Ttile}</h3>
                            <span>
                                {/* Show the full description if read more is clicked, otherwise show truncated text */}
                                {isReadMore ? Description : `${Description.substring(0, 100)}...`}
                                <span 
                                    className="read-more-toggle"
                                    onClick={toggleReadMore}
                                    style={{ color: 'blue', cursor: 'pointer' }}
                                >
                                    {/* {Description.length>100&&(isReadMore ? t('read_less') : t('read_more'))} */}
                                </span>
                            </span>
                            <div className="GetNowBtnContainer">
                                <NavLink className="btn btn-danger GoldBtn" to={`/News/${Id}`}>
                                    {t('read_more')}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
