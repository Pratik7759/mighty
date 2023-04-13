import React from "react";
import "./Header.css";
import logo from "../images/logo.webp";
// import Trialbutton from "../trialbutton/Trialbutton";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
      <div class="container-fluid py-2">
        <a class="navbar-brand" href="#">
          <img className="img-fluid w-50  " src={logo} alt="Responsive image" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active fw-normal" aria-current="page" href="#">
                Feature
              </a>
            </li>
            
            <li class="nav-item ">
              <a class="nav-link active " href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link active " href="#">
                About
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <button class="btn btn-1 me-3" type="submit">
              Sign In
            </button>

            <button class="btn btn-2  " type="submit">
              Start Your Free Trial
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
