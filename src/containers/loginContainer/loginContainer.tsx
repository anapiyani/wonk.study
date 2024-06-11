import Login from "../../components/auth/login/login";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TLoginUser } from "../../types/types";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { loginPost, resetSuccess } from "../../store/login.slice";

const LoginContainer = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const nagivate = useNavigate();
  const isSucces = useSelector((state: RootState) => state.login.isSuccess);
  const isLoading = useSelector((state: RootState) => state.login.isLoading);
  const isError = useSelector((state: RootState) => state.login.isError);

  useEffect(() => {
    if (isSucces) {
      dispatch(resetSuccess());
      nagivate("/teacher-dashboard");
    }
  }, [isSucces, isError, dispatch]);

  const loginHandler = (email: string, password: string) => {
    const loginData: TLoginUser = {
      email: email,
      password: password,
    };
    dispatch(loginPost(loginData));
  };

  const handleShowPassword = () => {
    if (!showPassword) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  return (
    <div className="login-container">
      <Login
        loginHandler={loginHandler}
        isError={isError}
        isLoading={isLoading}
        isSuccess={isSucces}
        showPassword={showPassword}
        handleClickShowPassword={handleShowPassword}
      />
    </div>
  );
};

export default LoginContainer;
