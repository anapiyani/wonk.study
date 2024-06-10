import { Button, TextField } from "@mui/material";
import WelcomeFooter from "../../welcome/layout/welcomeFooter/welcomeFooter";
import WelcomeHeader from "../../welcome/layout/welcomeHeader/welcomeHeader";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { TLoginUser } from "../../../types/types";
import { AppDispatch, RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { loginPost, resetSuccess } from "../../../store/login.slice";
import "./login.scss";

type TProps = {
  loginHandler: (email: string, password: string) => void;
  isError: string | null;
  isSuccess: boolean;
  isLogin: boolean;
};

const Login = (props: TProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.loginHandler(email, password);
  };

  useEffect(() => {
    if (props.isError) {
      setError(props.isError);
      setInterval(() => {
        setError(null);
      }, 2500);
    }
  });

  return (
    <div className="login">
      <WelcomeHeader />
      <div className="login-content">
        <div className="container">
          <div className="login-header">
            <h1>Log in</h1>
          </div>
          <form onSubmit={(e) => loginHandler(e)} className="login-form">
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              className="inputs"
              type="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              className="inputs"
              type="password"
              label="Password"
              variant="outlined"
            />
            <Link className="forgot" to="/">
              Forgot password?
            </Link>
            <Button className="send-button" type="submit" variant="contained">
              Sign in
            </Button>
          </form>
        </div>
      </div>
      <WelcomeFooter />
    </div>
  );
};

export default Login;
