import React from "react";
import { Link } from "react-router-dom";
import Taskbar from "../components/Taskbar";
import logo from "../HelpingHands3.png";
import PageFooter from "../components/PageFooter";

function SchedulePage() {
  return (
    <div>
      <Taskbar imagesrc={logo} />
      <div>
      <ul className="steps font-xl gap-4">
          <li className="step step-primary">Schedule</li>
          <li className="step">Payment</li>
        </ul>
        <ul>
          <label className="signup text-xl font-bold">Schedule</label>
        </ul>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select Date</span>
              </label>
              <input
                type="date"
                placeholder="7:00am"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Drop-off Time</span>
              </label>
              <input
                type="time"
                placeholder="7:00am"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pick-up Time</span>
              </label>
              <input
                type="time"
                placeholder="5:30pm"
                className="input input-bordered"
                required
              />
            </div>
            <Link to="/price" type="submit" className="btn">
              Next
            </Link>
      </div>
      <PageFooter imagescr={logo} />
    </div>
  );
}

export default SchedulePage;
