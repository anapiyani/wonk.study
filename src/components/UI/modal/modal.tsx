import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import QRios from "../../../assets/Apple.png";
import QRandroid from "../../../assets/google-play.png";
import "./modal.scss";

type TProps = {
  icon: string;
  closeModal: () => void;
};

const iconMap: { [key: string]: React.ReactNode } = {
  apple: <AppleIcon className="icon-image" />,
  google: <AndroidIcon className="icon-image" />,
};

const Modal = (props: TProps) => {
  const SelectedIcon = iconMap[props.icon] || (
    <AppleIcon className="icon-image" />
  );

  return (
    <div className="modal">
      <div className="backdrop" onClick={props.closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="info-content">
            <div className="window">
              <div className="window-content">
                <div className="image">
                  <img
                    src={props.icon === "apple" ? QRios : QRandroid}
                    alt="Modal Content"
                  />
                </div>
              </div>
            </div>
            <div className="close" onClick={props.closeModal}>
              <CloseIcon className="close-icon" />
            </div>
          </div>
          <div className="title-content">
            <div className="icon">{SelectedIcon}</div>
            <div className="title">
              <h1>{props.icon === "apple" ? "Appstore" : "Google Play"}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
