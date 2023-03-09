import React from "react";
import { Link } from "react-router-dom";
import { NavData } from "../data/NavData";
import wlogo from "../../assets/images/w-logo.png";
import { BiChevronDown } from "react-icons/bi";

function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container justify-content-between">
          <a className="navbar-brand" href="#">
            <img
              src={wlogo}
              width="200"
              height="50"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item px-2 text-dark">
                <a className="nav-link active " aria-current="page" href="#">
                  SOLUTION
                </a>
              </li>

              <li className="nav-item px-2 dropdown ">
                <a
                  className="nav-link dropdown-toggle text-dark custom-caret"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PRODUCTS <i className="fa-sharp fa-solid fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item px-2 dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  INDUSTRIES <i className="fa-sharp fa-solid fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item px-2 dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  RESOURCES <i className="fa-sharp fa-solid fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link active" aria-current="page" href="#">
                  COMPANY
                </a>
              </li>
            </ul>
            <div>
              <button className=" btn-blue text-uppercase letter-spacing-2">
                Contact us now
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div></div>
    </header>
  );
}
export default NavBar;
