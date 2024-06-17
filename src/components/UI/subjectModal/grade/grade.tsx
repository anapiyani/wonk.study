import { useNavigate } from "react-router-dom";
import { TClass } from "../../../../types/types";
import "../subjectModal.scss";

type TProps = {
  parallels: string;
  classesSubject: TClass[];
};

const Grade = (props: TProps) => {
  const navigate = useNavigate();
  const onClickGradeWSubject = () => {
    navigate(
      `/teacher-dashboard/${props.classesSubject[0].course.id}/${props.parallels}`
    );
  };

  return (
    <div onClick={onClickGradeWSubject} className="grade">
      <div className="class-card-body">
        <h1 className="grade-text">{props.parallels}</h1>
        <p>GRADE</p>
      </div>
    </div>
  );
};

export default Grade;
