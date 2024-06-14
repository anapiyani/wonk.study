import { TClasses, TCoureses, TUserInfo } from "../../../types/types";
import WelcomeFooter from "../../welcome/layout/welcomeFooter/welcomeFooter";
import TeacherHeader from "../layout/teacherHeader/teacherHeader";
import { Button } from "@mui/material";
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
import SubjectModal from "../../UI/subjectModal/subjectModal";
import Skeleton from "@mui/material/Skeleton";

type TProps = {
  user: TUserInfo | null;
  loading: boolean;
  iserror: string | null;
  courses: TCoureses[];
  classes: TClasses[];
  handleClassOpen: (grade: string, section: string) => void;
  handleClickSubject: (id: number) => void;
  openSubjectModal: boolean;
  handleCloseSubjectModal: () => void;
  selectedSubjectId: number | null;
};

const TeacherDashboard = (props: TProps) => {
  const subjectsContainerRef = useRef<HTMLDivElement>(null);
  const classesContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (
    ref: React.RefObject<HTMLDivElement>,
    direction: "left" | "right"
  ) => {
    const { current } = ref;
    if (current) {
      const scrollAmount = 200;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleOpenSubjectModal = (id: number) => {
    props.handleClickSubject(id);
  };

  return (
    <div className="teacher-dashboard">
      <TeacherHeader courses={props.courses} />
      <div className="container">
        <div className="teacher-dashboard-content">
          <div className="teacher-dashboard-header">
            <div className="teacher-dashboard-greeting">
              {props.loading ? (
                <Skeleton width={600} height={60} animation="wave" />
              ) : (
                <h1>
                  {props.user?.first_name} {props.user?.last_name}
                </h1>
              )}
              {props.loading ? (
                <Skeleton width={100} height={60} animation="wave" />
              ) : (
                <h2>{props.user?.role}</h2>
              )}
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
                  onClick={() => scroll(subjectsContainerRef, "left")}
                />
                <div
                  className="teacher-main-subjects-container"
                  ref={subjectsContainerRef}
                >
                  {props.loading ? (
                    Array.from(new Array(5)).map((_, index) => (
                      <Skeleton
                        key={index}
                        variant="rectangular"
                        width={210}
                        height={118}
                        animation="wave"
                        style={{ marginRight: 10 }}
                      />
                    ))
                  ) : props.courses.length > 0 ? (
                    props.courses.map((item) => (
                      <SubjectCard
                        handleClickSubject={handleOpenSubjectModal}
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
                  onClick={() => scroll(subjectsContainerRef, "right")}
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
                  onClick={() => scroll(classesContainerRef, "left")}
                />
                <div
                  className="teacher-main-subjects-container"
                  ref={classesContainerRef}
                >
                  {props.loading ? (
                    Array.from(new Array(6)).map((_, index) => (
                      <Skeleton
                        key={index}
                        variant="rectangular"
                        width={210}
                        height={118}
                        animation="wave"
                        style={{ marginRight: 10 }}
                      />
                    ))
                  ) : props.classes.length > 0 ? (
                    props.classes.map((item) => (
                      <ClassCard
                        key={item.id}
                        grade={item.grade_level}
                        section={item.section}
                        number_of_students={item.number_of_students}
                        handleClassOpen={props.handleClassOpen}
                      />
                    ))
                  ) : (
                    <p>There is no classes yet...</p>
                  )}
                </div>
                <ArrowBackIosNewIcon
                  className="rightArrow"
                  onClick={() => scroll(classesContainerRef, "right")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.openSubjectModal && (
        <SubjectModal
          subjectId={props.selectedSubjectId}
          handleClose={props.handleCloseSubjectModal}
        />
      )}
      <WelcomeFooter />
    </div>
  );
};

export default TeacherDashboard;
