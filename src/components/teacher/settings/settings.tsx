import "./settings.scss";
import TeacherHeader from "../layout/teacherHeader/teacherHeader";
import WelcomeFooter from "../../welcome/layout/welcomeFooter/welcomeFooter";
import { TCoureses, TUserInfo } from "../../../types/types";
import { Alert, Button, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";

type TProps = {
  user: TUserInfo | null;
  courses: TCoureses[];
  changeSuccess: boolean;
  changeLoading: boolean;
  changeErr: string | null;
  updateEmail: (e: React.FormEvent<HTMLFormElement>, newEmail: string) => void;
  updatePassword: (
    e: React.FormEvent<HTMLFormElement>,
    oldPassword: string,
    newPassword: string
  ) => void;
};

const Settings = (props: TProps) => {
  const [oldEmail, setOldEmail] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");

  const updateEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.updateEmail(e, newEmail);
  };

  const updatePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.updatePassword(e, oldPassword, newPassword);
  };

  return (
    <div className="settings">
      <TeacherHeader courses={props.courses} />
      <div className="container">
        <div className="settings-content">
          <div className="settings-header">
            <h1>Settings</h1>
          </div>
          {props.changeSuccess ? (
            <Alert severity="success">Changed successfully</Alert>
          ) : (
            ""
          )}
          {props.changeLoading ? <CircularProgress className="loading" /> : ""}
          {props.changeErr ? (
            <Alert severity="error">{props.changeErr}</Alert>
          ) : (
            ""
          )}
          <div className="settings-main">
            <div className="settings-password">
              <div className="settings-password-header">
                <h2>Change email</h2>
                <p>Changing the email will require verification.</p>
              </div>
              <div className="settings-password-content">
                <form
                  onSubmit={(e) => updateEmail(e)}
                  className="password-change-form"
                >
                  <div className="settings-password-textfields">
                    <TextField
                      required
                      type="text"
                      className="inputs"
                      label="Old Email"
                      variant="outlined"
                      onChange={(e) => setOldEmail(e.target.value)}
                    />
                    <TextField
                      required
                      type="text"
                      className="inputs"
                      label="New Email"
                      variant="outlined"
                      onChange={(e) => setNewEmail(e.target.value)}
                    />
                  </div>

                  <div className="reset-password-btn-container">
                    <Button
                      className="reset-password-btn"
                      type="submit"
                      variant="contained"
                    >
                      Update Email
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            <div className="settings-password password-container">
              <div className="settings-password-header">
                <h2>Reset password</h2>
                <p>
                  Password must contain at least 1 upper-case, 1 number and 1
                  special character.
                </p>
              </div>
              <div className="settings-password-content">
                <form
                  onSubmit={(e) => updatePassword(e)}
                  className="password-change-form"
                >
                  <div className="settings-password-textfields">
                    <TextField
                      required
                      type="text"
                      className="inputs"
                      label="Old password"
                      variant="outlined"
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <TextField
                      required
                      type="text"
                      className="inputs"
                      label="New password"
                      variant="outlined"
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>

                  <div className="reset-password-btn-container">
                    <Button
                      className="reset-password-btn"
                      type="submit"
                      variant="contained"
                    >
                      Reset password
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WelcomeFooter />
    </div>
  );
};

export default Settings;
