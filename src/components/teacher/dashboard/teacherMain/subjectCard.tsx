import "./subjectCard.scss";
import historyCard from "../../../../assets/subjectCards/techny-file-with-atom-icon.svg";

const SubjectCard = () => {
  return (
    <div className="subject-card">
      <div className="subject-card-content">
        <div className="subject-card-body">
          <img src={historyCard} alt="" />
        </div>
      </div>
      <div className="subject-card-text">
        <h3>Mathematics</h3>
      </div>
    </div>
  );
}

export default SubjectCard;
