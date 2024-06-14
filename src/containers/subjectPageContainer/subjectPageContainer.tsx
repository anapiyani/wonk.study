import { useSelector } from "react-redux";
import SubjectPage from "../../components/teacher/subjectPage/subjectPage";
import { RootState } from "../../store/store";

const SubjectPageContainer = () => {
  const courses = useSelector((state: RootState) => state.info.courses);
  return <SubjectPage courses={courses} />;
};

export default SubjectPageContainer;
