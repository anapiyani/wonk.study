import WelcomeFooter from "../../welcome/layout/welcomeFooter/welcomeFooter";
import WelcomeHeader from "../../welcome/layout/welcomeHeader/welcomeHeader";
import "./teacherDashboard.scss";

const TeacherDashboard = () => {
  return (
    <div className="teacher-dashboard">
      <WelcomeHeader />
      {/* Add your dashboard content here */}
      <WelcomeFooter />
    </div>
  );
};

export default TeacherDashboard;
