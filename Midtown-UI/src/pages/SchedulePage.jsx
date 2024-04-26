import React, { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Taskbar from "../components/Taskbar";
import logo from "../HelpingHands3.png";
import config from "../config";
import PageFooter from "../components/PageFooter";

function SchedulePage() {
  const [appDate, setAppDate] = useState(null);
  const [dropOff, setDropOff] = useState(null);
  const [pickUp, setPickUp] = useState(null);
  const {user_id} = useParams();
  const parsedUserId = parseInt(user_id);
  const handleSubmit = async () => {
    const dataToSend = {
      app_date: appDate,
      start_time: dropOff,
      end_time: pickUp,
    };
    try {
      const response = await axios.post(
        `${config.baseApiUrl}/payment`,
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
            onChange={(e) => setAppDate(e.target.value)}
            value={appDate}
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
            onChange={(e) => setDropOff(e.target.value)}
            value={dropOff}
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
            onChange={(e) => setPickUp(e.target.value)}
            value={pickUp}
            type="time"
            placeholder="5:30pm"
            className="input input-bordered"
            required
          />
        </div>
        <Link to={`/${parsedUserId}/price`}>
          <button>Next</button>
        </Link>
      </div>
      <PageFooter imagescr={logo} />
    </div>
  );
}

export default SchedulePage;
