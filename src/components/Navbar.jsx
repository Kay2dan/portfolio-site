import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="">
          Salman Khan
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <a className="">Personal</a>
        </div>
        <div className="navbar-item">
          <a className="">History</a>
        </div>
        <div className="navbar-item">
          <a className="">Github</a>
        </div>
        <div className="navbar-item">
          <a className="">Contact</a>
        </div>
      </div>
    </nav>
  );
};
