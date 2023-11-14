import Sidebar from "./sidebar";
import React, { useState, useEffect } from "react";
import "./addclient.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Addclient = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  useEffect(() => {
    async function fetchDataFromServer() {
      try {
        const response = await fetch("https://power-up-fitness-database1.onrender.com/addclient", {
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
      const response = await fetch(`https://power-up-fitness-database1.onrender.com/delete/${id}`, {
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
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Sidebar />
        </div>
        <div className="col-md-8">
          <h2 className="text-center">Client Appointment Details</h2>
          <div className="block">
            <table className="table table-dark">
              <thead>
                <tr>
                  
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Location</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data1 &&
                  data1.map((item, index) => (
                    <tr key={index}>
                     
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.Location}</td>
                      <td>
                        <Link to={`/edit/${item.id}`} class="btn btn-info">
                          Update
                        </Link>

                        <button
                          type="button"
                          onClick={() => handleDelete(item.id)}
                          class="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <Link to="/add" className="nav-link1 ">
            Add
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Addclient;
