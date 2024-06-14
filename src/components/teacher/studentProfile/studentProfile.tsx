import { useSelector } from "react-redux";
import TeacherHeader from "../layout/teacherHeader/teacherHeader";
import "./studentProfile.scss";
import { RootState } from "../../../store/store";
import WelcomeFooter from "../../welcome/layout/welcomeFooter/welcomeFooter";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { Link } from "react-router-dom";
import { Alert, Skeleton } from "@mui/material";

type TProps = {
  student_image: string | null | undefined;
  student_first_name: string | null | undefined;
  student_last_name: string | null | undefined;
  iin: string | null | undefined;
  gender: string | null | undefined;
  email: string | null | undefined;
  phone: string | null | undefined;
  loading: boolean;
  isError: string | null;
  grade: string | null | undefined;
  section: string | null | undefined;
};

const StudentProfile = (props: TProps) => {
  const courses = useSelector((state: RootState) => state.info.courses);

  return (
    <div className="student-profile">
      <TeacherHeader courses={courses} />
      <div className="student-profile-content">
        <div className="header-div">
          <div className="about-page">
            <div className="container">
              <div className="back">
                <Link
                  className="link-back"
                  to={`/teacher-dashboard/grade/${props.grade}/${props.section}`}
                >
                  <KeyboardBackspaceOutlinedIcon className="icon-back" /> Go
                  back
                </Link>
              </div>
              <div className="card-content">
                <div className="class-card-content">
                  {props.loading ? (
                    <Skeleton
                      variant="rectangular"
                      width={120}
                      height={120}
                      style={{ borderRadius: 12 }}
                    />
                  ) : (
                    <div className="class-card-body">
                      <img
                        src={
                          props.student_image
                            ? props.student_image
                            : "https://cdn.pixabay.com/photo/2021/06/07/13/46/user-6318008_640.png"
                        }
                        className="class-grade"
                      ></img>
                    </div>
                  )}
                </div>
                <div className="text-card">
                  {props.loading ? (
                    <Skeleton width={200} height={40} />
                  ) : (
                    <h1>
                      {props.student_first_name} {props.student_last_name}
                    </h1>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="about-student">
            {props.loading ? (
              <div className="student-info-content">
                <div className="header-role">
                  <Skeleton width={100} height={30} />
                </div>
                <div className="info">
                  <div className="info-content">
                    <p>Full name</p>
                    <Skeleton width={200} height={20} />
                  </div>
                  <div className="info-content">
                    <p>IIN</p>
                    <Skeleton width={200} height={20} />
                  </div>
                  <div className="info-content">
                    <p>Gender</p>
                    <Skeleton width={200} height={20} />
                  </div>
                  <div className="info-content">
                    <p>Email</p>
                    <Skeleton width={200} height={20} />
                  </div>
                  <div className="info-content">
                    <p>Phone number</p>
                    <Skeleton width={200} height={20} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="student-info-content">
                <div className="header-role">
                  <h1>Student</h1>
                </div>
                <div className="info">
                  <div className="info-content">
                    <p>Full name</p>
                    <p className="info-text">
                      {props.student_first_name} {props.student_last_name}
                    </p>
                  </div>
                  <div className="info-content">
                    <p>IIN</p>
                    <p className="info-text">{props.iin}</p>
                  </div>
                  <div className="info-content">
                    <p>Gender</p>
                    <p className="info-text">{props.gender}</p>
                  </div>
                  <div className="info-content">
                    <p>Email</p>
                    <p className="info-text">{props.email}</p>
                  </div>
                  <div className="info-content">
                    <p>Phone number</p>
                    <p className="info-text">{props.phone}</p>
                  </div>
                </div>
              </div>
            )}
            {props.isError && <Alert severity="error">{props.isError}</Alert>}
          </div>
        </div>
      </div>
      <WelcomeFooter />
    </div>
  );
};

export default StudentProfile;
