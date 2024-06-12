import { useSelector } from "react-redux";
import TeacherDashboard from "../../../components/teacher/dashboard/teacherDashboard";
import { RootState } from "../../../store/store";
import { useNavigate } from "react-router-dom";

const DashboardContainer = () => {
  const naviagtor = useNavigate();
  const user = useSelector((state: RootState) => state.info.user);
  const loading = useSelector((state: RootState) => state.info.isLoading);
  const iserror = useSelector((state: RootState) => state.info.isError);
  const courses = useSelector((state: RootState) => state.info.courses);
  const classes = useSelector((state: RootState) => state.info.classes);

  const handleClassOpen = () => {};

  return (
    <TeacherDashboard
      user={user}
      loading={loading}
      iserror={iserror}
      courses={courses}
      classes={classes}
      handleClassOpen={handleClassOpen}
    />
  );
};

export default DashboardContainer;
