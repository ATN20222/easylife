import { t } from "i18next";
import React from "react";
import { NavLink } from "react-router-dom";
const ServiceHomeCard = ({Image , Ttile , Description})=>{
    return(
        <div className="col-lg-6 col-md-6 col-sm-6 col-10 ServiceHomeCardContainer">
            <div className="ServiceHomeCard">
                <div className="container">
                    
                    <div className="row">

                    <div className="col-lg-6 ServiceHomeCardTextCol">
                            <h3>{Ttile}</h3>
                            <span>
                                {Description}
                            </span>
                            <div className="GetNowBtnContainer">
                                <NavLink className="btn btn-danger GoldBtn" to="/Login">
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