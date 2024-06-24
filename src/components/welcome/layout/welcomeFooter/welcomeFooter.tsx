import { Link } from "react-router-dom";
import "./welcomeFooter.scss";

const WelcomeFooter = () => {
  return (
    <footer className="welcome-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <Link className="footer-links" to="/privacyPolicy">
              Privacy Policy
            </Link>
            <Link className="footer-links" to="/termsOfUse">
              Terms of Use
            </Link>
          </div>
          <div className="footer-right">
            <p>&copy; 2024 Wonk | All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WelcomeFooter;
