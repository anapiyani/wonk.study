import { useSelector } from "react-redux";
import Settings from "../../components/teacher/settings/settings";
import { RootState } from "../../store/store";

const SettingsContainer = () => {
  const user = useSelector((state: RootState) => state.info.user);
  const courses = useSelector((state: RootState) => state.info.courses);

  return (
    <Settings
      user={user}
      courses={courses}
    />
  );
};

export default SettingsContainer;
