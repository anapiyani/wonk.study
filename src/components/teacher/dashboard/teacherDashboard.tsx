import { TUserInfo } from "../../../types/types";
import WelcomeFooter from "../../welcome/layout/welcomeFooter/welcomeFooter";
import TeacherHeader from "../layout/teacherHeader/teacherHeader";
import "./teacherDashboard.scss";

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
      <div className="container"></div>
      <WelcomeFooter />
    </div>
  );
};

export default TeacherDashboard;
