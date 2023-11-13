// Sidebar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  useEffect(() => {
    async function fetchDataFromServer() {
      try {
        const response = await fetch("http://localhost:5000/addclient", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data12 = await response.json();

        setData(data12.emails[0]);
        setData1(data12.otherData);
        // Directly log data from the fetch operation
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }

    fetchDataFromServer();
  }, []);
  useEffect(() => {
    if (data1) {
      console.log(data1[0].first_name);
      console.log(data1[0].last_name);
    }
  }, [data1]);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await fetch(`http://localhost:5000/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Data deleted successfully");
        window.location.reload();
      } else {
        console.error("Error deleting data from the serverss");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="main-body">
      <div className="sidebar">
      <div className="logo">
        <img
          src={
            "https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-29.png"
          }
          style={{ height: "100px", width: "100px" }}
        />

        <h6 className="h2-data">{data}</h6>
        
      </div>
      <div className="logo1"></div>
      <ul className="navigation">
        <li>
          <Link to="/calender" className="nav-link side-hover">
            Home
          </Link>
        </li>
        <li>
          <Link to="/addclient" className="nav-link side-hover">
            Add Clients
          </Link>
        </li>
        {/* <li>
          <Link to="/calender" className="nav-link">
            Calendar
          </Link>
        </li> */}
        <li>
          <Link to="/" className="nav-link side-hover">
            Log out
          </Link>
        </li>
        <></>
      </ul>
    </div>
    </div>
    
  );
};

export default Sidebar;
