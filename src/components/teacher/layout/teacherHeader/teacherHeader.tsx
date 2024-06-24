import { NavLink } from "react-router-dom";
import logotype from "../../../../assets/logo_word.svg";
import "./teacherHeader.scss";
import { Button } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import LogOutModal from "../../../UI/logOutModal/logOutModal";
import { useState } from "react";
import SubjectsModal from "../../../UI/subjectsModal/subjectsModal";
import { TCoureses } from "../../../../types/types";
import MenuIcon from "@mui/icons-material/Menu";

type TProps = {
  courses: TCoureses[];
};
const TeacherHeader = (props: TProps) => {
  const [logOutModal, setLogOutModal] = useState<boolean>(false);
  const [subjectModal, setSubjectsModal] = useState<boolean>(false);
  const [onHide, setOnHide] = useState<boolean>(true);

  const onClickMenu = () => {
    if (onHide == false) {
      setOnHide(true);
    } else {
      setOnHide(false);
    }
  };

  const handleOpenModalLogOut = () => {
    if (logOutModal) {
      setLogOutModal(false);
    } else {
      setLogOutModal(true);
    }
  };

  const handleOpenSubjectModal = () => {
    if (subjectModal) {
      setSubjectsModal(false);
    } else {
      setSubjectsModal(true);
    }
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
            <Button onClick={onClickMenu} className="menu-icon">
              <MenuIcon />
            </Button>
            <div className={`menu ${onHide ? "hide" : "show"}`}>
              <div className="menu-content">
                <ul>
                  <li>
                    <NavLink to="/teacher-dashboard" className="nav-link-buttons">
                      <DashboardOutlinedIcon className="icon-menu-phone" />
                      Main
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/settings" className="nav-link-buttons">
                      <SettingsOutlinedIcon className="icon-menu-phone" />
                      Settings
                    </NavLink>
                  </li>
                  <li>
                    <Button
                      onClick={handleOpenModalLogOut}
                      className="nav-link-button-out"
                      type="submit"
                      variant="contained"
                    >
                      Log out
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="teacher-nav">
              <NavLink to="/teacher-dashboard" className="teacher-nav-link">
                <DashboardOutlinedIcon />
                Main
              </NavLink>
              <a onClick={handleOpenSubjectModal} className="teacher-nav-link">
                <BookOutlinedIcon />
                <div>
                  Subjects
                  <ArrowDropDownOutlinedIcon className="arrowDownIcon" />
                </div>
              </a>
              <NavLink to="/settings" className="teacher-nav-link">
                <SettingsOutlinedIcon />
                Settings
              </NavLink>
            </div>
            <Button
              onClick={handleOpenModalLogOut}
              className="logout-btn"
              type="submit"
              variant="contained"
            >
              Log out
            </Button>
          </div>
        </div>
      </div>
      {logOutModal ? <LogOutModal closeModalLogOut={handleOpenModalLogOut} /> : ""}
      {subjectModal ? (
        <SubjectsModal courses={props.courses} handleOpenSubjectModal={handleOpenSubjectModal} />
      ) : (
        ""
      )}
    </header>
  );
};

export default TeacherHeader;
