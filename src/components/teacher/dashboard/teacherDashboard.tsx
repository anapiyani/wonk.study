import { TUserInfo } from "../../../types/types";
import WelcomeFooter from "../../welcome/layout/welcomeFooter/welcomeFooter";
import TeacherHeader from "../layout/teacherHeader/teacherHeader";
import "./teacherDashboard.scss";
import { Button } from "@mui/material";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdOutlineGrade } from "react-icons/md";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import historyCard from "../../../assets/subjectCards/techny-file-with-atom-icon.svg";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import SubjectCard from "../dashboard/teacherMain/subjectCard";

type TProps = {
  user: TUserInfo | null;
  loading: boolean;
  iserror: string | null;
};

const TeacherDashboard = (props: TProps) => {
  console.log(props.loading, props.user);
  return (
    <div className="teacher-dashboard">
      <TeacherHeader />
      <div className="container">
        <div className="teacher-dashboard-content">
          <div className="teacher-dashboard-header">
            <div className="teacher-dashboard-greeting">
              <h1>Abay</h1>
              <h2>Head Of Department</h2>
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
          <div className="teacher-main">
            <div className="teacher-main-subjects">
              <div className="teacher-main-subjects-header">
                <div className="teacher-main-subjects-header-inner">
                    <BookOutlinedIcon className="bookLargeIcon"/>
                    <h2>Subjects</h2>
                </div>
              </div>
              <div className="teacher-main-subjects-listview">
                <ArrowBackIosNewIcon />
                <div className="teacher-main-subjects-container">
                  <SubjectCard />
                  <SubjectCard />
                  <SubjectCard />
                  <SubjectCard />
                  <SubjectCard />
                  <SubjectCard />
                  
                </div>
                <ArrowBackIosNewIcon className="backArrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <WelcomeFooter />
    </div>
  );
};

export default TeacherDashboard;
