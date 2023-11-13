import React from "react";
import "./aboutus.css";
import logo from "../fit1.png";
import { Link } from "react-router-dom";
import './navbar.css'

export default function Aboutus() {
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
                      <Link to="/loginclient" className="dropdown-item">
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
    <h1 className="text-center">About Us</h1>
    <div class="d-flex flex-wrap justify-content-around container " id="container-about">
      
      <div class="row align-items-center">
        <div class="col">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Logo"
          />
        </div>
        <div class="col align-items-center">
          <p className="first-p">
            We are the fitness trainer website creator,we offer a comprehensive
            range of health, fitness, and training services. Our expertise
            includes Personal Training, Power Yoga, Muscle Rehabilitation, and
            Kickboxing. 
          </p>
          <p>
            In the pursuit of compelling and effective workouts, I understand
            the importance of tailor-made programs. Leveraging my experience and
            certification.Whether you prefer personal fitness training at home or seek
            guidance.
          </p>

        </div>
      </div>
    </div>
    </>
  );
}

