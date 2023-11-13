import React, { useState } from "react";
import "./loginclient.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit=()=>{
    navigate("/clientdash");
  }
  return (
    <>
    <div className="login-bg d-flex justify-content-center align-items-center " style={{ width: '100vw', height: '100vh' }}>
      <div className="login-container rounded shadow-lg">
    
      <form onSubmit={handleSubmit} className="login-form">
        
          <h1 className="text-center mb-4"> Client Login</h1>
        <div className="input-marg d-flex flex-column" id="text-design">
          <input
            type="text"
            name="username"
            placeholder="Username"
           
    
            className="input-field my-2 px-4 py-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            
            className="input-field my-2 px-4 py-2"
          />
        </div>
        <button type="submit" className="login-button w-100 text-center btn btn-info rounded p-2 my-2">
          <span className="font-weight-bold text-white">
            LOGIN
          </span>
        </button>
      </form>
    </div>
    </div>
    
    </>
    
  );
};

export default Login;
