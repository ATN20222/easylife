import React from "react";
import './Login.css'
import HandShakeImage from '../../Assets/Images/HandShake.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
const Login = ()=>{
    return(
        <div className="Login">
            {/* <div className="container"> */}
                <div className="row">
                    <div className="col-lg-6 Center LoginLeftCol">
                        {/* <img src={HandShakeImage} width="200px" alt="" /> */}
                        <FontAwesomeIcon icon={faHandshake}/>
                        <h3>Easy Life Servcies</h3>
                        <div className="LeftLoginColText">
                            <span>find out your way to have your home cleaned and well organized </span>
                        </div>
                        <div className="LoginOverlay"></div>
                    </div>
                    <div className="col-lg-6 LoginRightLogin">
                        <div className="LogoRightLogin">
                        <FontAwesomeIcon icon={faHandshake}/>
                        Easy Life 
                        </div>
                        <div className="LoginWelcome">
                            Hello, <br />
                            Welcome Back!
                        </div>
                        <div className="container">
                            <form action="" className="row">
                                <div class="mb-3 FormCol">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>
                                <div class="mb-3 FormCol">
                                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="enter your password"/>
                                </div>
                                <div className="mb-3 FormCol AfterLoginFieldsActions">
                                    
                                    <div className="RememberMe">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="ForgetPassword">
                                        <Link className="nav-link" to='/forgetpassword'>forget password ?</Link>
                                    </div>

                                </div>
                                <div className="FormCol LoginBtnsContainer">
                                    <button className="btn-primary-temp">Login</button>
                                    <span>Dont have account ? 
                                        <Link className="RegisterNow">Register now</Link>
                                    </span>
                                </div>
                            </form>
                        </div>
                        

                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}
export default Login;