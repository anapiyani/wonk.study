import WelcomeFooter from "../layout/welcomeFooter/welcomeFooter";
import WelcomeHeader from "../layout/welcomeHeader/welcomeHeader";
import TextField from "@mui/material/TextField";
import "./contactUs.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <div className="contact">
      <WelcomeHeader />
      <div className="contact-content">
        <div className="container">
          <div className="contact-content-inside">
            <div className="contact-texts">
              <p className="contact-texts-default">Contact Us</p>
              <p className="contact-texts-header">
                We'd love to hear from you!
              </p>
              <p className="contact-texts-default">
                Share your feedback and ask your questions.
              </p>
              <p className="contact-texts-credentials">
                <FontAwesomeIcon icon={faEnvelope} /> wonkaikz@gmail.com
              </p>
              <p className="contact-texts-credentials">
                <FontAwesomeIcon icon={faPhone} /> +7 (706) 428-59-23
              </p>
            </div>
            <div className="contact-form">
              <form className="form">
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <WelcomeFooter />
    </div>
  );
};

export default ContactUs;
