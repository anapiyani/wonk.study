import { NavLink } from "react-router-dom";
import logotype from "../../../../assets/logo_word.svg";
import "./welcomeHeader.scss";

const WelcomeHeader = () => {
  return (
    <header className="welcome-header">
      <div className="container">
        <div className="header-content">
          <NavLink to="/" className="logotype">
            <img src={logotype} alt="logotype" />
          </NavLink>
          <div className="choose-language">
            <p className="en active">Eng</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WelcomeHeader;
