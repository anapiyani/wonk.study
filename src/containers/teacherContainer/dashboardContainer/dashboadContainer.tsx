import { useSelector } from "react-redux";
import TeacherDashboard from "../../../components/teacher/dashboard/teacherDashboard";
import { RootState } from "../../../store/store";

const DashboardContainer = () => {
  const user = useSelector((state: RootState) => state.info.user);
  const loading = useSelector((state: RootState) => state.info.isLoading);
  const iserror = useSelector((state: RootState) => state.info.isError);

  return <TeacherDashboard user={user} loading={loading} iserror={iserror} />;
};

export default DashboardContainer;
