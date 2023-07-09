import React from 'react';
import "./styles/Contactus.css"
const Contactus = () => {
  return (
    <>
      <div className='contact-us-div'>
        <div class="container">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <label for="fullName">Full Name</label>
              <input type="text" class="contactus-form-control" id="fullName" placeholder="Enter full name" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <label for="phone">Email</label>
              <input type="text" class="contactus-form-control" id="phone" placeholder="Enter phone" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <label for="fullName">Email</label>
              <input type="text" class="contactus-form-control" id="email" placeholder="Enter email" />
            </div></div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <label for="fullName">Subject</label>
              <input type="text" class="contactus-form-control" id="subject" placeholder="Enter subject" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <label for="fullName">Full Name</label>
              <input type="text" class="contactus-form-control" id="fullName" placeholder="Enter full name" />
            </div>
          </div>
          <div class="row gutters">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="text-right">
                <button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button>
                <button type="button" id="submit" name="submit" class="btn btn-primary">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
