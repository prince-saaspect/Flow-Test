import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Logo from "../../assets/images/logo2.png";
import "./style.css";
import { connect } from "react-redux";
import { get } from "lodash";

const Header = ({ isLoggedIn }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  // Submit handler for search filter in navbar
  const submitSearch = () => {};

  return (
    <header style={{ backgroundColor: "#dedede" }}>
      <div className="container">
        <div className="mobile-menu" style={{ backgroundColor: "#dedede" }}>
          <div className="mobile-menu right">
            <span
              className="material-icons burger"
              onClick={() => {
                setSidebarOpen(true);
              }}
            >
              menu{" "}
            </span>
            <img
              src={Logo}
              alt="Company Name"
              className="logo"
              onClick={() => {
                history.push("/");
              }}
            />
          </div>
          <a>
            <i className="fas fa-shopping-cart"></i>
          </a>
        </div>

        <div
          className={sidebarOpen ? "header-wrapper open" : "header-wrapper"}
          style={{ backgroundColor: "#dedede" }}
        >
          <span
            className="material-icons close"
            onClick={() => {
              setSidebarOpen(false);
            }}
          >
            close
          </span>
          <div className="header-main">
            <div className="logo-wrapper">
              <img
                src={Logo}
                alt="Company Name"
                className="logo"
                onClick={() => {
                  history.push("/");
                }}
              />
            </div>
            <div className="search">
              <input
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <span
                className="material-icons search-icon"
                onClick={submitSearch}
              >
                search
              </span>
            </div>
            <ul className="user-menu">
              <li>
                <Link to="/login">
                  <i className="far fa-user-circle"></i>
                </Link>
              </li>
              {isLoggedIn && (
                <li>
                  <Link to="/wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                </li>
              )}
              <li>
                <Link to="/cart">
                  <i className="fas fa-shopping-cart"></i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="header-secondary">
            <ul className="nav-list">
              <li className="mega-dropdown">
                <div className="nav-title">
                  <a href="">Shop by Categories </a>
                  <span className="material-icons">expand_more</span>
                </div>
                <div className="mega-content">
                  <div className="box">
                    <div className="nav-title">
                      <h3>Proteins</h3>
                      <span className="material-icons">expand_more</span>
                    </div>
                    <ul>
                      <li>
                        <a>Whey Protein</a>
                      </li>
                      <li>
                        <a>Beginner Whey Protein</a>
                      </li>
                      <li>
                        <a>Whey Portein Isolate</a>
                      </li>
                      <li>
                        <a>Whey Portein Isolate</a>
                      </li>
                      <li>
                        <a>Whey Portein Isolate</a>
                      </li>
                    </ul>
                  </div>
                  <div className="box">
                    <div className="nav-title">
                      <h3>Gainer</h3>
                      <span className="material-icons">expand_more</span>
                    </div>
                    <ul>
                      <li>
                        <a>Weight Gainer</a>
                      </li>
                      <li>
                        <a>Mass Gainer</a>
                      </li>
                      <li>
                        <a>Herbal Weight Gainer</a>
                      </li>
                      <li>
                        <a>Whey Portein Isolate</a>
                      </li>
                      <li>
                        <a>Whey Portein Isolate</a>
                      </li>
                    </ul>
                  </div>
                  <div className="box">
                    <div className="nav-title">
                      <h3>Protein Foods</h3>
                      <span className="material-icons">expand_more</span>
                    </div>
                    <ul>
                      <li>
                        <a>Protein Bar</a>
                      </li>
                      <li>
                        <a>Protein Cookies</a>
                      </li>
                      <li>
                        <a>Peanut Butter</a>
                      </li>
                      <li>
                        <a>Whey Portein Isolate</a>
                      </li>
                      <li>
                        <a>Whey Portein Isolate</a>
                      </li>
                    </ul>
                  </div>
                  <div className="box">
                    <div className="nav-title">
                      <h3>Essentials</h3>
                      <span className="material-icons">expand_more</span>
                    </div>
                    <ul>
                      <li>
                        <a>Fat Burners</a>
                      </li>
                      <li>
                        <a>Multivitamins </a>
                      </li>
                      <li>
                        <a>Consult Services</a>
                      </li>
                      <li>
                        <a>Whey Portein Isolate</a>
                      </li>
                      <li>
                        <a>Whey Portein Isolate</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="nav-title">
                  <Link to="/blogs">Blogs</Link>
                </div>
              </li>
              <li>
                <div className="nav-title">
                  <Link to="/videos">Video &amp; Podcast</Link>
                </div>
              </li>
              <li>
                <div className="nav-title">
                  <Link to="/about">About Us</Link>
                </div>
              </li>
              <li>
                <div className="nav-title">
                  <Link to="/reach-us">Reach Us</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: get(state, "auth.isLoggedIn", false),
  };
};

export default connect(mapStateToProps)(Header);
