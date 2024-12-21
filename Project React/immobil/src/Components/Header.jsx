import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="header">
        <span className="logo" />
        <h1 className="title">Immobil</h1>
        <nav className="menu">
          <ul>
            <il className="il-style">
              <Link to="/buy" className="menu-link buy">
                Acheter
              </Link>
            </il>
            <il className="il-style">
              <Link to="/rent" className="menu-link rent">
                Louer
              </Link>
            </il>
            <il className="il-style">
              <Link className="menu-link">Vendre</Link>
            </il>
            <il className="il-style">
              <Link className="menu-link">Conseil</Link>
            </il>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
