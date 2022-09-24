import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Weather from "./components/pages/Weather";
import Flights from "./components/pages/Flights";
import Experiences from "./components/pages/Experiences";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login"
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn)
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Weather />} />
          <Route path='/flights' exact element={<Flights />} />
          <Route path='/Experiences' exact element={<Experiences />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
