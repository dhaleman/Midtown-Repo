import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Taskbar from "../components/Taskbar";
import logo from "../HelpingHands3.png";
import config from "../config";
import PageFooter from "../components/PageFooter";

function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Address, setAddress] = useState("");
  const handleSubmit = async () => {
    const dataToSend = {
      first_name: firstName,
      last_name: lastName,
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
  const handleNameChange = (e) => {
    const fullName = e.target.value;
    const splitName = fullName.split(" ");
    if (splitName.length > 1) {
      setFirstName(splitName[0]);
      setLastName(splitName.slice(1).join(" "));
    } else {
      setFirstName(fullName);
      setLastName("");
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
            onChange={handleNameChange}
            value={firstName + (lastName ? " " + lastName : "")}
            type="text"
            className="grow"
            placeholder="Midtown"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input
            onChange={setEmail}
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
            onChange={setPhoneNumber}
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
            onChange={setAddress}
            value={Address}
            type="text"
            className="grow"
            placeholder="123 midtown ln"
            required
          />
        </label>
        <Link to="/child">
          <button
            onClick={() => {
              handleSubmit();
            }}
          >
            Next
          </button>
        </Link>
      </div>
      <PageFooter imagescr={logo} />
    </div>
  );
}

export default SignUpPage;
