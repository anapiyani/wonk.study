import {
  Alert,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import WelcomeFooter from "../../welcome/layout/welcomeFooter/welcomeFooter";
import WelcomeHeader from "../../welcome/layout/welcomeHeader/welcomeHeader";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import "./login.scss";

type TProps = {
  loginHandler: (email: string, password: string) => void;
  isError: string | null;
  isSuccess: boolean;
  isLoading: boolean;
  showPassword: boolean;
  handleClickShowPassword: () => void;
};

const Login = (props: TProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(props.isError);

  useEffect(() => {
    if (props.isError) {
      setError(props.isError);
      const timer = setTimeout(() => {
        setError(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [props.isError]);

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.loginHandler(email, password);
  };

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

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
              required
              type={props.showPassword ? "text" : "password"}
              className="inputs"
              label="Пароль"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={props.handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {props.showPassword ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Link className="forgot" to="/">
              Forgot password?
            </Link>
            <Button className="send-button" type="submit" variant="contained">
              {props.isLoading ? (
                <CircularProgress color="inherit" className="loading" />
              ) : (
                "Sign in"
              )}
            </Button>
            {error ? (
              <Alert severity="error" className="loading">
                {error}
              </Alert>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
      <WelcomeFooter />
    </div>
  );
};

export default Login;
