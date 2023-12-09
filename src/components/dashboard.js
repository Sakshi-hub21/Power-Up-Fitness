// import Sidebar from "./sidebar";
import Sidebar from "./sidebar";
import React from "react";
import "./dashboard.css"
class Dashboard extends React.Component {
  render() {
    return (
      <div className="bg-slide d-flex justify-content-center align-items-center">
        
      <Sidebar />;
      <h1 className="h1-slide text-center">Welcome Trainer</h1>
    </div>
    
    );
    
    

  }
}

export default Dashboard;
