import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

const Project = () => (
  <div className="container" id="project">
    <div className="title">Projects</div>
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Picture Game</h4>
            <p className="card-text">Click on all pictures once to win.</p>
            <div className="row">
              <div className="col-md-4">
                <a href="https://github.com/chen64" className="nav-link">
                  Github
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="https://gentle-forest-68010.herokuapp.com/"
                  className="nav-link"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Email Send</h4>
            <p className="card-text">
              Log in and get credits to send emails then recieve responses.
            </p>
            <div className="row">
              <div className="col-md-4">
                <a href="https://github.com/chen64/reactS" className="nav-link">
                  Github
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="https://calm-shelf-44720.herokuapp.com"
                  className="nav-link"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Food search</h4>
            <p className="card-text">
              Enter a zip code to find nearby restraurants.
            </p>
            <div className="row">
              <div className="col-md-4">
                <a
                  href="https://github.com/chen64/Weather"
                  className="nav-link"
                >
                  Github
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="https://peaceful-hollows-72695.herokuapp.com"
                  className="nav-link"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Project;
