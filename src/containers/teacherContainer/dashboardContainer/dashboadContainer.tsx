import { useSelector } from "react-redux";
import TeacherDashboard from "../../../components/teacher/dashboard/teacherDashboard";
import { RootState } from "../../../store/store";

const DashboardContainer = () => {
  const user = useSelector((state: RootState) => state.info.user);
  const loading = useSelector((state: RootState) => state.info.isLoading);
  const iserror = useSelector((state: RootState) => state.info.isError);
  const courses = useSelector((state: RootState) => state.info.courses);
  const classes = useSelector((state: RootState) => state.info.classes);

  return (
    <TeacherDashboard
      user={user}
      loading={loading}
      iserror={iserror}
      courses={courses}
      classes={classes}
    />
  );
};

export default DashboardContainer;
