import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Experiences from "./components/pages/Experiences";
import Login from "./components/pages/Login"
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/Experiences' exact element={<Experiences />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
