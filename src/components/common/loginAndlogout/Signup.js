import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from 'react-router-dom';
import "./styles/Signup.css";
import profile from "./../../../resources/images/user-profile.jpg";
import axios from 'axios';
import { URLs, apiHeaders } from "../../../backend/requestURLs/urls";

const Signup = () => {
    const [modal, setModal] = useState(true);
    const navigate = useNavigate();
    //user details
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (phoneNumber.trim() === '') {
            validationErrors.phoneNumber = 'Phone number is required';
        } else if (!/^\d{10}$/.test(phoneNumber)) {
            validationErrors.phoneNumber = 'Phone number is invalid';
        }
        // Email validation
        if (email.trim() === '') {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = 'Email is invalid';
        }

        if (password.trim() === '') {
            validationErrors.password = 'Password is required';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        else {
            callSignupAPI();

        }
        navigate("/");
    };

    const callSignupAPI = () => {
        const requestBody = JSON.stringify({
            "phone": phoneNumber,
            "password": password
        });
        const registerPath = URLs[0].register.path;
        axios.post(registerPath,
            requestBody, {
            headers: apiHeaders
        }).then(response => {
            console.log(response.data);
            //console.log("Phone number is: "+getUserByPhone(phoneNumber));
        })
            .catch(error => {
                console.error(error);
            });
        console.log(requestBody);
    }

    const handleCancel = () => {
        // Reset form fields and errors
        setPhoneNumber('');
        setPassword('');
        setErrors({});
        setModal(!modal);
        navigate("/");
    };

    const redirectToLogin = () => {
        setPhoneNumber('');
        setPassword('');
        setErrors({});
        setModal(!modal);
        navigate("/Login");
    };

    return (
        <>
            {modal && createPortal(
                <div className="signup-modal">
                    <div className="signup-overlay"></div>
                    <div className="signup-modal-content">
                        <form className="signup-form" onSubmit={handleSubmit}>
                            <div>
                                <img className="user-profile" src={profile} alt="User profile" />
                            </div>
                            <div className="form-group">
                                <input
                                    required
                                    placeholder="Phone Number"
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                {errors.phoneNumber && <span className="error-span">{errors.phoneNumber}</span>}
                            </div>
                            <div className="form-group">
                                <input
                                    required
                                    placeholder="Email"
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <span className="error-span">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <input
                                    required
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && <span className="error-span">{errors.password}</span>}
                            </div>
                            <div className="button-group">
                                <button type="submit" className="signup-button">
                                    Sign Up
                                </button>
                                <di style={{ width: "10px" }}> </di>
                                <button type="button" className="cancel-button" onClick={handleCancel}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                        <div>
                            <p>Already have an account?</p>
                            <a href="" onClick={redirectToLogin}> login here!</a>
                        </div>
                    </div>

                </div>, document.body
            )}
        </>
    );
}
export default Signup;