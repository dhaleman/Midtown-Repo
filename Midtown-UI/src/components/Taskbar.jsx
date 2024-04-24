import React from "react";
import { Link } from "react-router-dom";

function Taskbar(props) {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-100 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <div>
          <Link to="/">
            <img
              src={props.imagesrc}
              alt="Helping Hands Care Centers Logo"
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="text-left ml-5">
          <p className="font-bold text-2xl">Helping Hands Care Center</p>
        </div>
      </div>
      <div className="join">
        <div className="flex justify-end flex-1 px-2">
          <div className="flex items-stretch">
            <form method="dialog">
              <Link to="/about" className="btn btn-ghost rounded-btn join-item">
                About Us
              </Link>
            </form>
            <div className="dropdown dropdown-end">
              <form method="dialog">
                <button className="btn btn-ghost rounded-btn">Services</button>
              </form>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-25 mt-4"
              >
                <li>
                  <a>Child</a>
                </li>
                <li>
                  <a>Pet</a>
                </li>
                <li>
                  <a>Elderly</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered join-item w-50"
            />
          </div>
          <form method="dialog">
            <Link to="/login" className="btn btn-ghost rounded-btn">
              Sign Up/Login
            </Link>
          </form>
          <div className="dropdown dropdown-end join-item">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Profile"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-25"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taskbar;
