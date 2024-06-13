import { Routes, BrowserRouter, Route } from "react-router-dom";
import WelcomeContainer from "./containers/welcomeContainer/welcomeContainer";
import AboutUs from "./components/welcome/aboutUs/aboutUs";
import ContactUs from "./components/welcome/contactsUs/contactsUs";
import PrivacyPolicy from "./components/welcome/policy/privacyPolicy";
import TermsOfUse from "./components/welcome/termsOfUse/termsOfUse";
import LoginContainer from "./containers/loginContainer/loginContainer";
import DashboardContainer from "./containers/teacherContainer/dashboardContainer/dashboadContainer";
import PrivateRoutes from "./utils/privateRoutes";
import NotFound from "./components/error/notFound";
import SettingsContainer from "./containers/teacherSettings/teacherSettingsContainer";
import SubjectPageContainer from "./containers/teacherContainer/subjectPageContainer/subjectPageContainer";
import GradeStudentsContainer from "./containers/gradeStudentsContainer/gradeStudentsContainer";
import StudentProfileContainer from "./containers/stundetProfileContainer/studentProfileContainer";
import "./index.scss";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<WelcomeContainer />}>
            <Route path="/welcomePage" element={<WelcomeContainer />} />
          </Route>
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/termsOfUse" element={<TermsOfUse />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/teacher-dashboard" element={<DashboardContainer />} />
            <Route path="/settings" element={<SettingsContainer />} />
            <Route path="/subject-page" element={<SubjectPageContainer />} />
            <Route
              path="/teacher-dashboard/grade/:grade/:section"
              element={<GradeStudentsContainer />}
            />
            <Route
              path="/teacher-dashboard/:studentId"
              element={<StudentProfileContainer />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
