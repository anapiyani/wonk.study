import CloseIcon from "@mui/icons-material/Close";
import "./subjectModal.scss";
import Grade from "./grade/grade";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { CircularProgress, Skeleton } from "@mui/material";

type SubjectModalProps = {
  subjectId: number | null;
  handleClose: () => void;
};

const SubjectModal = ({ subjectId, handleClose }: SubjectModalProps) => {
  const subjectClassess = useSelector(
    (state: RootState) => state.info.subjectClasses
  );
  const loading = useSelector((state: RootState) => state.info.subjectLoading);
  return (
    <div className="subject-modal">
      <div className="backdrop" onClick={handleClose}>
        <div className="subject-modal-content">
          <button onClick={handleClose}>
            <CloseIcon />
          </button>
          <div className="grade-select">
            <div className="select-text">
              <p>Select the grade</p>
            </div>
            <div className="grades">
              {loading
                ? Array.from(new Array(2)).map((_, index) => (
                    <Skeleton
                      key={index}
                      variant="rectangular"
                      width={210}
                      height={118}
                      animation="wave"
                      style={{ marginRight: 10 }}
                    />
                  ))
                : subjectClassess.length > 0
                ? subjectClassess.map((item) => (
                    <Grade
                      parallels={item.parallel}
                      key={item.parallel}
                      classesSubject={item.classes}
                    />
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectModal;
