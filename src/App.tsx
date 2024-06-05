import {Routes, BrowserRouter, Route } from 'react-router-dom';
import WelcomeContainer from './containers/welcomeContainer/welcomeContainer';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<WelcomeContainer/>}>
              <Route path='/welcomePage' element={<WelcomeContainer/>} />
              {/* <Route path='/aboutUs' element="" /> */}
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;