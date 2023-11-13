import React , { useState }from "react";
import "./appointment.css";
import logo from "../fit1.png";
import { Link } from "react-router-dom";
import './navbar.css'
import { useNavigate } from "react-router-dom";

export default function Appointment() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Clear the form data
    setName("");
    setPhoneNumber("");
    setMessage("");
    setEmailAddress("");

    navigate("/");
  };
  return (
    <>
    <div className="container1 text-center">
            <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" id="navbar">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  <img
                    src={logo}
                    alt="Logo"
                    style={{ height: "80px", width: "80px" }}
                  />
                  Power Up Fitness
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item mx-4">
                      <a>
                        <Link to="/" className="nav-link">
                        Home
                      </Link>
                      </a>
                    </li>
                    <li class="nav-item mx-4">
                    <Link to="/services" className="nav-link">
                        Services
                      </Link>
                    </li>
                    <li class="nav-item mx-4">
                    <Link to="/aboutus" className="nav-link">
                        About Us
                      </Link>
                    </li>
                  </ul>
    
                  <ul className="navbar-nav navbar-right">
                    <li className="nav-item dropdown drop1">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Login
                      </a>
                      <ul className="dropdown-menu">
                      <Link to="/login" className="dropdown-item">
                    Admin
                  </Link>
                      <Link to="/login" className="dropdown-item">
                    Client
                  </Link>
                        {/* <li className="dropdown-item ">Admin</li>
                        <li className="dropdown-item">Client</li> */}
                      </ul>
                    </li>
                    <li className="nav-item dropdown drop1">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      SignUp
                    </a>
                    <ul className="dropdown-menu">
                      <Link to="/signup" className="dropdown-item">
                        Admin
                      </Link>
                      <Link to="/signupclient" className="dropdown-item">
                        Client
                      </Link>
                    </ul>
                  </li>

                    <Link to="/appointment">
                    <button type="button " className="btn btn-primary btn-lg mx-5">
                      Book An Appointment
                    </button></Link>                  
                  </ul>
                </div>
              </div>
            </nav>
    
          </div>
     <h3 className="text-center">Appointment Information</h3>
      <div
        class="d-flex align-items-center justify-content-center"
        id="container-fluid"
      >
       
        <div class="p-2 text-white shadow rounded-3" id="container-appoint">
          <form className="form">
            <div class="form-group" id="text-area">
              <input
                type="name"
                class="form-control area"
                id="exampleFormControlInput1"
                placeholder="Enter your name"
                value={name} onChange={(event) => setName(event.target.value)} 
                
              />
            </div>
            <div class="form-group" id="text-area">
              <input
                type="email"
                class="form-control area"
                id="exampleFormControlInput1"
                placeholder="Enter your email address"
                value={emailAddress} onChange={(event) => setEmailAddress(event.target.value)}
                
              />
            </div>
            <div class="form-group" id="text-area">
              <input
                type="number"
                class="form-control area"
                id="exampleFormControlInput1"
                placeholder="Enter your phone number"
                value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}
              
              />
            </div>

            <div class="form-group" id="text-area">
              <textarea
                class="form-control area"
                id="exampleFormControlTextarea1"
                rows="6"
                placeholder="Message"
                value={message} onChange={(event) => setMessage(event.target.value)} 
     
              ></textarea>
            </div>
          </form>

          <div className="text-center">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              id="button"
              onClick={handleSubmit}

            >
              Submit
            </button>

            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">
                      Information Stored
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close">
                    </button>
                  </div>
                  <div class="modal-body">

                    <p> Thank you!.....You will soon hear from us.....</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                      
                    >
                      Ok
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}
