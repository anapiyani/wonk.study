import { useSelector } from "react-redux";
import GradeStudents from "../../components/teacher/gradeStudents/gradeStudents";
import { RootState } from "../../store/store";

const GradeStudentsContainer = () => {
  const courses = useSelector((state: RootState) => state.info.courses);
  return <GradeStudents courses={courses} />;
};

export default GradeStudentsContainer;
