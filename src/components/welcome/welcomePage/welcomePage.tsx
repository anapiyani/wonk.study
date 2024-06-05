import { NavLink, Link } from "react-router-dom";
import logotype from "../../../assets/logo_word.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

import "./welcomePage.scss";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-background">
        <header className="header">
          <div className="container">
            <div className="header-items">
              <div className="logotype">
                <NavLink to="/">
                  <img src={logotype} alt="wonkAi" />
                </NavLink>
              </div>
              <nav className="navs">
                <ul>
                  <li>
                    <NavLink className="navLink" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="navLink" to="/aboutUs">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="navLink" to="/contact">
                      Contacts
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <div className="promo">
          <div className="container">
            <div className="promo-content">
              <div className="promo-headers">
                <h1>Welcome to Wonk!🍎</h1>
                <p>
                  AI powered virual assistant for both teachers and students
                </p>
              </div>
              <div className="sides-choose">
                <div className="side login">
                  <div className="side-content">
                    <div className="side-texts">
                      <p className="side-header-login">
                        <FontAwesomeIcon
                          icon={faEarthAsia}
                          className="icon-welcome"
                        />
                        Use the website
                      </p>
                      <p className="side-texts-login">
                        Sign in with your school assigned email.
                      </p>
                    </div>
                    <div className="buttons top">
                      <button className="signUp">Log in</button>
                    </div>
                  </div>
                </div>
                <div className="side download">
                  <div className="side-content">
                    <div className="side-texts">
                      <p className="side-header-download">
                        <AppShortcutIcon className="icon-welcome" />
                        Use the application
                      </p>
                      <p className="side-content-download">
                        Sign in with your Student ID and password.
                      </p>
                    </div>
                    <div className="buttons">
                      <button className="download"><AppleIcon /> iOS</button>
                      <button className="download android"><AndroidIcon /> Android</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-left">
                <Link to="/" className="footerLink">Privacy Policy</Link>
                <Link to="/" className="footerLink">Terms of Use</Link>
              </div>
              <div className="footer-right">
                <p>&copy; 2024 Wonk | All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
        
      </div>
    </div>
  );
};

export default WelcomePage;
