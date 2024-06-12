import { Link } from "react-router-dom";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import "./gradeStudents.scss";
import TeacherHeader from "../layout/teacherHeader/teacherHeader";
import { TCoureses } from "../../../types/types";
import WelcomeFooter from "../../welcome/layout/welcomeFooter/welcomeFooter";
import Student from "./student/student";

type TProps = {
  courses: TCoureses[];
};

const GradeStudents = (props: TProps) => {
  return (
    <div className="grade-stundets">
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
                    <h1 className="class-grade">10A</h1>
                    <h2>GRADE</h2>
                  </div>
                </div>
                <div className="text-card">
                  <h1>10A grade</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="students">
            <Student />
          </div>
        </div>
      </div>
      <WelcomeFooter />
    </div>
  );
};

export default GradeStudents;
