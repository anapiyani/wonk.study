import { TClass } from "../../../../types/types";
import "../subjectModal.scss";

type TProps = {
  parallels: string;
  classesSubject: TClass[];
};

const Grade = (props: TProps) => {
  return (
    <div className="grade">
      <div className="class-card-body">
        <h1 className="grade-text">{props.parallels}</h1>
        <p>GRADE</p>
      </div>
    </div>
  );
};

export default Grade;
