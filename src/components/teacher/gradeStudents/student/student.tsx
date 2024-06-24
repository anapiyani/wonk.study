import "./student.scss";
import { TStudent } from "../../../../types/types";

type StudentProps = {
  student: TStudent;
  onClickStudent: (id: number) => void;
};

const Student = (props: StudentProps) => {
  return (
    <div onClick={() => props.onClickStudent(props.student.id)} className="student-component">
      <div className="student-info-all">
        <div className="student-picture">
          <img
            src={
              props.student.profile_picture ||
              "https://cdn.pixabay.com/photo/2021/06/07/13/46/user-6318008_640.png"
            }
            alt="icon-user"
          />
        </div>
        <div className="student-info">
          <div className="student-name">
            <p className="student-name-inside">
              {props.student.last_name} {props.student.first_name}
            </p>
            <p className="student-id">Student ID: {props.student.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
