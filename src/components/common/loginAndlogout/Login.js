import { createPortal } from "react-dom";
import React, { useState, useEffect, modal } from "react";
import { useNavigate } from 'react-router-dom';
import "./styles/Login.css";
import profile from "./../../../resources/images/user-profile.jpg";
import { CreateAccessToken, GetAccessToken } from "../utility/AccessToken";
import { isUserLoggedIn } from "../user/UsersDetails";

const Login = () => {

    const [modal, setModal] = useState(true);
    const navigate = useNavigate();


    //user details
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});


    /*if (modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }*/

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation
        const validationErrors = {};
        if (phoneNumber.trim() === '') {
            validationErrors.phoneNumber = 'Phone number is required';
        } else if (!/^\d{10}$/.test(phoneNumber)) {
            validationErrors.phoneNumber = 'Phone number is invalid';
        }
        if (password.trim() === '') {
            validationErrors.password = 'Password is required';
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        else {
            callLoginAPI();
        }
        // Handle form submission logic here
        console.log('Submitted:', { phoneNumber, password });
        // You can send the form data to an API or perform any other actions
    };
    const callLoginAPI = () => {
        CreateAccessToken(phoneNumber, password);
        navigate("/");
        console.log("token is: " + GetAccessToken());
    };

    const handleCancel = () => {
        // Reset form fields and errors
        setPhoneNumber('');
        setPassword('');
        setErrors({});
        setModal(!modal);
        navigate("/");
    };

    const redirectToSignup = () => {
        setPhoneNumber('');
        setPassword('');
        setErrors({});
        setModal(!modal);
        navigate("/Signup");
    };

    return (
        <>
            {modal && createPortal(
                <div className="login-modal">
                    <div className="login-overlay"></div>
                    <div className="login-modal-content">
                        <form className="login-form" onSubmit={handleSubmit}>
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
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && <span className="error-span">{errors.password}</span>}
                            </div>
                            <div className="button-group">
                                <button type="submit" className="login-button">
                                    login
                                </button>
                                <di style={{ width: "10px" }}> </di>
                                <button type="button" className="cancel-button" onClick={handleCancel}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                        <div>
                            <p> don't you have an account?</p>
                            <a href="" onClick={redirectToSignup}> create account here!</a>
                        </div>
                    </div>

                </div>,document.body
            )}
        </>
    );
};

/*const Login = () => {
  return <>{createPortal(<LoginModal />, document.body)}</>;
};*/

export default Login;
