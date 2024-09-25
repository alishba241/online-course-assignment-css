import React from "react";
import Footer from "../footer/page";

function Apply() {
  return (
    <div>
      <div className="apply-heading-div">
        <h1 className="apply-heading">Get Enrolled Here</h1>
      </div>
      <div className="border-div"></div>
      <div className="apply-form">
        <div className="main-apply-form">
          <form className="form">
            <div>
              <input
                type="text"
                placeholder="First Name"
                required
                className="input-feild"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                required
                className="input-feild"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                required
                className="input-feild"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone number"
                required
                className="input-feild"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Course Name"
                required
                className="input-feild"
              />
            </div>
            <div className="apply-btn">
              <button type="reset" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Apply;
