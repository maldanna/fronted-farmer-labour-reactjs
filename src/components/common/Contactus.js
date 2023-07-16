import "./styles/Contactus.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URLs, apiHeaders } from "../../backend/requestURLs/urls";

const Contactus = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [problem, setProblem] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Full Name validation
    if (fullName.trim() === "") {
      validationErrors.fullName = "Full name is required";
    }
    // Email validation
    if (email.trim() === "") {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid";
    }
    // Phone validation
    if (phone.trim() === "") {
      validationErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      validationErrors.phone = "Phone number is invalid";
    }
    // Address validation
    if (address.trim() === "") {
      validationErrors.address = "Address is required";
    }
    // Subject validation
    if (subject.trim() === "") {
      validationErrors.subject = "Subject is required";
    }
    // Problem validation
    if (problem.trim() === "") {
      validationErrors.problem = "Problem is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      callSubmitFormAPI();
    }
    navigate("/");
  };

  const callSubmitFormAPI = () => {
    const requestBody = {
      fullName: fullName,
      email: email,
      phone: phone,
      address: address,
      subject: subject,
      problem: problem,
    };

    const contactUsPath = URLs[0].contactUs.path;
    axios
      .post(contactUsPath, requestBody, {
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
    setFullName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setSubject("");
    setProblem("");
    setErrors({});
    navigate("/");
  };

  return (
    <>
      <div className="contact-us-div">
        <h2>Let's Get in Touch!!</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Enter full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                {errors.fullName && <span className="error">{errors.fullName}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Enter phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                {errors.address && <span className="error">{errors.address}</span>}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="subject">subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Enter subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                {errors.subject && <span className="error">{errors.subject}</span>}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="problem">Problem</label>
                <textarea
                  className="form-control"
                  id="problem"
                  placeholder="Enter problem discussion"
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                ></textarea>
                {errors.problem && <span className="error">{errors.problem}</span>}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-1">
              <button
                type="button"
                id="cancel"
                name="cancel"
                className="btn btn-danger"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
            <div className="col-md-1">
              <button
                type="submit"
                id="submit"
                name="submit"
                className="btn btn-success"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
