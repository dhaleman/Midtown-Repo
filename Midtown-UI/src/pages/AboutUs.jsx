import React from "react";
// import HomePage from "./HomePage";
import Taskbar from "../components/Taskbar.jsx";
import logo from "../HelpingHands3.png";
import { Link } from "react-router-dom";
import PageFooter from "../components/PageFooter";

function AboutUs() {
  return (
    <div>
      <Taskbar imagesrc={logo} />
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://www.mecep.org/wp-content/uploads/2023/05/AdobeStock_415403998-scaled-e1683661739457.jpeg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6">
              Helping Hand Care Centers(HHCC) has grown to more than 120
              locations in 15 states with over 1500+ employees nationally since
              their founding in 2007. We provide care for children, pets, and
              elderly. HHCC welcomes you to join our family! We invite you to
              schedule a tour of our facilities, meet our team, and learn more
              about how we can help you.
            </p>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Feedback</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-20"
                placeholder="Comments, questions, concerns."
              ></textarea>
              <div className="label">
                <span className="label-text-alt">
                  Let us know how we can help you!
                </span>
              </div>
            </label>
            <div className="form-control mt-6">
              <button
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Submit
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg">
                    We appreciate your feedback!
                  </h3>
                  <p className="py-4">
                    Press ESC key or click the button below to go back home
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <Link to="/">Close</Link>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>

            {/* <ul>
              <Link to="/" className="btn btn-primary">
                Home
              </Link>
            </ul> */}
          </div>
        </div>
      </div>
      <PageFooter imagescr={logo} />
    </div>
  );
}

export default AboutUs;
