import {Routes, BrowserRouter, Route } from 'react-router-dom';
import WelcomeContainer from './containers/welcomeContainer/welcomeContainer';
import AboutUs from './components/welcome/aboutUs/aboutUs';
import ContactUs from './components/welcome/contactsUs/contactsUs';

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;