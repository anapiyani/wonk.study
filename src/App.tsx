import { Routes, BrowserRouter, Route } from "react-router-dom";
import WelcomeContainer from "./containers/welcomeContainer/welcomeContainer";
import AboutUs from "./components/welcome/aboutUs/aboutUs";
import ContactUs from "./components/welcome/contactsUs/contactsUs";
import PrivacyPolicy from "./components/welcome/policy/privacyPolicy";
import TermsOfUse from "./components/welcome/termsOfUse/termsOfUse";
import LoginContainer from "./containers/loginContainer/loginContainer";
import TeacherDashboard from "./components/teacher/dashboard/teacherDashboard";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeContainer />}>
            <Route path="/welcomePage" element={<WelcomeContainer />} />
          </Route>
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/termsOfUse" element={<TermsOfUse />} />
          <Route path="/login" element={<LoginContainer/>} />
          <Route path="/teacherDashboard" element={<TeacherDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
