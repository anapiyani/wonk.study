import historyCard from "../../../../assets/subjectCards/techny-file-with-atom-icon.svg";
import "./subjectCard.scss";

type TProps = {
  id: number;
  course_img: string | null;
  name: string;
};

const SubjectCard = (props: TProps) => {
  return (
    <div className="subject-card">
      <div className="subject-card-content">
        <div className="subject-card-body">
          {/* I put the history image if there is no images... so we'll out real images when it comes */}
          <img src={props.course_img ? props.course_img : historyCard} alt="" />
        </div>
      </div>
      <div className="subject-card-text">
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

export default SubjectCard;
