import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import "./add.css";
export default function Add() {

  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    date: "",
    time: new Date(),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleTimeChange = (time) => {
    setFormData({ ...formData, time: time });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://power-up-fitness-database1.onrender.com/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        console.log("Data sent successfully");
        navigate("/addclient");
      } else {
        // Handle error
        console.error("Error sending data to the server");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
    <div className="body-f">
    <h1 className=" h1-add text-center mb-3">Add Client Data</h1>
    <div className="container-add d-flex align-items-center justify-content-center ">
    
      <form onSubmit={handleSubmit}>
      <div className="form-group input-1">
            <label htmlFor="fname">First Name</label>
        <input
          type="text"
          className="form-control input-2"
          id="firstName"
          aria-describedby="emailHelp"
          placeholder="Enter First Name"
          name="fname"
          onChange={handleChange}
        />
      </div>
      <div className="form-group input-1">
            <label htmlFor="fname">Last Name</label>
        <input
          type="text"
          className="form-control input-2"
          id="lastName"
          aria-describedby="emailHelp"
          placeholder="Enter Last Name"
          name="lname"
          onChange={handleChange}
        />
      </div>
      <div className="form-group input-1">
            <label htmlFor="fname">Location</label>
        <input
          type="text"
          className="form-control input-2"
          id="location"
          name="loc"
          placeholder="Location"
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group input-1">
      <label for="doa">Date of Appointment</label>
        <input
          type="date"
          className="form-control input-2"
          id="date"
          name="dat"
          placeholder="Date"
          onChange={handleChange}
        />
      </div>
      <div className="form-group input-1">
      <label for="toa">Time for an appointment</label>
        <DatePicker
          selected={formData.time}
          onChange={handleTimeChange}
          showTimeSelect
          showTimeSelectOnly={true}
          timeIntervals={30}
          dateFormat="HH:mm"
          timeCaption="Time"
          className="rounded-clock-picker"
          placeholderText="Time to book an appointment"
        />
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
      <button type="submit" className="btn btn-primary lg button-1">
        Submit
      </button>
      </div>
      
    </form>
    </div>
    </div>

   
    

    </>
    
  );
}
