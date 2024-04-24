import React from "react";
import { Link } from "react-router-dom";
import Taskbar from "../components/Taskbar";
import logo from "../HelpingHands3.png";
import PageFooter from "../components/PageFooter";

function SignUpPage() {
  return (
    <div>
      <Taskbar imagesrc={logo} />
      <div>
        <ul className="steps font-xl">
          <li className="step step-primary">Sign Up</li>
          <li className="step">Child Info.</li>
        </ul>
        <ul>
          <label className="signup text-xl font-bold">Sign Up</label>
        </ul>
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input type="text" className="grow" placeholder="Midtown" required />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input
            type="text"
            className="grow"
            placeholder="midtown@site.com"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Phone
          <input
            type="text"
            className="grow"
            placeholder="888-123-4567"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Address
          <input
            type="text"
            className="grow"
            placeholder="123 midtown ln"
            required
          />
        </label>
        <Link to="/child" type="submit" className="btn">
          Next
        </Link>
      </div>
      <PageFooter imagescr={logo} />
    </div>
  );
}

export default SignUpPage;
