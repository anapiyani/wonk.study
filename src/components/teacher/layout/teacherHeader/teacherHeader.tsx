import { NavLink } from "react-router-dom";
import logotype from "../../../../assets/logo_word.svg";
import "./teacherHeader.scss";
import { Button } from "@mui/material";

const TeacherHeader = () => {
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
              <NavLink to="/teacherDashboard" className="teacher-nav-link">
                <p>Dashboard</p>
              </NavLink>
              <NavLink to="/teacherCourses" className="teacher-nav-link">
                <p>Courses</p>
              </NavLink>
              <NavLink to="/teacherSettings" className="teacher-nav-link">
                <p>Settings</p>
              </NavLink>
            </div>
            <Button className="logout-btn" type="submit" variant="contained">
              Log out
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TeacherHeader;
