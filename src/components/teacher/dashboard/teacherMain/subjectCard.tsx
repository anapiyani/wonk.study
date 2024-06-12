import historyCard from "../../../../assets/subjectCards/techny-file-with-atom-icon.svg";
import "./subjectCard.scss";

type TProps = {
  id: number;
  course_img: string | null;
  name: string;
};

const SubjectCard = (props: TProps) => {
  const handleClickSubject = () => {
    console.log(`clicked to  ${props.name} ${props.id}`);
  };

  return (
    <div onClick={handleClickSubject} className="subject-card">
      <div className="subject-card-content">
        <div className="subject-card-body">
          <img
            src={props.course_img ? props.course_img : historyCard}
            alt="Subject"
          />
        </div>
      </div>
      <div className="subject-card-text">
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

export default SubjectCard;
