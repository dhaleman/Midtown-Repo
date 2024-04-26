import React from "react";
import { Link, useParams } from "react-router-dom";

function Taskbar(props) {
  const { user_id } = useParams();
  const parsedUserId = parseInt(user_id);
  return (
    <div className="fixed top-0 left-0 w-full bg-blue-700 p-4 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <Link to={`/${parsedUserId}`}>
              <img
                src={props.imagesrc}
                alt="Helping Hands Care Centers Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>
          <div className="text-left ml-5">
            <p className="font-bold text-2xl text-white outlined-text">
              Helping Hands Care Center
            </p>
          </div>
        </div>
        <div className="join">
          <div className="flex justify-end flex-1 px-2">
            <div className="flex items-stretch">
              <form method="dialog">
                <Link
                  to={`/${parsedUserId}/about`}
                  className="btn btn-ghost rounded-btn join-item text-white"
                >
                  About Us
                </Link>
              </form>
              <form method="dialog">
                <Link
                  to={`/${parsedUserId}/locations`}
                  className="btn btn-ghost rounded-btn text-white"
                >
                  Locations
                </Link>
              </form>
              <form method="dialog">
                <Link
                  to={`/${parsedUserId}/schedule`}
                  className="btn btn-ghost rounded-btn join-item text-white"
                >
                  Schedule
                </Link>
              </form>
              <div className="dropdown dropdown-end">
                <button className="btn btn-ghost rounded-btn text-white">
                  Services
                </button>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] p-2 shadow bg-blue-100 rounded-box w-25 mt-4"
                  style={{ visibility: "visible" }}
                >
                  <li>
                    <Link
                      to={`/${parsedUserId}/childcare`}
                      className="text-blue-700"
                    >
                      Child
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/${parsedUserId}/petcare`}
                      className="text-blue-700"
                    >
                      Pet
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/${parsedUserId}/elderly`}
                      className="text-blue-700"
                    >
                      Elderly
                    </Link>
                  </li>
                </ul>
              </div>
              <form method="dialog">
                <Link
                  to={`/${parsedUserId}/feedback`}
                  className="btn btn-ghost rounded-btn join-item text-white"
                >
                  Feedback
                </Link>
              </form>
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
              <Link
                to={`/${parsedUserId}/login`}
                className="btn btn-ghost rounded-btn text-white"
              >
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
                  <a className="justify-between text-white">Profile</a>
                </li>
                <li>
                  <a className="text-white">Settings</a>
                </li>
                <li>
                  <a className="text-white">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taskbar;
