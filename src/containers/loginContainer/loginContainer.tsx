import Login from "../../components/auth/login/login";
import "./loginContainer.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { TLoginUser } from "../../types/types";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { loginPost, resetSuccess } from "../../store/login.slice";

const LoginContainer = () => {
  const dispatch: AppDispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);
  const nagivate = useNavigate();
  const isSucces = useSelector((state: RootState) => state.login.isSuccess);
  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  const isError = useSelector((state: RootState) => state.login.isError);

  useEffect(() => {
    if (isSucces) {
      dispatch(resetSuccess());
      nagivate("/teacherDashboard");
    }
  }, [isSucces, isError, dispatch]);

  const loginHandler = (email: string, password: string) => {
    const loginData: TLoginUser = {
      email: email,
      password: password,
    };
    dispatch(loginPost(loginData));
  };

  return (
    <div className="login-container">
      <Login
        loginHandler={loginHandler}
        isError={isError}
        isLogin={isLogin}
        isSuccess={isSucces}
      />
    </div>
  );
};

export default LoginContainer;
