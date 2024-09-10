import React, { useState } from "react";
import './Register.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValid = true;

        // Reset errors
        setUsernameError("");
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");

        // Validate username
        if (!username) {
            setUsernameError("Username is required");
            isValid = false;
        }

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
        } else if (!validatePassword(password)) {
            setPasswordError(
                "Password must contain at least 8 characters Aa-Zz , numbers and !@#$%^&*"
            );
            isValid = false;
        }


        // Validate confirm password
        if (!confirmPassword) {
            setConfirmPasswordError("Confirm password is required");
            isValid = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match");
            isValid = false;
        }

        if (!isValid) return; // Stop form submission if validation fails

        setLoading(true);
        try {
            // Simulate API call or handle the register logic
            console.log("Registering with:", { username, email, password });
            // You can add an API call here
            setTimeout(() => {
                setLoading(false);
                // On success, you can redirect the user or show a success message
                alert("Registration successful!");
            }, 1000);
        } catch (error) {
            setLoading(false);
            // Handle any errors
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <div className="Login">
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
                    <div className="LoginWelcome">Create a new account</div>
                    <div className="container">
                        <form onSubmit={handleSubmit} className="row">
                            <div className="mb-3 FormCol">
                                <label htmlFor="username" className="form-label">Username*</label>
                                <input
                                    type="text"
                                    className={`form-control ${usernameError ? 'is-invalid' : ''}`}
                                    id="username"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                {usernameError && <span className="text-danger p-2">{usernameError}</span>}
                            </div>

                            <div className="mb-3 FormCol">
                                <label htmlFor="email" className="form-label">Email address*</label>
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
                                <label htmlFor="password" className="form-label">Password*</label>
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

                            <div className="mb-3 FormCol">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password*</label>
                                <input
                                    type="password"
                                    className={`form-control ${confirmPasswordError ? 'is-invalid' : ''}`}
                                    id="confirmPassword"
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {confirmPasswordError && <span className="text-danger p-2">{confirmPasswordError}</span>}
                            </div>

                            <div className="FormCol LoginBtnsContainer">
                                <button type="submit" className="btn-primary-temp" disabled={loading}>
                                    {loading ? "Registering..." : "Register"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
