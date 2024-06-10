import { Button } from "@mui/material";
import WelcomeFooter from "../welcome/layout/welcomeFooter/welcomeFooter";
import WelcomeHeader from "../welcome/layout/welcomeHeader/welcomeHeader";
import "./notFound.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = async () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };
  return (
    <div className="not-found">
      <WelcomeHeader />
      <div className="not-found-content">
        <div className="container">
          <div className="page-not-text">
            <h1>This page doesn’t exist</h1>
          </div>
          <div className="icon-not-found">
            <img
              src="https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/wonk-ai-teacher-gk62of/assets/t2xh6lx2394i/130x160_Wrong.png"
              alt="Not found"
            />
          </div>
          <div className="go-back">
            <Button onClick={goBack} variant="outlined" className="btn">
              Go home
            </Button>
          </div>
        </div>
      </div>
      <WelcomeFooter />
    </div>
  );
};

export default NotFound;
