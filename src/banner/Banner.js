import React from "react";
import imagebanner from "../images/Capture.PNG";
import "./Banner.css";
// import Trialbutton from "../trialbutton/Trialbutton";

export default function Banner() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="col-sm-8 abcd mt-5">
              Your training will grow faster on Mighty Networks
            </div>
            <div className="col-sm-10 mt-5 fs-5 mb-4">
              With a Mighty Network, you can bring your courses, memberships,
              and offers together in a powerful community under your own brand
              on iOS, Android, and the web.
            </div>
            <button class="btn btn-2  " type="submit">
              Start Your Free Trial
            </button>
            {/* <Trialbutton/> */}
          </div>
          <div className="col-md-6 ">
            <a href="#">
              <img className="img-fluid mt-5" src={imagebanner} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
