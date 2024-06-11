import { Button } from "@mui/material";
import "./logOutModal.scss";
import { useNavigate } from "react-router-dom";

type TProps = {
  closeModalLogOut: () => void;
};

const LogOutModal = (props: TProps) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/welcomePage");
  };

  return (
    <div className="log-out">
      <div className="backdrop" onClick={props.closeModalLogOut}>
        <div className="log-out-modal-content">
          <div className="content-log-out">
            <div className="text-content">
              <p>Are you sure you want to log out?</p>
            </div>
            <div className="buttons">
              <Button
                onClick={props.closeModalLogOut}
                className="button-log-out cancel-button"
                variant="outlined"
              >
                Cancel
              </Button>
              <Button
                onClick={handleLogOut}
                className="button-log-out log-out-button"
                variant="contained"
              >
                Log out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
