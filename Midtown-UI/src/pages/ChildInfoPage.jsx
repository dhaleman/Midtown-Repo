import React from "react";
import { Link } from "react-router-dom";
import Taskbar from "../components/Taskbar";
import logo from "../HelpingHands3.png";
import PageFooter from "../components/PageFooter";

function ChildInfoPage() {
  return (
    <div>
      <Taskbar imagesrc={logo} />
      <div>
        <ul className="steps font-xl">
          <li className="step step-primary">Sign Up</li>
          <li className="step step-primary">Child Info.</li>
        </ul>
        <ul>
          <label className="signup text-xl font-bold">Child Information</label>
        </ul>
        <label className="input input-bordered flex items-center gap-2" >
          Child's Name
          <input type="text" className="grow" placeholder="Midtown Jr." required/>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Birthday
          <input type="date" className="grow" placeholder="1/2/2023" required/>
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
        <div className="form-control mt-6">
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Submit
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Thank you for signing up!
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
      </div>
      <PageFooter imagescr={logo} />
    </div>
  );
}

export default ChildInfoPage;
