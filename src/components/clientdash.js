import React from 'react'
import "./clientdash.css"
import { useNavigate } from "react-router-dom";

export default function Clientdash(){
    const navigate = useNavigate();
    const submit=()=>{
      navigate("/");
    }
  return (
    <>
    
  <div className="bg-slide">
  <button type="submit" onClick={submit} className="btn btn-primary lg button-3">
    Log Out
  </button>
      <h1 className="h1-slide text-center">Welcome Client</h1>
     

    </div>
    </>
    
  )
}
