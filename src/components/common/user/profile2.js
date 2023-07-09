import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./styels/Profile.css";
import axios from 'axios';
import { URLs, apiHeaders } from "../../../backend/requestURLs/urls";

const Profile = () => {
    const navigate = useNavigate();
    //user details
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        // phone validation
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
        // password validation
        if (password.trim() === '') {
            validationErrors.password = 'Password is required';
        }
        // avatar validation
        if (avatar == null) {
            validationErrors.avatar = 'avatar is required';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        else {
            callUpdateProfileAPI();
        }
        navigate("/");
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    };

    const callUpdateProfileAPI = () => {
        const requestBody = JSON.stringify({
            "phone": phoneNumber,
            "password": password,
            "email": email,
            "image": avatar

        });

        const updateUserPath = URLs[0].updateUser.path;
        axios.post(updateUserPath,
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
                        <div className="card h-30">
                            <div className="card-body">
                                <div className="account-settings">
                                    <div className="user-profile">
                                        <div className="user-avatar">
                                            <image src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mb-2 text-primary">Personal Details</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="fullName">Full Name</label>
                                            <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="eMail">Email</label>
                                            <input type="email" className="form-control" id="eMail" placeholder="Enter email ID" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="phone">Phone</label>
                                            <input type="text" className="form-control" id="phone" placeholder="Enter phone number" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="website">Website URL</label>
                                            <input type="url" className="form-control" id="website" placeholder="Website url" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mt-3 mb-2 text-primary">Address</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="Street">Street</label>
                                            <input type="name" className="form-control" id="Street" placeholder="Enter Street" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="ciTy">City</label>
                                            <input type="name" className="form-control" id="ciTy" placeholder="Enter City" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="sTate">State</label>
                                            <input type="text" className="form-control" id="sTate" placeholder="Enter State" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="zIp">Zip Code</label>
                                            <input type="text" className="form-control" id="zIp" placeholder="Zip Code" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="text-right">
                                            <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
                                            <button type="button" id="submit" name="submit" className="btn btn-primary">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-3">col-4</div>
                <div class="col-8">col-8</div>
            </div>

            <div className="container">
                <div className="row gutters">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="account-settings">
                                    <div className="user-profile">
                                        <div className="user-avatar">
                                            <image src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
                                        </div>
                                        <h5 className="user-name">Yuki Hayashi</h5>
                                        <h6 className="user-email">yuki@Maxwell.com</h6>
                                    </div>
                                    <div className="about">
                                        <h5>About</h5>
                                        <p>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mb-2 text-primary">Personal Details</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="fullName">Full Name</label>
                                            <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="eMail">Email</label>
                                            <input type="email" className="form-control" id="eMail" placeholder="Enter email ID" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="phone">Phone</label>
                                            <input type="text" className="form-control" id="phone" placeholder="Enter phone number" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="website">Website URL</label>
                                            <input type="url" className="form-control" id="website" placeholder="Website url" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mt-3 mb-2 text-primary">Address</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="Street">Street</label>
                                            <input type="name" className="form-control" id="Street" placeholder="Enter Street" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="ciTy">City</label>
                                            <input type="name" className="form-control" id="ciTy" placeholder="Enter City" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="sTate">State</label>
                                            <input type="text" className="form-control" id="sTate" placeholder="Enter State" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="zIp">Zip Code</label>
                                            <input type="text" className="form-control" id="zIp" placeholder="Zip Code" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="text-right">
                                            <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
                                            <button type="button" id="submit" name="submit" className="btn btn-primary">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Profile;
