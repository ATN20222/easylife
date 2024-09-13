import React from "react";
import HomeImage from '../../Assets/Images/Asset 2.svg'
import { NavLink } from "react-router-dom";
const HomeFirstSection = ()=>{
    return(
        <section className="HomeFirstSection">
            <div className="HomeFirstSectionContainer container">
                <div className="row">
                    <div className="col-lg-5 HomeFirstSectionTextCol">
                        <h1>
                            We Help You Have a Better
                            
                            Easy life 
                        </h1>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, accusamus praesentium deleniti voluptate a laborum? Unde error quibusdam officiis et tempora ad, enim maiores dolores porro. Possimus distinctio excepturi porro.</span>
                        <div className="GoldBtnContainer">
                            <NavLink className="btn btn-danger GoldBtn" to="/Login">
                                Get Started
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <img src={HomeImage} width="100%" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HomeFirstSection;