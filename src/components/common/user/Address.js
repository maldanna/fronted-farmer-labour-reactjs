import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./styels/Signup.css";
import profile from "./../../../resources/images/user-profile.jpg";
import axios from 'axios';
import { URLs, apiHeaders } from "../../../backend/requestURLs/urls";

const Address = () => {
    const [modal, setModal] = useState(true);
    const navigate = useNavigate();
    //user details
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
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
            {modal && (
                <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content">

                        {/* Address Details */}
                        <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h6 className="mt-3 mb-2 text-primary">Address</h6>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="country">Country</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="country"
                                        placeholder="Enter Country"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="state">State</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="state"
                                        placeholder="Enter State"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        placeholder="Enter City"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="village">Village</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="village"
                                        placeholder="Enter Village"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="pincode">Pin Code</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="pincode"
                                        placeholder="Enter Pin Code"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="landLocation">Land Location</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="landLocation"
                                        placeholder="Enter Land Location"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Add Address */}
                        <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="text-right">
                                    <button
                                        type="button"
                                        id="addAddress"
                                        name="addAddress"
                                        className="btn btn-primary"
                                    >
                                        Add Address
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            )}
        </>
    );
}
export default Address;