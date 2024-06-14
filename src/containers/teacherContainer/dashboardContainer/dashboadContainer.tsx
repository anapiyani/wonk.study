import { useDispatch, useSelector } from "react-redux";
import TeacherDashboard from "../../../components/teacher/dashboard/teacherDashboard";
import { AppDispatch, RootState } from "../../../store/store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { gradesSubject } from "../../../store/info.slice";

const DashboardContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.info.user);
  const loading = useSelector((state: RootState) => state.info.isLoading);
  const iserror = useSelector((state: RootState) => state.info.isError);
  const courses = useSelector((state: RootState) => state.info.courses);
  const classes = useSelector((state: RootState) => state.info.classes);

  const [openSubjectModal, setOpenSubjectModal] = useState<boolean>(false);
  const [selectedSubjectId, setSelectedSubjectId] = useState<number | null>(
    null
  );

  const handleClassOpen = (grade: string, section: string) => {
    navigate(`/teacher-dashboard/grade/${grade}/${section}`);
  };

  const handleSubjectOpen = async (id: number) => {
    setSelectedSubjectId(id);
    dispatch(gradesSubject(id));
    setOpenSubjectModal(true);
  };

  const handleCloseSubjectModal = () => {
    setOpenSubjectModal(false);
    setSelectedSubjectId(null);
  };

  return (
    <TeacherDashboard
      user={user}
      loading={loading}
      iserror={iserror}
      courses={courses}
      classes={classes}
      handleClassOpen={handleClassOpen}
      handleClickSubject={handleSubjectOpen}
      openSubjectModal={openSubjectModal}
      handleCloseSubjectModal={handleCloseSubjectModal}
      selectedSubjectId={selectedSubjectId}
    />
  );
};

export default DashboardContainer;
