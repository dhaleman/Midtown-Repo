import React, { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Taskbar from "../components/Taskbar";
import logo from "../HelpingHands3.png";
import config from "../config";
import PageFooter from "../components/PageFooter";

function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Address, setAddress] = useState("");
  const {user_id} = useParams();
  const parsedUserId = parseInt(user_id);

  const handleSubmit = async () => {
    const dataToSend = {
      first_name: firstName,
      last_name: lastName,
      username: userName,
      password: passWord,
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
          First Name
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            type="text"
            className="grow"
            placeholder="Team"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Last Name
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            type="text"
            className="grow"
            placeholder="Midtown"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Username
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            type="text"
            className="grow"
            placeholder="midtownslay"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Create Password
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={passWord}
            type="password"
            className="grow"
            placeholder="Password"
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
        <Link to={`/child`}>
          <button onClick={handleSubmit}>Next</button>
        </Link>
      </div>
      <PageFooter imagescr={logo} />
    </div>
  );
}

export default SignUpPage;
