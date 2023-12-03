import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer bg-dark">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center mt-5 mb-2">
              <img
                src={`https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg`}
                alt=""
                style={{ width: "120px", height: "100px" }}
              />
              <div className="about mt-3">
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  About Us
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center mt-5 mb-2">
              <h2 className="mb-4">Top Movies</h2>
              <p>Squid Game: The Challenge</p>
              <p>Bad Surgeon: Love Under the Knife</p>
              <p>Obliterated</p>
              <p>Young Sheldon</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center mt-5 mb-2 mt-auto mb-auto">
              <input
                type="email"
                placeholder="Enter your Email"
                className="p-1 rounded"
              />
              <button className="btn btn-danger m-3">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
