import WelcomeFooter from "../layout/welcomeFooter/welcomeFooter";
import WelcomeHeader from "../layout/welcomeHeader/welcomeHeader";
import { Button, TextField } from "@mui/material";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sendMessageEmail } from "../../../store/email.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { TEmailMessage } from "../../../types/types";
import { useState } from "react";
import "./contactUs.scss";

const ContactUs = () => {
  const dispatch: AppDispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataSend: TEmailMessage = {
      name: name,
      sender_email: email,
      message: message,
    };
    console.log("Message to send:", dataSend);
    dispatch(sendMessageEmail(dataSend));
  };

  return (
    <div className="contact">
      <WelcomeHeader />
      <div className="contact-content">
        <div className="container">
          <div className="contact-content-inside">
            <div className="contact-texts">
              <p className="contact-texts-default">Contact Us</p>
              <p className="contact-texts-header">We'd love to hear from you!</p>
              <p className="contact-texts-default">Share your feedback and ask your questions.</p>
              <p className="contact-texts-credentials">
                <FontAwesomeIcon icon={faEnvelope} /> wonkaikz@gmail.com
              </p>
              <p className="contact-texts-credentials">
                <FontAwesomeIcon icon={faPhone} /> +7 (706) 428-59-23
              </p>
            </div>
            <div className="contact-form">
              <form onSubmit={(e) => onSendMessage(e)} className="form">
                <TextField
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="inputs"
                  id="outlined-basic"
                  label="Name..."
                  variant="outlined"
                />
                <TextField
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="inputs"
                  type="email"
                  id="outlined-basic"
                  label="Email..."
                  variant="outlined"
                />
                <TextField
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  className="message"
                  id="outlined-basic"
                  label="Your message..."
                  variant="outlined"
                />
                <Button className="send-button" type="submit" variant="contained">
                  Send Message
                </Button>
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
