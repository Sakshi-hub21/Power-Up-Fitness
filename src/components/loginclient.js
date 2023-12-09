import React, { useState } from "react";
import "./loginclient.css";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    // Simulating a delay of 2 seconds for demonstration purposes
    // Replace this with your actual login logic
    setTimeout(() => {
      setLoading(false);
      navigate("/clientdash");
      console.log("Login successful!");
    }, 2000);
  };

  return (
    <>
      <div
        className={`login-bg d-flex justify-content-center align-items-center ${loading ? "blur-background" : ""}`}
        style={{ width: '100vw', height: '100vh' }}
      >
        <div className="login-container rounded shadow-lg">
          <form onSubmit={handleSubmit} className="login-form">
            <h1 className="text-center mb-4">Client Login</h1>
            <div className="input-marg d-flex flex-column" id="text-design">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input-field my-2 px-4 py-2"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input-field my-2 px-4 py-2"
                required
              />
            </div>
            <button
              type="submit"
              className="login-button w-100 text-center btn btn-info rounded "
              disabled={loading}
            >
              <span className="font-weight-bold text-white">
                LOGIN
              </span>
            </button>
          </form>
        </div>
      </div>
      {loading && (
        <div className="full-page-loader">
          <ClipLoader color="#4556FC" loading={true} size={70} />
        </div>
      )}
    </>
  );
};

export default Login;
