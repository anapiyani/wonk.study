import { Link } from "react-router-dom";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import "./gradeStudents.scss";
import TeacherHeader from "../layout/teacherHeader/teacherHeader";
import { TCoureses } from "../../../types/types";
import WelcomeFooter from "../../welcome/layout/welcomeFooter/welcomeFooter";
import Student from "./student/student";
import { Skeleton } from "@mui/material";

type TProps = {
  courses: TCoureses[];
  students: any[];
  loading: boolean;
  error: string | null;
  grade: string;
  section: string;
  onClickStudent: (id: number) => void;
};

const GradeStudents = (props: TProps) => {
  return (
    <div className="grade-students">
      <TeacherHeader courses={props.courses} />
      <div className="grade-content">
        <div className="header-div">
          <div className="about-page">
            <div className="container">
              <div className="back">
                <Link className="link-back" to="/teacher-dashboard">
                  <KeyboardBackspaceOutlinedIcon className="icon-back" /> Go
                  back
                </Link>
              </div>
              <div className="card-content">
                <div className="class-card-content">
                  <div className="class-card-body">
                    <h1 className="class-grade">
                      {props.grade}
                      {props.section}
                    </h1>
                    <h2>GRADE</h2>
                  </div>
                </div>
                <div className="text-card">
                  <h1>
                    {props.grade}
                    {props.section} grade
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="students">
            {props.loading
              ? Array.from(new Array(14)).map((_, index) => (
                  <Skeleton
                    className="skelet"
                    key={index}
                    variant="rectangular"
                    width={240}
                    height={240}
                    animation="wave"
                    style={{ marginRight: 10 }}
                  />
                ))
              : props.students.map((student) => (
                  <Student
                    key={student.id}
                    student={student}
                    onClickStudent={props.onClickStudent}
                  />
                ))}
            {props.error ? <p className="error">{props.error}</p> : ""}
          </div>
        </div>
      </div>
      <WelcomeFooter />
    </div>
  );
};

export default GradeStudents;
