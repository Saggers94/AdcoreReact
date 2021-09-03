import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-dark static-top">
        <div class="container">
          <Link class="nav-link" to="/">
            Adcore Exam
          </Link>
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
              <li class="nav-item">
                <Link class="nav-link" to="/data">
                  Data-Collection
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/create">
                  Create-Data
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default HeaderComponent;
