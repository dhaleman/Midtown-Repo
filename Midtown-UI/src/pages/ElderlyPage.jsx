import React, { useState } from "react";
import Taskbar from "../components/Taskbar";
import logo from "../HelpingHands3.png";
import PageFooter from "../components/PageFooter";
import { Link, useParams } from "react-router-dom";

function ElderlyPage() {
  return (
    <div>
      <Taskbar imagesrc={logo} />
      <div className="flex flex-row">
        <div className="hero">
          <div className="hero-content text-left">
            <img
              src="https://st2.depositphotos.com/1177973/6346/i/450/depositphotos_63463595-stock-photo-old-and-young-holding-hands.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Our Elderly Care</h1>
              <p className="py-6">
                Helping Hand Care Centers' vision is to help modern working
                families with daytime and overnight childcare, pet care, and
                elderly care. We provide trustworthy and cost-effective
                on-campus and off-campus care centers.
              </p>
              <Link to={`/schedule`} className="btn btn-primary">
                Schedule
              </Link>
            </div>
          </div>
        </div>
      </div>
      <PageFooter imagesrc={logo} />
    </div>
  )
}

export default ElderlyPage