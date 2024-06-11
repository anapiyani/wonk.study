import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import MenuIcon from "@mui/icons-material/Menu";
import logotype from "../../../assets/logo_word.svg";
import { Button, CircularProgress } from "@mui/material";
import Modal from "../../UI/modal/modal";
import "./welcomePage.scss";

const WelcomePage = () => {
  const [onHide, setOnHide] = useState<boolean>(true);
  const [modalApple, setModalApple] = useState<boolean>(false);
  const [modalGoogle, setModalGoogle] = useState<boolean>(false);

  const onClickMenu = () => {
    if (onHide == false) {
      setOnHide(true);
    } else {
      setOnHide(false);
    }
  };

  const closeModal = () => {
    setModalApple(false);
    setModalGoogle(false);
  };

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
              <Button onClick={onClickMenu} className="menu-icon">
                <MenuIcon />
              </Button>
              <div className={`menu ${onHide ? "hide" : "show"}`}>
                <div className="menu-content">
                  <ul>
                    <li>
                      <NavLink className="nav-links" to="/">
                        <Button className="nav-link-buttons">Home</Button>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-links" to="/aboutUs">
                        <Button className="nav-link-buttons">About</Button>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-links" to="/contact">
                        <Button className="nav-link-buttons">Contacts</Button>
                      </NavLink>
                    </li>
                  </ul>
                </div>
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
                      <p className="side-content-download email">
                        Sign in with your school assigned email.
                      </p>
                    </div>
                    <div className="buttons top">
                      <Link to="/login">
                        <button className="signUp">Log in</button>
                      </Link>
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
                      <button
                        onClick={() => setModalApple(true)}
                        className="download"
                      >
                        <div>
                          <AppleIcon className="icon-download" /> IOS
                        </div>
                      </button>
                      <button
                        onClick={() => setModalGoogle(true)}
                        className="download android"
                      >
                        <div>
                          <AndroidIcon className="icon-download" /> Android
                        </div>
                      </button>
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
                <Link to="/privacyPolicy" className="footerLink">
                  Privacy Policy
                </Link>
                <Link to="/termsOfUse" className="footerLink">
                  Terms of Use
                </Link>
              </div>
              <div className="footer-right">
                <p>&copy; 2024 Wonk | All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {modalApple && <Modal icon={"apple"} closeModal={closeModal} />}
      {modalGoogle && <Modal icon={"google"} closeModal={closeModal} />}
    </div>
  );
};

export default WelcomePage;
