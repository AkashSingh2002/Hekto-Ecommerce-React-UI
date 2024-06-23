import React from "react";
import './index.css'
import { NavbarBrand, Nav } from "reactstrap";
import Link from "react-router-dom/Link";

function Footer() {
  return (
    <>
    <div className="footer">
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className="">
            <NavbarBrand className="mr-auto navbar-logo" href="/home">
              <b>Hekto</b>
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="email"
                  placeholder="Email Address"
                  aria-label="email"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
            </Nav>
            <div className="mt-4 contact">
            <h5>Contact Info-:</h5>
            <address>
            17 Princess Road, London, 
            <br />
             Greater London NW1 8JR, UK
            </address>
            </div>
          </div>
          <div className="col-4 col-sm-2 offset-1 footer-links">
            <p> <b> Catagories </b></p>
            <ul className="list-unstyled">
              <li>
                <a to="/home">Laptops & Computers</a>
              </li>
              <li>
                <a to="/aboutus">Cameras & Photography</a>
              </li>
              <li>
                <a to="/menu">Smart Phones & Tablets</a>
              </li>
              <li>
                <a to="/contactus">Video Games & Consoles</a>
              </li>
              <li>
                <a to="/contactus">Waterproof Headphones</a>
              </li>
            </ul>
          </div>
          <div className="col-4 col-sm-2 footer-links">
            <p> <b> Customer Care </b></p>
            <ul className="list-unstyled">
              <li>
                <a to="/home">My Account</a>
              </li>
              <li>
                <a to="/aboutus">Discount</a>
              </li>
              <li>
                <a to="/menu">Returns</a>
              </li>
              <li>
                <a to="/contactus">Orders History</a>
              </li>
              <li>
                <a to="/contactus">Order Tracking</a>
              </li>
            </ul>
          </div>
          <div className="col-4 col-sm-2 footer-links">
            <p> <b> Pages </b></p>
            <ul className="list-unstyled">
              <li>
                <a to="/home">Blog</a>
              </li>
              <li>
                <a to="/aboutus">Browse the Shop</a>
              </li>
              <li>
                <a to="/menu">Category</a>
              </li>
              <li>
                <a to="/contactus">Pre-Built Pages</a>
              </li>
              <li>
                <a to="/contactus">Visual Composer Elements</a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
    <div className="footer-btm">
    <div className="row align-items-bottom p5">
          <div className="offset-2 col-12 col-sm-4">
            <p>©Webecy - All Rights Reserved</p>
          </div>
          <div className="col-12 col-sm-6">
            <div className="text-center">
            
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default Footer;
