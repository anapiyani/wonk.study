import {Routes, BrowserRouter, Route } from 'react-router-dom';
import WelcomeContainer from './containers/welcomeContainer/welcomeContainer';
import AboutUs from './components/welcome/aboutUs/aboutUs';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<WelcomeContainer/>}>
              <Route path='/welcomePage' element={<WelcomeContainer/>} />
            </Route>
            <Route path='/aboutUs' element={<AboutUs/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;