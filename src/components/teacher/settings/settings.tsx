import "./settings.scss";
import TeacherHeader from "../layout/teacherHeader/teacherHeader";
import WelcomeFooter from "../../welcome/layout/welcomeFooter/welcomeFooter";
import { TCoureses, TUserInfo } from "../../../types/types";
import {
  Alert,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

type TProps = {
  user: TUserInfo | null;
  courses: TCoureses[];
};

const Settings = (props: TProps) => {
  return (
    <div className="settings">
      <TeacherHeader courses={props.courses} />
      <div className="container">
        <div className="settings-content">
          <div className="settings-header">
            <h1>Settings</h1>
          </div>

          <div className="settings-main">
            <div className="settings-password">
              <div className="settings-password-header">
                <h2>Change email</h2>
                <p>
                  Changing the email will require verification.
                </p>
              </div>
              <div className="settings-password-content">
                <form onSubmit={(e) => e} className="password-change-form">
                  <div className="settings-password-textfields">
                    <TextField
                      required
                      type="text"
                      className="inputs"
                      label="Old Email"
                      variant="outlined"
                    />
                    <TextField
                      required
                      type="text"
                      className="inputs"
                      label="New Email"
                      variant="outlined"
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
                <form onSubmit={(e) => e} className="password-change-form">
                  <div className="settings-password-textfields">
                    <TextField
                      required
                      type="text"
                      className="inputs"
                      label="Old password"
                      variant="outlined"
                    />
                    <TextField
                      required
                      type="text"
                      className="inputs"
                      label="New password"
                      variant="outlined"
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
