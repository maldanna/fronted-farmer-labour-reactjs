import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./styels/Profile.css";
import axios from 'axios';
import { URLs, apiHeaders } from "../../../backend/requestURLs/urls";

const Profile = () => {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        // Phone validation
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
        // Password validation
        if (password.trim() === '') {
            validationErrors.password = 'Password is required';
        }
        // Avatar validation
        if (avatar == null) {
            validationErrors.avatar = 'Avatar is required';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        } else {
            callUpdateProfileAPI();
        }
        navigate("/");
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    };

    const callUpdateProfileAPI = () => {
        const requestBody = new FormData();
        requestBody.append('phone', phoneNumber);
        requestBody.append('password', password);
        requestBody.append('email', email);
        requestBody.append('image', avatar);

        const updateUserPath = URLs[0].updateUser.path;
        axios
            .post(updateUserPath, requestBody, {
                headers: apiHeaders,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleCancel = () => {
        // Reset form fields and errors
        setPhoneNumber('');
        setPassword('');
        setErrors({});
        navigate("/");
    };

    const redirectToLogin = () => {
        setPhoneNumber('');
        setPassword('');
        setErrors({});
        navigate("/Login");
    };

    return (
        <>
            <div className="container">
                <div className="row gutters">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="account-settings">
                                    <div className="user-profile">
                                        <div className="user-avatar">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                                alt="Maxwell Admin"
                                                style={{ width: '100%', height: 'auto' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="card h-100">
                            <div className="card-body">
                                {/* Personal Details */}
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mt-4 mb-2 text-primary">Personal Info</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="fullName">Full Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="fullName"
                                                placeholder="Enter full name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="eMail">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="eMail"
                                                placeholder="Enter email ID"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="phone"
                                                placeholder="Enter phone number"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="website">Website URL</label>
                                            <input
                                                type="url"
                                                className="form-control"
                                                id="website"
                                                placeholder="Website URL"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Change Password */}
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mt-4 mb-2 text-primary">Change Password</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="oldPassword">Old Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="oldPassword"
                                                placeholder="Enter old password"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="newPassword">New Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="newPassword"
                                                placeholder="Enter new password"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="confirmPassword">Confirm Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="confirmPassword"
                                                placeholder="Confirm new password"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Forget Password */}
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="text-right">
                                            <button
                                                type="button"
                                                id="forgetPassword"
                                                name="forgetPassword"
                                                className="btn btn-link"
                                            >
                                                Forget Password?
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit and Cancel Buttons */}
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="text-right">
                                            <button
                                                type="button"
                                                id="cancel"
                                                name="cancel"
                                                className="btn btn-danger"
                                                onClick={handleCancel}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                id="submit"
                                                name="submit"
                                                className="btn btn-success"
                                                onClick={handleSubmit}
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
