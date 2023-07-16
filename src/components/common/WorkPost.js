import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/WorkPost.css";

const WorkPost = () => {
    const navigate = useNavigate();
    const [workType, setWorkType] = useState("");
    const [workHours, setWorkHours] = useState("");
    const [fromDay, setFromDay] = useState("");
    const [toDay, setToDay] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [workDescription, setWorkDescription] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform validation
        let errorMessages = [];

        if (workType.trim() === "") {
            errorMessages.push({ field: "workType", message: "Work Type is required." });
        }

        if (workHours.trim() === "") {
            errorMessages.push({ field: "workHours", message: "Work Hours is required." });
        } else {
            const parsedHours = parseInt(workHours);
            if (isNaN(parsedHours) || parsedHours < 1 || parsedHours > 24) {
                errorMessages.push({ field: "workHours", message: "Work Hours should be an integer between 1 and 24." });
            }
        }

        if (fromDay.trim() === "") {
            errorMessages.push({ field: "fromDay", message: "From Day is required." });
        }

        if (toDay.trim() === "") {
            errorMessages.push({ field: "toDay", message: "To Day is required." });
        }

        if (start.trim() === "") {
            errorMessages.push({ field: "start", message: "Start time is required." });
        }

        if (end.trim() === "") {
            errorMessages.push({ field: "end", message: "End time is required." });
        }

        if (errorMessages.length > 0) {
            setValidationErrors(errorMessages);
            return;
        }

        const fromDate = new Date(fromDay);
        const toDate = new Date(toDay);

        if (fromDate > toDate) {
            errorMessages.push({ field: "fromDay", message: "From Day should be less than or equal to To Day." });
        }

        const today = new Date();
        if (fromDate < today) {
            errorMessages.push({ field: "fromDay", message: "From Day should be today or a future date." });
        }

        if (toDate < today) {
            errorMessages.push({ field: "toDay", message: "To Day should be today or a future date." });
        }

        if (errorMessages.length > 0) {
            setValidationErrors(errorMessages);
            return;
        }

        // Submit the work post
        const requestBody = {
            workType,
            workHours,
            fromDay,
            toDay,
            start,
            end,
            workDescription,
        };

        // Simulate API call with axios
        axios
            .post("/api/work", requestBody)
            .then(() => {
                setSuccessMessage("Work posted successfully! 👏");
                setTimeout(() => {
                    navigate("/");
                }, 3000);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleCancel = () => {
        navigate("/");
    };

    const clearValidationErrors = () => {
        setValidationErrors([]);
    };

    const getErrorMessage = (field) => {
        const error = validationErrors.find((error) => error.field === field);
        return error ? error.message : "";
    };

    return (
        <>
            <div className="work-post-div">
                <div className="row">
                    <div className="col-md-8">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="workType">Work Type</label>
                                                <select
                                                    className="form-control"
                                                    id="workType"
                                                    value={workType}
                                                    onChange={(e) => setWorkType(e.target.value)}
                                                >
                                                    <option value="">Select work type</option>
                                                    <option value="Type 1">Type 1</option>
                                                    <option value="Type 2">Type 2</option>
                                                    <option value="Type 3">Type 3</option>
                                                </select>
                                                <div className="invalid-feedback">{getErrorMessage("workType")}</div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="workHours">Work Hours</label>
                                                <input
                                                    type="number"
                                                    className={`form-control ${getErrorMessage("workHours") && "is-invalid"}`}
                                                    id="workHours"
                                                    placeholder="Enter work hours"
                                                    value={workHours}
                                                    onChange={(e) => setWorkHours(e.target.value)}
                                                />
                                                <div className="invalid-feedback">{getErrorMessage("workHours")}</div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="fromDay">From Day</label>
                                                <input
                                                    type="date"
                                                    className={`form-control ${getErrorMessage("fromDay") && "is-invalid"}`}
                                                    id="fromDay"
                                                    value={fromDay}
                                                    onChange={(e) => setFromDay(e.target.value)}
                                                />
                                                <div className="invalid-feedback">{getErrorMessage("fromDay")}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="toDay">To Day</label>
                                                <input
                                                    type="date"
                                                    className={`form-control ${getErrorMessage("toDay") && "is-invalid"}`}
                                                    id="toDay"
                                                    value={toDay}
                                                    onChange={(e) => setToDay(e.target.value)}
                                                />
                                                <div className="invalid-feedback">{getErrorMessage("toDay")}</div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="start">Start</label>
                                                <input
                                                    type="time"
                                                    className={`form-control ${getErrorMessage("start") && "is-invalid"}`}
                                                    id="start"
                                                    value={start}
                                                    onChange={(e) => setStart(e.target.value)}
                                                />
                                                <div className="invalid-feedback">{getErrorMessage("start")}</div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="end">End</label>
                                                <input
                                                    type="time"
                                                    className={`form-control ${getErrorMessage("end") && "is-invalid"}`}
                                                    id="end"
                                                    value={end}
                                                    onChange={(e) => setEnd(e.target.value)}
                                                />
                                                <div className="invalid-feedback">{getErrorMessage("end")}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="workDescription">Work Description</label>
                                        <textarea
                                            className="form-control"
                                            id="workDescription"
                                            placeholder="Enter work description"
                                            value={workDescription}
                                            onChange={(e) => setWorkDescription(e.target.value)}
                                        ></textarea>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            onClick={handleSubmit}
                                        >
                                            Submit
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={handleCancel}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        you posted works!!
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkPost;
