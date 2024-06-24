import "./subjectPage.scss";
import TeacherHeader from "../layout/teacherHeader/teacherHeader";
import WelcomeFooter from "../../welcome/layout/welcomeFooter/welcomeFooter";
import { TCoureses } from "../../../types/types";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { Link, useParams } from "react-router-dom";
import { Alert, Button, Skeleton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { subjectInfo } from "../../../store/subject.slice";

type TProps = {
  courses: TCoureses[];
};

const SubjectPage = (props: TProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();
  const subjectName = useSelector(
    (state: RootState) => state.subject.subjectName
  );
  const isLoading = useSelector((state: RootState) => state.subject.isLoading);
  const isError = useSelector((state: RootState) => state.subject.isError);

  useEffect(() => {
    dispatch(subjectInfo(params.subject));
  }, [dispatch]);

  return (
    <div className="grade-students">
      <TeacherHeader courses={props.courses} />
      <div className="grade-content">
        <div className="header-div">
          <div className="about-page">
            <div className="container">
              {isError ? (
                <Alert severity="error" className="error_subject_content">
                  {isError}
                </Alert>
              ) : (
                ""
              )}
              <div className="back">
                <Link className="link-back" to="/teacher-dashboard">
                  <KeyboardBackspaceOutlinedIcon className="icon-back" /> Go
                  back
                </Link>
              </div>
              <div className="card-content">
                <div className="class-card-content">
                  {isLoading ? (
                    <Skeleton
                      variant="rectangular"
                      width={120}
                      height={120}
                      style={{ borderRadius: 12 }}
                    />
                  ) : (
                    <div className="class-card-body">
                      <h1 className="class-grade">{params.grade}</h1>
                      <h2>GRADE</h2>
                    </div>
                  )}
                </div>
                <div className="text-card">
                  {isLoading ? (
                    <Skeleton
                      variant="rectangular"
                      width={350}
                      height={60}
                      style={{ borderRadius: 12 }}
                    />
                  ) : (
                    <h1>
                      {subjectName} | {params.grade} Grade
                    </h1>
                  )}
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
