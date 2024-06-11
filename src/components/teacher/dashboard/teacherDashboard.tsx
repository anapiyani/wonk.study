import { TCoureses, TUserInfo } from "../../../types/types";
import WelcomeFooter from "../../welcome/layout/welcomeFooter/welcomeFooter";
import TeacherHeader from "../layout/teacherHeader/teacherHeader";
import { Button, CircularProgress } from "@mui/material";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdOutlineGrade } from "react-icons/md";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SubjectCard from "../dashboard/teacherMain/subjectCard";
import "./teacherDashboard.scss";
import { Person } from "@mui/icons-material";
// import ClassCard from "./teacherMain/classCard";


type TProps = {
  user: TUserInfo | null;
  loading: boolean;
  iserror: string | null;
  courses: TCoureses[];
};

const TeacherDashboard = (props: TProps) => {
  return (
    <div className="teacher-dashboard">
      <TeacherHeader courses={props.courses} />
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
          <div className="teacher-main">
            {" "}
            {/*where subjects and students will be displayed*/}
            <div className="teacher-main-subjects">
              <div className="teacher-main-subjects-header">
                <div className="teacher-main-subjects-header-inner">
                  <BookOutlinedIcon className="bookLargeIcon" />
                  <h2>Subjects</h2>
                </div>
              </div>
              <div className="teacher-main-subjects-listview">
                <ArrowBackIosNewIcon />
                <div className="teacher-main-subjects-container">
                  {props.courses.length > 0 ? (
                    props.courses.map((item) => (
                      <SubjectCard
                        key={item.id}
                        id={item.id}
                        course_img={item.course_img}
                        name={item.name}
                      />
                    ))
                  ) : (
                    <p>There is no subjects yet...</p>
                  )}
                </div>
                <ArrowBackIosNewIcon className="backArrow" />
              </div>
            </div>
            {/* hier es ist notwendig, ein anderes hinzuzufügen, aber als idk */}
            {/* <div className="teacher-main-students">
              <div className="teacher-main-students-header">
                <div className="teacher-main-students-header-inner">
                  <PersonOutlinedIcon className="bookLargeIcon" />
                  <h2>Students</h2>
                </div>
              </div>
              <div className="teacher-main-students-listview">
                <ArrowBackIosNewIcon />
                <div className="teacher-main-students-container">   
                  {props.courses.length > 0 ? (
                    props.courses.map((item) => (
                      <ClassCard
                        key={item.id}
                        id={item.id}
                        course_img={item.course_img}
                        name={item.name}
                      />
                    ))
                  ) : (
                    <p>There is no subjects yet...</p>
                  )}
                </div>
                <ArrowBackIosNewIcon className="backArrow" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <WelcomeFooter />
    </div>
  );
};

export default TeacherDashboard;
