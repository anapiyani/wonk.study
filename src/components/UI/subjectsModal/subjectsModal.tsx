import { TCoureses } from "../../../types/types";
import "./subjectsModal.scss";
import SubjectsModalCard from "./subjectsModalCards/subjectsModalCards";

type TProps = {
  courses: TCoureses[];
  handleOpenSubjectModal: () => void;
};

const SubjectsModal = (props: TProps) => {
  return (
    <div className="subjects-modal">
      <div onClick={props.handleOpenSubjectModal} className="backdrop">
        <div className="subject-modal-content">
          {props.courses.map((item) => (
            <SubjectsModalCard
              key={item.id}
              id={item.id}
              course_img={item.course_img}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectsModal;
