import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar.js";
import Services from "./components/services.js";
import Aboutus from "./components/aboutus.js";
import Login from "./components/login.js";
import LoginClient from "./components/loginclient.js";
import Appointment from "./components/appointment.js"
import SignUp from "./components/Signup.js"
import SignUpClient from "./components/SIgnupclient.js"
import Dashboard from "./components/dashboard.js";
import Addclient from "./components/addclient.js"
import Add from "./components/add.js"
import MyCalendar from "./calender.js"
import Edit from "./components/edit.js"

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loginclient" element={<LoginClient/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signupclient" element={<SignUpClient/>} />
        <Route path="/addclient" element={<Addclient/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/calender" element={<MyCalendar/>} />
        <Route path="/edit/:id" element={<Edit/>} />

      </Routes>
    </Router>

    </>

  );
}

export default App;
