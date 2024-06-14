import historyCard from "../../../../assets/subjectCards/techny-file-with-atom-icon.svg";
import "./subjectsModalCard.scss";

type TProps = {
  id: number;
  course_img: string | null;
  name: string;
};

const SubjectsModalCard = (props: TProps) => {
  const handleClickSubject = () => {
    console.log(`clicked to  ${props.name} ${props.id}`);
  };

  return (
    <div onClick={handleClickSubject} className="subject-modal-card">
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
