import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Taskbar from "../components/Taskbar";
import logo from "../HelpingHands3.png";
import axios from "axios";
import config from "../config";
import PageFooter from "../components/PageFooter";

function LoginPage(props) {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");

  // fetches the orders on the component render and looks for changes to
  // the orders to call another refresh
  const handleSubmit = async () => {
    const dataToSend = {
      username: userName,
      password: passWord,
    };
    try {
      const response = await axios.post(
        `${config.baseApiUrl}/login`,
        dataToSend
      );
    } catch (error) {
      console.log("uh oh");
    }
  };
  return (
    <div>
      <Taskbar imagesrc={logo} />
      <div>
        <label className="signup text-xl font-bold">Login</label>
<<<<<<< HEAD
        <label className="input input-bordered flex items-center gap-2">
=======
<<<<<<< HEAD:Midtown-UI/src/pages/LoginPage.jsx
        
=======
        {/* <label className="input input-bordered flex items-center gap-2">
>>>>>>> 72f8a68f4dfacf75d3c7f8e36e706439d4d694b9
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow" placeholder="Email" />
<<<<<<< HEAD
        </label>
=======
        </label> */}
>>>>>>> 4453ca415e9c38edb8bdb31f33b9fe4061ef85a6:src/pages/LoginPage.jsx
>>>>>>> 72f8a68f4dfacf75d3c7f8e36e706439d4d694b9
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            type="text"
            className="grow"
            placeholder="Username"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={passWord}
            required
            type="password"
            className="grow"
          />
        </label>
        <label className="label">
          <Link
            to={`/signup`}
            href="#"
            className="label-text-alt link link-hover"
          >
            Don't have an account?
          </Link>
        </label>
        <Link to={`/`}>
          <button
            onClick={() => {
              handleSubmit();
            }}
          >
            Login
          </button>
        </Link>
      </div>
      <PageFooter imagesrc={logo} />
    </div>
  );
}

export default LoginPage;
