import SubjectPage from "../../../components/teacher/subjectPage/subjectPage";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const SubjectPageContainer = () => {
  const user = useSelector((state: RootState) => state.info.user);
  const courses = useSelector((state: RootState) => state.info.courses);

  return <SubjectPage user={user} courses={courses} />;
};

export default SubjectPageContainer;
