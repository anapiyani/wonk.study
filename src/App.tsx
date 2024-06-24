import { Routes, BrowserRouter, Route } from "react-router-dom";
import {
  AboutUs,
  ContactUs,
  PrivacyPolicy,
  TermsOfUse,
} from "@/components/welcome";

import PrivateRoutes from "@/utils/privateRoutes";
import NotFound from "@/components/error/notFound";
import {
  GradeStudentsContainer,
  LoginContainer,
  StudentProfileContainer,
  DashboardContainer,
  SubjectPageContainer,
  SettingsContainer,
  WelcomeContainer,
} from "@/containers";

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
            <Route
              path="/teacher-dashboard/:subject/:grade"
              element={<SubjectPageContainer />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
