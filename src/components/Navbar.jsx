import React from "react";

export const Navbar = () => {
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="">
          Salman Khan
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <a className="is-uppercase">Personal</a>
        </div>
        <div className="navbar-item">
          <a className="is-uppercase">History</a>
        </div>
        <div className="navbar-item">
          <a className="is-uppercase">Github</a>
        </div>
        <div className="navbar-item">
          <a className="is-uppercase">Contact</a>
        </div>
      </div>
    </nav>
  );
};
