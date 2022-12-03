import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/" className="navbar">Kembali</Link>
    </div>
  );
}

export default Header;
