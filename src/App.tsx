import {Routes, BrowserRouter, Route } from 'react-router-dom';
import WelcomeContainer from './containers/welcomeContainer/welcomeContainer';
import AboutUs from './components/welcome/aboutUs/aboutUs';
import ContactUs from './components/welcome/contactsUs/contactsUs';
import PravicyPolicy from './components/welcome/policy/pravicyPolicy';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<WelcomeContainer/>}>
              <Route path='/welcomePage' element={<WelcomeContainer/>} />
            </Route>
            <Route path='/aboutUs' element={<AboutUs/>} />
            <Route path='/contact' element={<ContactUs/>} />
            <Route path='/pravicyPolicy' element={<PravicyPolicy/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;