import { TClasses, TCoureses, TUserInfo } from "../../../types/types";
import WelcomeFooter from "../../welcome/layout/welcomeFooter/welcomeFooter";
import TeacherHeader from "../layout/teacherHeader/teacherHeader";
import { Button, CircularProgress } from "@mui/material";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdOutlineGrade } from "react-icons/md";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import SubjectCard from "../dashboard/teacherMain/subjectCard";
import "./teacherDashboard.scss";
import ClassCard from "./teacherMain/classCard";
import { PeopleAltOutlined } from "@mui/icons-material";
import { useRef } from "react";

type TProps = {
  user: TUserInfo | null;
  loading: boolean;
  iserror: string | null;
  courses: TCoureses[];
  classes: TClasses[];
};

const TeacherDashboard = (props: TProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const { current } = scrollContainerRef;
    if (current) {
      const scrollAmount = 10000; // Adjust this value as needed
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  

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
            <div className="teacher-main-subjects">
              <div className="teacher-main-subjects-header">
                <div className="teacher-main-subjects-header-inner">
                  <BookOutlinedIcon className="bookLargeIcon" />
                  <h2>Subjects</h2>
                </div>
              </div>
              <div className="teacher-main-subjects-listview">
                <ArrowBackIosNewIcon
                  className="leftArrow"
                  onClick={() => scroll("left")}
                />
                <div className="teacher-main-subjects-container" ref={scrollContainerRef}>
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
                <ArrowBackIosNewIcon
                  className="rightArrow"
                  onClick={() => scroll("right")}
                />
              </div>
            </div>
          </div>
          <div className="teacher-main">
            <div className="teacher-main-subjects">
              <div className="teacher-main-subjects-header">
                <div className="teacher-main-subjects-header-inner">
                  <PeopleAltOutlined className="bookLargeIcon" />
                  <h2>Students</h2>
                </div>
              </div>
              <div className="teacher-main-subjects-listview">
                <ArrowBackIosNewIcon
                  className="leftArrow"
                  onClick={() => scroll("left")}
                />
                <div className="teacher-main-subjects-container" ref={scrollContainerRef}>
                  {/* <ClassCard /> */}
                  {props.classes.length > 0 ? (
                    props.classes.map((item) => (
                      <ClassCard
                        key={item.id}
                        grade={item.grade_level}
                        section={item.section}
                        number_of_students={item.number_of_students}
                      />
                    ))
                  ) : (
                    <p>There is no classes yet...</p>
                  )}
                </div>
                <ArrowBackIosNewIcon
                  className="rightArrow"
                  onClick={() => scroll("right")}
                />
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
