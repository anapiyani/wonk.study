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

type TProps = {
  courses: TCoureses[];
};
const TeacherHeader = (props: TProps) => {
  const [logOutModal, setLogOutModal] = useState<boolean>(false);

  const handleOpenModalLogOut = () => {
    if (logOutModal) {
      setLogOutModal(false);
    } else {
      setLogOutModal(true);
    }
  };

  const openModalSubjects = () => {};

  return (
    <header className="teacher-header">
      <div className="container">
        <div className="teacher-header-content">
          <div className="teacher-header-content-left">
            <NavLink to="/teacher-dashboard" className="logotype">
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
              <a onClick={openModalSubjects} className="teacher-nav-link">
                <BookOutlinedIcon />
                <div>
                  Subjects
                  <ArrowDropDownOutlinedIcon className="arrowDownIcon" />
                </div>
              </a>
              <NavLink to="/teacherSettings" className="teacher-nav-link">
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
      {logOutModal ? (
        <LogOutModal closeModalLogOut={handleOpenModalLogOut} />
      ) : (
        ""
      )}
      {/* <SubjectsModal courses={props.courses} /> */}
    </header>
  );
};

export default TeacherHeader;
