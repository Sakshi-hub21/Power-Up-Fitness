import React from "react";
import logo from "../fit1.png";
import { Link } from "react-router-dom";
import './navbar.css'


export default function Services() {
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
      <h1 className="text-center mt-4">Our Services</h1>
      <div className=" d-flex flex-wrap justify-content-around container mt-5">
        <div
          className="card text-center"
          style={{
            width: "16rem",
            border: "2px solid black",
            margin: "5px",
            boxShadow: "5px 5px 5px black",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlldHxlbnwwfHwwfHx8MA%3D%3D"
            class="card-img-top"
            alt="..."
            style={{ height: "27vh" }}
          />

          <div className="card-body">
            <h5 className="card-title">Diet and Nutrition</h5>
            <p className="card-text">
              Diet and nutrition are essential for overall health and
              well-being.
            </p>
          </div>
        </div>
        <div
          className="card text-center"
          style={{
            width: "16rem",
            border: "2px solid black",
            margin: "5px",
            boxShadow: "5px 5px 5px black",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1520&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="card-img-top"
            alt="..."
            style={{ height: "27vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">Yoga/Power Yoga</h5>
            <p className="card-text">
              Yoga is an ancient mind and body practice various styles of yoga
              combine physical postures, breathing exercises, and meditation or
              relaxation.
            </p>
          </div>
        </div>
        <div
          className="card text-center align-items center"
          style={{
            width: "16rem",
            border: "2px solid black",
            margin: "5px",
            boxShadow: "5px 5px 5px black",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1522844990619-4951c40f7eda?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="card-img-top"
            alt="..."
            style={{ height: "27vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">Weight Management</h5>
            <p className="card-text">
              Achieving and maintaining a healthy weight, it is important for
              overall health and well-being.
            </p>
          </div>
        </div>
        <div
          className="card text-center"
          style={{
            width: "16rem",
            border: "2px solid black",
            margin: "5px",
            boxShadow: "5px 5px 5px black",
          }}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1672280783572-4a254a8e71d5?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="card-img-top"
            alt="..."
            style={{ height: "27vh" }}
          />
          <div className="card-body card-design">
            <h5 className="card-title">Personal Training</h5>
            <p className="card-text">
              Personal training is provided with a certified
              personal trainer who creates and delivers safe and effective
              workouts tailored to your individual goals and needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
