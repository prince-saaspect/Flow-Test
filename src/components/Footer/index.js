import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Group_141 from "../../assets/images/Group_141.png";
import Group_142 from "../../assets/images/Group_142.png";
import Group_143 from "../../assets/images/Group_143.png";
import Group_144 from "../../assets/images/Group_144.png";
import "./style.css";
const Footer = () => {
  const history = useHistory();

  return (
    <footer>
      <div className="container">
        <div className="footer-one">
          <div className="footer-one-left">
            <p>Subscribe to the Newsletter</p>
            <form action="" className="subscribe-form">
              <input type="email" placeholder="Enter Email Address" />
              <button type="submit">Sign Up</button>
            </form>
          </div>
          <div className="footer-one-middle">
            <ul>
              <li className="ul-header">Customer Care</li>
              <li>
                <Link to="/login">My Account</Link>
              </li>
              {/* <li>
                <Link>Discount</Link>
              </li> */}
              <li>
                <Link>Returns</Link>
              </li>
              <li>
                <Link>Orders History</Link>
              </li>
              <li>
                <Link>Order Tracking</Link>
              </li>
            </ul>
            <ul>
              <li className="ul-header">Pages</li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
              <li>
                <Link to="/products">Category</Link>
              </li>
              {/* <li>
                <Link>Podcasts</Link>
              </li> */}
              <li>
                <Link to="/videos">Videos</Link>
              </li>
            </ul>
          </div>
          <div className="footer-one-right">
            <p className="ul-header">Connect</p>
            <div className="social-media-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-two">
          <h3>Our Services</h3>
          <div className="footer-two-content">
            <div className="footer-two-card">
              <img src={Group_141} alt="Free Shipping" />
              <div className="footer-two-card-body">
                <p className="footer-two-card-header">Free Shipping</p>
                <p>On all order above $50 within Canada</p>
              </div>
            </div>
            <div className="footer-two-card">
              <img src={Group_142} alt="Easy Returns" />
              <div className="footer-two-card-body">
                <p className="footer-two-card-header">Easy Returns</p>
                <p>We make exchange and return simple</p>
              </div>
            </div>
            <div className="footer-two-card">
              <img src={Group_143} alt="Contactless Delivery" />
              <div className="footer-two-card-body">
                <p className="footer-two-card-header">Contactless Delivery</p>
                <p>On all order above $50 within Canada</p>
              </div>
            </div>
            <div className="footer-two-card">
              <img src={Group_144} alt="International Delivery" />
              <div className="footer-two-card-body">
                <p className="footer-two-card-header">International Delivery</p>
                <p>We make exchange and return simple</p>
              </div>
            </div>
          </div>
          <div className="social-media-icons">
            <a>
              <i className="fab fa-facebook"></i>
            </a>
            <a>
              <i className="fab fa-instagram"></i>
            </a>
            <a>
              <i className="fab fa-twitter"></i>
            </a>
            <a>
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-three">
          <p>
            © Company Name - All Rights Reserved
            <span> | Powered by Saaspect Inc |</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
