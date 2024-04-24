import React from 'react'
import logo from "../HelpingHands3.png";

function PageFooter(props) {
  return (
    <div>
      <footer className="footer fixed bottom-0 left-0 w-full bg-base-300 p-4 text-base-content">
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-1">
            <img
              src={props.imagesrc}
              alt="Helping Hands Care Centers Logo"
              className="h-12 w-auto ml-12"
            />
            <p>
              Helping Hands Care Center
              <br />
              Company Statement
            </p>
          </div>
          <div className="col-span-1 flex flex-col justify-between">
            <nav className="mb-1">
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover block">Terms of use</a>
              <a className="link link-hover block">Privacy policy</a>
              <a className="link link-hover block">Cookie policy</a>
            </nav>
            <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
          </div>
          <div className="col-span-1 flex justify-end">
            <p className="ml-12">Call Support Help Line at (012)345-6789</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PageFooter