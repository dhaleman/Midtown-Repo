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
            <Link to="/" className="btn btn-primary">
              Home
            </Link>
          </div>
        </div>
      </div>
      <PageFooter imagescr={logo} />
    </div>
  );
}

export default AboutUs;
