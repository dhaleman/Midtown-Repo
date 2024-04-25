import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Taskbar from "../components/Taskbar";
import logo from "../HelpingHands3.png";
import config from "../config";
import PageFooter from "../components/PageFooter";

function PricePage() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState(0);
  const [expiration, setExpiration] = useState(null);
  const [cVc, setCvc] = useState(0);
  const [zIp, setZip] = useState(0);

  const handleSubmit = async () => {
    const dataToSend = {
      card_name: cardName,
      card_number: cardNumber,
      exp_number: expiration,
      csv: cVc,
      zip: zIp,
    };
    console.log(dataToSend);
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
          <li className="step step-primary">Payment</li>
        </ul>
        <ul>
          <label className="signup text-xl font-bold">Payment</label>
        </ul>
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input
            onChange={(e) => setCardName(e.target.value)}
            value={cardName}
            type="text"
            className="grow"
            placeholder="Midtown"
            required
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Card Number</span>
          </div>
          <input
            onChange={(e) => setCardNumber(e.target.value)}
            value={cardNumber}
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
            onChange={(e) => setExpiration(e.target.value)}
            value={expiration}
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
            onChange={(e) => setCvc(e.target.value)}
            value={cVc}
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
            onChange={(e) => setZip(e.target.value)}
            value={zIp}
            type="number"
            placeholder="12345"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <div className="form-control mt-6">
          <button
            className="btn btn-primary"
            onClick={() => {
              handleSubmit();
              document.getElementById("my_modal_5").showModal();
            }}
          >
            Submit
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Payment made, thank you!</h3>
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

export default PricePage;
