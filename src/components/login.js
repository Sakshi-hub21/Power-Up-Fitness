import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

   const [showInvalidPopup, setShowInvalidPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send login data to the backend
    try {
      const response = await fetch("https://power-up-fitness-database1.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        console.log(loginData.username);
        navigate("/dashboard");
        // Handle success, e.g., redirect to a dashboard
        setShowSuccessPopup(true); 
        console.log("Login successful!");
      } else {
        // Handle error, e.g., show an error message
        setShowInvalidPopup(true); 
        console.error("Invalid username or password");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleCloseInvalidPopup = () => {
    setShowInvalidPopup(false);
  };

  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <>
      <div
        className="login-bg d-flex justify-content-center align-items-center "
        style={{ width: "100vw", height: "100vh" }}
      >
        <div className="login-container rounded shadow-lg">
          <form onSubmit={handleSubmit} className="login-form">
            <h1 className="text-center mb-4"> Admin Login</h1>
  
            <div className="input-marg d-flex flex-column" id="text-design">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={loginData.username}
                onChange={handleChange}
                className="input-field my-2 px-4 py-2"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleChange}
                className="input-field my-2 px-4 py-2"
              />
            </div>
            <button
              type="submit"
              className="login-button w-100 text-center btn btn-info rounded p-2 my-2"
            >
              <span className="font-weight-bold text-white">LOGIN</span>
            </button>
          </form>
        </div>
      </div>

          {showInvalidPopup && (
        <div className="popup invalid-popup">
          <p>Invalid username or password. Please try again.</p>
          <button onClick={handleCloseInvalidPopup}>Close</button>
        </div>
      )}

      {showSuccessPopup && (
        <div className="popup success-popup">
          <p>Login successful! Redirecting...</p>
          {/* You can use setTimeout to automatically close the success popup after a certain duration */}
          {/* setTimeout(() => setShowSuccessPopup(false), 3000); */}
          <button onClick={handleCloseSuccessPopup}>Close</button>
        </div>
      )}
    </>
  );
};

export default Login;
