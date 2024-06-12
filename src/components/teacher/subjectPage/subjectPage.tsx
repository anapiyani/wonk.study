import "./subjectPage.scss";
import TeacherHeader from "../layout/teacherHeader/teacherHeader";
import WelcomeFooter from "../../welcome/layout/welcomeFooter/welcomeFooter";
import { TCoureses, TUserInfo } from "../../../types/types";
import { Button } from "@mui/material";

type TProps = {
  user: TUserInfo | null;
  courses: TCoureses[];
};

const SubjectPage = (props: TProps) => {
  return (
    <div className="subject-page">
      <TeacherHeader courses={props.courses} />
      <div className="subject-page-outline">
        <div className="container">
          <div className="subject-page-content">
            <h1>hehehhe</h1>
          </div>
        </div>
      </div>

      <WelcomeFooter />
    </div>
  );
};

export default SubjectPage;
