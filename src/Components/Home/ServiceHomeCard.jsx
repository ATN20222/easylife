import { t } from "i18next";
import React from "react";
import { NavLink } from "react-router-dom";
const ServiceHomeCard = ({Image , Title , Description})=>{
    return(
        <div className="col-lg-6 col-md-6 col-sm-6 col-10 ServiceHomeCardContainer">
            <div className="ServiceHomeCard">
                <div className="container">
                    
                    <div className="row">

                        <div className="col-lg-6 ServiceHomeCardTextCol">
                            <h3>{Title}</h3>
                            <span>
                                {Description}
                            </span>
                            <div className="GetNowBtnContainer">
                                <NavLink className="btn btn-danger GoldBtn" to="/services">
                                    {t('LearnMore')}
                                </NavLink>
                            </div>
                        </div>

                        <div className="col-lg-6 ServiceHomeCardImageCol">
                            <img src={Image} width="100%" alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    );
}
export default ServiceHomeCard;