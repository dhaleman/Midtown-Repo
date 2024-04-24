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
        <ul className="steps font-xl">
          <li className="step step-primary">Sign Up</li>
          <li className="step step-primary">Child Info.</li>
          <li className="step step-primary">Schedule</li>
          <li className="step">Price</li>
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
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Schedule Appointment
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg">
                    Thank you for scheduling an appointment with us!
                  </h3>
                  <p className="py-4">
                    Press ESC key or click the button below to close
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
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
