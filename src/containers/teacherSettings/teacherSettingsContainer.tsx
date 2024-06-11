import { useDispatch, useSelector } from "react-redux";
import Settings from "../../components/teacher/settings/settings";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect, useState } from "react";
import {
  changeEmail,
  changePassword,
  removeError,
  removieSuccess,
} from "../../store/info.slice";
import { TtoChangePassword } from "../../types/types";

const SettingsContainer = () => {
  const user = useSelector((state: RootState) => state.info.user);
  const courses = useSelector((state: RootState) => state.info.courses);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const changeSuccess = useSelector(
    (state: RootState) => state.info.successChange
  );
  const changeLoading = useSelector(
    (state: RootState) => state.info.loadingChange
  );
  const changeErr = useSelector((state: RootState) => state.info.errorOnChange);

  const updateEmail = (
    e: React.FormEvent<HTMLFormElement>,
    newEmail: string
  ) => {
    e.preventDefault();
    const toUpdateEmail = {
      email: newEmail,
    };

    dispatch(changeEmail(toUpdateEmail));
  };
  const updatePassword = (
    e: React.FormEvent<HTMLFormElement>,
    oldPassword: string,
    newPassword: string
  ) => {
    e.preventDefault();
    const toUpdatePassword: TtoChangePassword = {
      old_password: oldPassword,
      password: newPassword,
    };

    dispatch(changePassword(toUpdatePassword));
  };

  useEffect(() => {
    if (changeSuccess) {
      setInterval(() => {
        dispatch(removieSuccess());
      }, 2000);
    }
  }, [dispatch, changeSuccess]);
  useEffect(() => {
    if (changeErr) {
      setInterval(() => {
        dispatch(removeError());
      }, 2000);
    }
  }, [dispatch, changeErr]);

  const handleShowPassword = () => {
    if (!showPassword) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  const newhandleClickShowPassword = () => {
    if (!showNewPassword) {
      setShowNewPassword(true);
    } else {
      setShowNewPassword(false);
    }
  };
  return (
    <Settings
      user={user}
      courses={courses}
      changeSuccess={changeSuccess}
      changeLoading={changeLoading}
      changeErr={changeErr}
      updateEmail={updateEmail}
      updatePassword={updatePassword}
      showPassword={showPassword}
      handleClickShowPassword={handleShowPassword}
      newhandleClickShowPassword={newhandleClickShowPassword}
      showNewPassword={showNewPassword}
    />
  );
};

export default SettingsContainer;
