import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Display from "./components/Display";
import Header from "./components/Header";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:9001/getUsers")
      .then((response) => {setListOfUsers(response.data);}
    );
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:9001/createUser", {
      name,
      age,
      username,
    }).then((response) => {setListOfUsers([...listOfUsers,{name, age, username}]);});
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
      <Layout name={setName} age={setAge} user={setUsername} create={createUser} />
      <Display names={listOfUsers}  />
    </div>
  );
}

export default App;
