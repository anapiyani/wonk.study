import { TUserInfo } from "../../../types/types";
import WelcomeFooter from "../../welcome/layout/welcomeFooter/welcomeFooter";
import TeacherHeader from "../layout/teacherHeader/teacherHeader";
import "./teacherDashboard.scss";
import { Button, CircularProgress } from "@mui/material";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdOutlineGrade } from "react-icons/md";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

type TProps = {
  user: TUserInfo | null;
  loading: boolean;
  iserror: string | null;
};

const TeacherDashboard = (props: TProps) => {
  return (
    <div className="teacher-dashboard">
      <TeacherHeader />
      <div className="container">
        <div className="teacher-dashboard-content">
          {props.loading ? <CircularProgress className="loading" /> : ""}
          <div className="teacher-dashboard-header">
            <div className="teacher-dashboard-greeting">
              <h1>
                {props.user?.first_name} {props.user?.last_name}
              </h1>
              <h2>{props.user?.role}</h2>
            </div>
            <div className="teacher-dashboard-menu">
              <Button className="feedBtn">
                <FaRegNewspaper className="feedIcon" />
                Feed
              </Button>
              <Button className="gradeBtn">
                <MdOutlineGrade className="gradeIcon" />
                Grade
              </Button>
              <Button className="scheduleBtn">
                <CalendarMonthIcon className="scheduleIcon" />
                Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>
      <WelcomeFooter />
    </div>
  );
};

export default TeacherDashboard;
