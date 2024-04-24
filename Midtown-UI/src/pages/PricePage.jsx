import React from "react";
import { Link } from "react-router-dom";
import Taskbar from "../components/Taskbar";
import logo from "../HelpingHands3.png";
import PageFooter from "../components/PageFooter";

function PricePage() {
  return (
    <div>
      <Taskbar imagesrc={logo} />
      <div>
        <ul className="steps font-xl">
          <li className="step step-primary">Sign Up</li>
          <li className="step step-primary">Child Info.</li>
          <li className="step step-primary">Schedule</li>
          <li className="step step-primary">Price</li>
        </ul>
        <ul>
          <label className="signup text-xl font-bold">Payment</label>
        </ul>
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input type="text" className="grow" placeholder="Midtown" required />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Card Number</span>
          </div>
          <input
            type="number"
            placeholder="1234 1234 1234 1234"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Expiration</span>
          </div>
          <input
            type="date"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">CVC</span>
          </div>
          <input
            type="number"
            placeholder="CVC"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Zip code</span>
          </div>
          <input
            type="number"
            placeholder="12345"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <button
          type="submit"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Submit
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Account created and payment made! Thank you.
            </h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link to="/" className="btn">
                  Close
                </Link>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <PageFooter imagescr={logo} />
    </div>
  );
}

export default PricePage;
