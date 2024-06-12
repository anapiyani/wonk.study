import "./classCard.scss";

type TProps = {
  grade: string;
  section: string;
  number_of_students: number;
};

const ClassCard = (props: TProps) => {
  return (
    <div className="class-card">
      <div className="class-card-content">
        <div className="class-card-body">
          <h1 className="class-grade">
            {props.grade}
            {props.section}
          </h1>
          <h2>GRADE</h2>
        </div>
      </div>
      <div className="class-card-text">
        <h3>Show students({props.number_of_students})</h3>
      </div>
    </div>
  );
};

export default ClassCard;
