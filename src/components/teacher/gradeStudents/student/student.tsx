import "./student.scss";

const Student = () => {
  return (
    <div className="student-component">
      <div className="student-info-all">
        <div className="student-picture">
          <img
            src="https://cdn.pixabay.com/photo/2021/06/07/13/46/user-6318008_640.png"
            alt="icon-user"
          />
        </div>
        <div className="student-info">
          <div className="studnet-name">
            <p className="student-name-inside">Сериков Рамазан Берикович</p>
            <p className="student-id">Student ID: 123124</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
