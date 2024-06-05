import {Routes, BrowserRouter, Route } from 'react-router-dom';
import WelcomeContainer from './containers/welcomeContainer/welcomeContainer';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<WelcomeContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;