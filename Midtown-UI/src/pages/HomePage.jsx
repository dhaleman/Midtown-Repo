import React from "react";
import Taskbar from "../components/Taskbar.jsx";
import logo from "../HelpingHands3.png";
import PageFooter from "../components/PageFooter.jsx";

function HomePage() {
  return (
    <div>
      <Taskbar imagesrc={logo} />
      <div className="flex flex-row">
      <div className="hero">
        <div className="hero-content text-left">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
        </div>
      </div>
      <PageFooter imagesrc={logo} />
    </div>
  );
}

export default HomePage;
