import React from "react";
import { Link } from "react-router-dom";
import Taskbar from "../components/Taskbar";
import logo from "../HelpingHands3.png";
import PageFooter from "../components/PageFooter";

function ChildInfoPage() {
  return (
    <div>
        <Taskbar imagesrc={logo}/>
      <div>
        <ul className="steps font-xl">
          <li className="step step-primary">Sign Up</li>
          <li className="step step-primary">Child Info.</li>
          <li className="step">Schedule</li>
          <li className="step">Price</li>
        </ul>
        <ul>
          <label className="signup text-xl font-bold">Child Information</label>
        </ul>
        <label className="input input-bordered flex items-center gap-2">
          Child's Name
          <input type="text" className="grow" placeholder="Midtown Jr." />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Birthday
          <input type="date" className="grow" placeholder="1/2/2023" />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text text-base">List any allergies</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Peanut, milk, etc."
          ></textarea>
        </label>
        <Link to="/schedule" type="submit" className="btn">
          Next
        </Link>
      </div>
      <PageFooter imagescr={logo} />
    </div>
  );
}

export default ChildInfoPage;
