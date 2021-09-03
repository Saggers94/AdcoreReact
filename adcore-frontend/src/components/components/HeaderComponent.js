import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-dark static-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            NASA Spacecrafts
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item ">
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/spacecrafts">
                  Spacecrafts
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/register">
                  Register
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default HeaderComponent;
