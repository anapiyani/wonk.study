import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GradeStudents from "../../components/teacher/gradeStudents/gradeStudents";
import { AppDispatch, RootState } from "../../store/store";
import { getStudentsByGrade } from "../../store/students.slice";

const GradeStudentsContainer = () => {
  const { grade, section } = useParams<{ grade: string; section: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const courses = useSelector((state: RootState) => state.info.courses);
  const students = useSelector((state: RootState) => state.students.students);
  const error = useSelector((state: RootState) => state.students.error);
  const loading = useSelector(
    (state: RootState) => state.students.students_loading
  );

  useEffect(() => {
    if (grade && section) {
      dispatch(getStudentsByGrade({ grade_level: grade, section }));
    }
  }, [grade, section, dispatch]);

  return (
    <GradeStudents
      courses={courses}
      students={students}
      loading={loading}
      error={error}
      grade={grade!}
      section={section!}
    />
  );
};

export default GradeStudentsContainer;
