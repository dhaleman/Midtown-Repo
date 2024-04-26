import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Taskbar from "../components/Taskbar";
import logo from "../HelpingHands3.png";
import config from "../config";
import PageFooter from "../components/PageFooter";
import { data } from "autoprefixer";

function ProfilePage() {

    // try {
    //     const response = await axios.get(
    //         `${config.baseApiUrl}/profile`,
    //     );
    //     console.log(data);
    //     } catch (error) {
    //     console.log("error");
    //     }
    // };
    const [users, setUsers] = useState([]);
    const fetchOrders = async () => {
      const rsp = await axios.get(`${config.baseApiUrl}/user/3`);
      const usersreceived = await rsp.data;
      setUsers(usersreceived);
    };
  
    // fetches the orders on the component render and looks for changes to
    // the orders to call another refresh
    useEffect(() => {
      fetchOrders();
    }, [users]);

  return (
    <div>
      <Taskbar imagesrc={logo} />
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Your Profile</h2>
          <p className="text-left">
            <label className="input input-bordered flex items-center gap-2">
              First Name
              <input
                value={users.first_name}
                type="text"
                className="grow"
                placeholder="Team"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Last Name
              <input
                value=""
                type="text"
                className="grow"
                placeholder="Midtown"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Username
              <input
                value=""
                type="text"
                className="grow"
                placeholder="midtownslay"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                value=""
                type="text"
                className="grow"
                placeholder="midtown@site.com"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Phone
              <input
                value=""
                type="text"
                className="grow"
                placeholder="888-123-4567"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Address
              <input
                value=""
                type="text"
                className="grow"
                placeholder="123 midtown ln"
                required
              />
            </label>
          </p>
        </div>
      </div>
      <PageFooter imagescr={logo} />
    </div>
  );
}

export default ProfilePage;
