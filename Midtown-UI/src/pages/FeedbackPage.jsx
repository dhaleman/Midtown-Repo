import React from "react";
// import HomePage from "./HomePage";
import Taskbar from "../components/Taskbar.jsx";
import logo from "../HelpingHands3.png";
import { Link, useParams } from "react-router-dom";
import PageFooter from "../components/PageFooter";

function FeedbackPage() {
  const {user_id} = useParams();
  const parsedUserId = parseInt(user_id);
  return (
    <div>
      <Taskbar imagesrc={logo} />
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold">Feedback</h1>
            <p className="py-6">
              Helping Hand Care Centers(HHCC) main concern is our customers.
              With this, we appreciate and value any feedback you may have.
              Your insights are invaluable to us and help us understand
              where we excel and where we can improve.
            </p>
            <label className="form-control">
              <textarea
                className="textarea textarea-bordered h-20"
                placeholder="Comments, questions, concerns."
              ></textarea>
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
                       <Link to={`/${parsedUserId}`}>Close</Link>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      <PageFooter imagescr={logo} />
    </div>
  )
}

export default FeedbackPage