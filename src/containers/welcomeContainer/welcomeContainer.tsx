import { useEffect, useState } from "react";
import WelcomePage from "../../components/welcome/welcomePage/welcomePage";

const WelcomeContainer = () => {
  const token = localStorage.getItem("accessToken");
  const [buttonChange, setButtonChange] = useState<boolean>(false);

  useEffect(() => {
    if (token) {
      setButtonChange(true);
    } else {
      setButtonChange(false);
    }
  }, [token]);

  const handlelogOut = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  return (
    <div className="welcome-container">
      <WelcomePage buttonChange={buttonChange} handlelogOut={handlelogOut} />
    </div>
  );
};

export default WelcomeContainer;
