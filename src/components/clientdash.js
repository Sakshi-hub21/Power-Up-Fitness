import React from 'react';
import './clientdash.css';
import { useNavigate } from 'react-router-dom';

export default function Clientdash() {
  const navigate = useNavigate();

  const submit = () => {
    navigate('/');
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 bg-slide">
          <button type="submit" onClick={submit} className="btn btn-primary button-3">
            Log Out
          </button>
          <h1 className="h1-slide">Welcome Client</h1>
        </div>
      </div>
    </div>
  );
}
