import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/WorkPost.css";

const WorkPost = () => {
  const navigate = useNavigate();
  const [workType, setWorkType] = useState("");
  const [workHours, setWorkHours] = useState(1);
  const [fromDay, setFromDay] = useState("");
  const [toDay, setToDay] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [workDescription, setWorkDescription] = useState("");
  const [numOfLaborers, setNumOfLaborers] = useState(1); // New state for number of laborers
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorMessages = [];

    if (workType.trim() === "") {
      errorMessages.push({ field: "workType", message: "Work Type is required." });
    }
    if (numOfLaborers <= 0) {
      errorMessages.push({ field: "numOfLaborers", message: "Number of laborers should be greater than 0." });
    }

    if (errorMessages.length > 0) {
      setValidationErrors(errorMessages);
      return;
    }
    
    const requestBody = {
      workType,
      workHours,
      fromDay,
      toDay,
      start,
      end,
      workDescription,
      numOfLaborers, // Add number of laborers to the requestBody
    };
    alert("hello buddy!!");
    navigate("/WorkPost2");
    // Simulate API call with axios
    axios
      .post("/api/work", requestBody)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCancel = () => {
    navigate("/");
  };

  const getErrorMessage = (field) => {
    const error = validationErrors.find((error) => error.field === field);
    return error ? error.message : "";
  };

  return (
    <div className="work-post-div">
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-6 offset-lg-2 col-xl-5 offset-xl-3 col-xxl-5 offset-xxl-3">
          <div className="container">
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
                onChange={(e) => setWorkHours(parseInt(e.target.value))}
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
            <div className="form-group">
              <label htmlFor="numOfLaborers">Number of Laborers</label>
              <input
                type="number"
                className={`form-control ${getErrorMessage("numOfLaborers") && "is-invalid"}`}
                id="numOfLaborers"
                placeholder="Enter number of laborers"
                value={numOfLaborers}
                onChange={(e) => setNumOfLaborers(parseInt(e.target.value))}
              />
              <div className="invalid-feedback">{getErrorMessage("numOfLaborers")}</div>
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
              <button type="button" className="btn btn-danger" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"> you posted jobs !!</div>
      </div>
    </div>
  );
};

export default WorkPost;
