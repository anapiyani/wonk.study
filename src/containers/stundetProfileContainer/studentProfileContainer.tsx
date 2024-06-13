import { useDispatch, useSelector } from "react-redux";
import StudentProfile from "../../components/teacher/studentProfile/studentProfile";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { getStudentById } from "../../store/students.slice";

const StudentProfileContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { studentId } = useParams<{ studentId: string }>();
  const studentInfo = useSelector(
    (state: RootState) => state.students.student_info
  );
  const studentLoading = useSelector(
    (state: RootState) => state.students.student_loading
  );
  const studentError = useSelector(
    (state: RootState) => state.students.student_error
  );

  useEffect(() => {
    dispatch(getStudentById(studentId));
  }, [dispatch]);

  return (
    <StudentProfile
      student_image={studentInfo?.profile_picture}
      student_first_name={studentInfo?.first_name}
      student_last_name={studentInfo?.last_name}
      iin={"0238288467"}
      gender={studentInfo?.gender}
      email={studentInfo?.email}
      phone={studentInfo?.phone_number}
      loading={studentLoading}
      isError={studentError}
      grade={studentInfo?.grade_level}
      section={studentInfo?.section}
    />
  );
};

export default StudentProfileContainer;
