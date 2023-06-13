import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white px-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="!">
            <i className="bi bi-lightbulb-fill"></i> PedaMelan
          </a>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-link active"
                  onClick={handleClick}
                >
                  <i className="bi bi-briefcase-fill"></i> Find Work
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/posts"
                  activeClassName="active"
                  className="nav-link"
                  onClick={handleClick}
                >
                  <i className="bi bi-file-post-fill"></i> Posts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/myProfile"
                  activeClassName="active"
                  className="nav-link"
                  onClick={handleClick}
                >
                  <i className="bi bi-person-square"></i> My Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/overview"
                  activeClassName="active"
                  className="nav-link"
                  onClick={handleClick}
                >
                  <i className="bi bi-clipboard2-fill"></i> Overview
                </NavLink>
              </li>
            </ul>
            <div className="d-flex ">
              <div className="mx-1 nav-item p-2 rounded-circle bg-body-tertiary">
                <NavLink
                  exact
                  to="/notification"
                  activeClassName="active"
                  className="nav-link"
                  onClick={handleClick}
                >
                  <i className="bi bi-bell-fill"></i>
                </NavLink>
              </div>
              <div className="mx-1 nav-item p-2 rounded-circle bg-body-tertiary">
                <NavLink
                  exact
                  to="/profile"
                  activeClassName="active"
                  className="nav-link"
                  onClick={handleClick}
                >
                  <i className="bi bi-person-circle"></i>
                </NavLink>
              </div>
            </div>
              <div className="ms-3" onClick={handleClick}>
                <p><strong>Ankit Verma</strong><br />av9616@gmail.com</p>
              </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;