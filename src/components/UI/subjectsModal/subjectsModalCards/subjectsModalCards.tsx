import { useSelector } from "react-redux";
import historyCard from "../../../../assets/subjectCards/techny-file-with-atom-icon.svg";
import "./subjectsModalCard.scss";
import { RootState } from "@/store/store";
import { useNavigate } from "react-router-dom";

type TProps = {
  id: number;
  course_img: string | null;
  name: string;
};

const SubjectsModalCard = (props: TProps) => {
  const subjectClassess = useSelector(
    (state: RootState) => state.subject.subjectClasses
  );
  const navigate = useNavigate();

  const onClickGradeWSubject = () => {
    navigate(`/teacher-dashboard/${props.id}/${subjectClassess[0].parallel}`);
  };

  return (
    <div onClick={onClickGradeWSubject} className="subject-modal-card">
      <div className="subject-card-content-modal">
        <div className="subject-card-body-modal">
          <img
            src={props.course_img ? props.course_img : historyCard}
            alt="Subject"
          />
        </div>
      </div>
      <div className="subject-card-text-modal">
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

export default SubjectsModalCard;
