import React from 'react'
import logo from "../fit1.png";
import { Link } from "react-router-dom";
import './navigation.css'


class Navigation extends React.Component {
    
    render() {

        return (
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

                    <Link to="/appointment">
                    <button type="button " className="btn btn-primary btn-lg mx-5">
                      Book An Appointment
                    </button></Link>                  
                  </ul>
                </div>
              </div>
            </nav>
    
          </div>
        );
      }
    }
export default Navigation;