import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Weather from "./components/pages/Weather";
import Flights from "./components/pages/Flights";
import Experiences from "./components/pages/Experiences";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Weather />} />
          <Route path='/flights' exact element={<Flights />} />
          <Route path='/Experiences' exact element={<Experiences />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
