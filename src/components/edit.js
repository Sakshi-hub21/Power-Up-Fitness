import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "./edit.css"
import "react-datepicker/dist/react-datepicker.css";
export default function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [client, setClient] = useState({
    first_name: "",
    last_name: "",
    Location: "",
    Date: "",
    time: "",
  });
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    location: "",
    date: "",
    time1: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://power-up-fitness-database1.onrender.com/read/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        setClient(data[0] || {});
        console.log(client.time);
      } catch (error) {
        console.error("Error:", error);
        // Handle errors, e.g., show an error message to the user
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    // Update values whenever client changes
    setValues({
      fname: client.first_name,
      lname: client.last_name,
      location: client.Location,
      date: client.Date ? client.Date.split("T")[0] : "",
      time1: client.time,
    });
  }, [client]);
  console.log("this is set values data", values.time1);
  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://power-up-fitness-database1.onrender.com:10000/update/${id}`, {
        method: "PUT", // or "PATCH" depending on your API
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      // Handle successful update, e.g., show a success message to the user
      console.log("Data updated successfully");
      navigate("/addclient");
    } catch (error) {
      console.error("Error updating data:", error);
      // Handle errors, e.g., show an error message to the user
    }
  };

  return (
    <div className="body-f">
    <h1 className=" h1-add text-center mb-3">Update Client Data</h1>
    <div className="container-add d-flex align-items-center justify-content-center ">
    <form onSubmit={handleUpdate}>
      <div className="form-group">
        <label htmlFor="exampleInputfname">First Name</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          value={values.fname}
          aria-describedby="emailHelp"
          placeholder="Enter First Name"
          name="fname"
          onChange={(e) => setValues({ ...values, fname: e.target.value })}
        />
      </div>
      <div className="form-group input-1">
        <label htmlFor="exampleInputlname">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          value={values.lname}
          onChange={(e) => setValues({ ...values, lname: e.target.value })}
          aria-describedby="emailHelp"
          placeholder="Enter Last Name"
          name="lname"
        />
      </div>
      <div className="form-group input-1">
        <label htmlFor="exampleInputloc">Location</label>
        <input
          type="text"
          value={values.location}
          onChange={(e) => setValues({ ...values, location: e.target.value })}
          className="form-control"
          id="location"
          name="loc"
          placeholder="Location"
        />
      </div>
      <div className="form-group input-1">
        <label htmlFor="exampleInputdat">Date</label>
        <input
          value={values.date}
          onChange={(e) => setValues({ ...values, date: e.target.value })}
          type="date"
          className="form-control"
          id="date"
          name="dat"
          placeholder="Date"
        />
      </div>

      <div className="form-group input-1">
        <label htmlFor="exampleInputloc">Time for Appointment</label>
        <DatePicker
          onChange={(date) =>
            setValues({
              ...values,
              time1: date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              }),
            })
          }
          showTimeSelect
          value={values.time1}
          showTimeSelectOnly
          timeIntervals={30}
          name="time"
          dateFormat="HH:mm"
          timeCaption="Time"
          className="rounded-clock-picker"
          placeholderText="Time for Appointment"
        />
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
      <button type="submit" className="btn btn-primary button">
        Submit
      </button>
      </div>
    </form>
    </div>
    </div>
  );
}
