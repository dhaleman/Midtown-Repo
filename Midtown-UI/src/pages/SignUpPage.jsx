import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Taskbar from "../components/Taskbar";
import logo from "../HelpingHands3.png";
import config from "../config";
import PageFooter from "../components/PageFooter";

function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [Email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Address, setAddress] = useState("");

  const handleSubmit = async () => {
    const dataToSend = {
      first_name: firstName,
      email: Email,
      phonenumber: phoneNumber,
      address: Address,
    };
    console.log(dataToSend);
    try {
      const response = await axios.post(
        `${config.baseApiUrl}/sign-up`,
        dataToSend
      );
      console.log(response);
    } catch (error) {
      console.log("uh oh");
    }
  };


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
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            type="text"
            className="grow"
            placeholder="Midtown"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
            type="text"
            className="grow"
            placeholder="midtown@site.com"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Phone
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            type="text"
            className="grow"
            placeholder="888-123-4567"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Address
          <input
            onChange={(e) => setAddress(e.target.value)}
            value={Address}
            type="text"
            className="grow"
            placeholder="123 midtown ln"
            required
          />
        </label>
        <Link to="/child">
          <button onClick={handleSubmit}>Next</button>
        </Link>
      </div>
      <PageFooter imagescr={logo} />
    </div>
  );
}

export default SignUpPage;
