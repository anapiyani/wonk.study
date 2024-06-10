import { NavLink, useNavigate } from "react-router-dom";
import logotype from "../../../../assets/logo_word.svg";
import "./teacherHeader.scss";
import { Button } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

const TeacherHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/welcomePage");
  };

  return (
    <header className="teacher-header">
      <div className="container">
        <div className="teacher-header-content">
          <div className="teacher-header-content-left">
            <NavLink to="/" className="logotype">
              <img src={logotype} alt="logotype" />
            </NavLink>
            <div className="choose-language">
              <p className="en active">Eng</p>
            </div>
          </div>
          <div className="teacher-header-content-right">
            <div className="teacher-nav">
              <NavLink to="/teacher-dashboard" className="teacher-nav-link">
                <DashboardOutlinedIcon />
                Main
              </NavLink>
              <NavLink to="/teacherSubjects" className="teacher-nav-link">
                <BookOutlinedIcon />
                <div>
                  Subjects
                  <ArrowDropDownOutlinedIcon className="arrowDownIcon"/>
                </div>
              </NavLink>
              <NavLink to="/teacherSettings" className="teacher-nav-link">
                <SettingsOutlinedIcon />
                Settings
              </NavLink>
            </div>
            <Button
              onClick={handleLogout}
              className="logout-btn"
              type="submit"
              variant="contained"
            >
              Log out
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TeacherHeader;
