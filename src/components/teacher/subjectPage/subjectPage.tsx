import "./subjectPage.scss";
import TeacherHeader from "../layout/teacherHeader/teacherHeader";
import WelcomeFooter from "../../welcome/layout/welcomeFooter/welcomeFooter";
import { TCoureses } from "../../../types/types";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

type TProps = {
  courses: TCoureses[];
};

const SubjectPage = (props: TProps) => {
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
                    <h1 className="class-grade">10</h1>
                    <h2>GRADE</h2>
                  </div>
                </div>
                <div className="text-card">
                  <h1>History | 10 Grade</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="page-content">
            <div className="element-subject">
              <h1>Description</h1>
              <Button
                className="btn-subject"
                variant="outlined"
                startIcon={<EditIcon />}
              >
                Change description
              </Button>
            </div>
            <div className="element-subject">
              <h1>Lesson plan</h1>
              <Button
                className="btn-subject"
                variant="outlined"
                startIcon={<EditIcon />}
              >
                Create lesson plan
              </Button>
            </div>
            <div className="element-subject">
              <h1>Homeworks</h1>
              <Button
                className="btn-subject"
                variant="outlined"
                startIcon={<SpaceDashboardIcon />}
              >
                Open homeworks
              </Button>
            </div>
            <div className="element-subject">
              <h1>Grades</h1>
              <Button
                className="btn-subject"
                variant="outlined"
                startIcon={<SpaceDashboardIcon />}
              >
                Manage exam grades
              </Button>
            </div>
          </div>
        </div>
      </div>
      <WelcomeFooter />
    </div>
  );
};

export default SubjectPage;
