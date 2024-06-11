import "./subjectModal.scss";

const SubjectModal = () => {
  return (
    <div className="subject-modal">
      <div className="backdrop">
        <div className="subject-modal-content">
          <div className="grade-select">
            <div className="select-text">
              <p>Select the grade</p>
            </div>
            <div className="grade">
              <div className="grade-bg">
                <div className="image"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectModal;
