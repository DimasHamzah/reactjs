import React from 'react';
import { Link } from 'react-router-dom';

function Navigasi() {
  return (
    <div className="header">
      <Link to="/" className="navbar">Home</Link>
      <Link to="/leaderboards" className="navbar">Leadersboard</Link>
    </div>
  );
}

export default Navigasi;
