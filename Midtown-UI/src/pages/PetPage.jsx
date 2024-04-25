import React, { useState } from "react";
import Taskbar from "../components/Taskbar";
import logo from "../HelpingHands3.png";
import PageFooter from "../components/PageFooter";
import { Link } from "react-router-dom";

function PetPage() {
  return (
    <div>
      <Taskbar imagesrc={logo} />
      <div className="flex flex-row">
        <div className="hero">
          <div className="hero-content text-left">
            <img
              src="https://img.freepik.com/free-photo/kitten-puppy-ai-generated-image_268835-6570.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Our Pet Care</h1>
              <p className="py-6">
                Helping Hand Care Centers' vision is to help modern working
                families with daytime and overnight childcare, pet care, and
                elderly care. We provide trustworthy and cost-effective
                on-campus and off-campus care centers.
              </p>
              <Link to="/schedule" className="btn btn-primary">
                Schedule
              </Link>
            </div>
          </div>
        </div>
      </div>
      <PageFooter imagesrc={logo} />
    </div>
  );
}

export default PetPage;
