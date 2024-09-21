import React, { useState } from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
import { AuthService } from "../../Services/Api";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const validateEmail = (email) => {
        // Simple regex for email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let isValid = true;

        // Reset errors
        setEmailError("");
        setPasswordError("");

        // Validate email
        if (!email) {
            setEmailError("Email is required");
            isValid = false;
        } else if (!validateEmail(email)) {
            setEmailError("Invalid email format");
            isValid = false;
        }

        // Validate password
        if (!password) {
            setPasswordError("Password is required");
            isValid = false;
        }

        if (!isValid) return; 

        setLoading(true);
        try {
            const response  = await AuthService.Login(email , password);
            console.log(response);
            toast.success("Login successful!");
            setTimeout(() => {
                setLoading(false);
                navigate('/Home');
            }, 1000);
        } catch (error) {
            setLoading(false);
            toast.error(`${error}`);
        }
    };

    return (
        <div className="Login">
            <div className="Toaster">
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 Center LoginLeftCol">
                    <FontAwesomeIcon icon={faHandshake} />
                    <h3>Easy Life Services</h3>
                    <div className="LeftLoginColText">
                        <span>Find out your way to have your home cleaned and well organized</span>
                    </div>
                    <div className="LoginOverlay"></div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 LoginRightLogin">
                    <div className="LogoRightLogin">
                        <FontAwesomeIcon icon={faHandshake} /> Easy Life
                    </div>
                    <div className="LoginWelcome">
                        Hello, <br />
                        Welcome Back!
                    </div>
                    <div className="container">
                        <form onSubmit={handleSubmit} className="row">
                            <div className="mb-3 FormCol">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    type="text"
                                    className={`form-control ${emailError ? 'is-invalid' : ''}`}
                                    id="email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {emailError && <span className="text-danger p-2">{emailError}</span>}
                            </div>

                            <div className="mb-3 FormCol">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                                    id="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {passwordError && <span className="text-danger p-2">{passwordError}</span>}
                            </div>

                            <div className="mb-3 FormCol AfterLoginFieldsActions">
                                <div className="RememberMe">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <div className="ForgetPassword">
                                    <Link className="nav-link" to='/forgetpassword'>Forget password?</Link>
                                </div>
                            </div>

                            <div className="FormCol LoginBtnsContainer">
                                <button type="submit" className="btn-primary-temp" disabled={loading}>
                                    {loading ? "Logging in..." : "Login"}
                                </button>
                                <span>Don't have an account? 
                                    <Link to="/Register" className="RegisterNow">Register now</Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
