import "./student.scss";
import { TStudent } from "../../../../types/types";

type StudentProps = {
  student: TStudent;
};

const Student = ({ student }: StudentProps) => {
  return (
    <div className="student-component">
      <div className="student-info-all">
        <div className="student-picture">
          <img
            src={
              student.profile_picture ||
              "https://cdn.pixabay.com/photo/2021/06/07/13/46/user-6318008_640.png"
            }
            alt="icon-user"
          />
        </div>
        <div className="student-info">
          <div className="student-name">
            <p className="student-name-inside">
              {student.last_name} {student.first_name}
            </p>
            <p className="student-id">Student ID: {student.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
