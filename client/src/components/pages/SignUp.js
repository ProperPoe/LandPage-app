import React from 'react';
import { useState, useEffect } from "react";
import Axios from "axios";
import '../../App.css'
import Layout from '../Layout.js'
import Display from '../Display.js'

export default function SignUp() {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [username, setUsername] = useState("");
  
    useEffect(() => {
      Axios.get("http://localhost:9001/getUsers")
        .then((response) => {setListOfUsers(response.data);}
      );
    }, []);
  
    const createUser = (e) => {
      e.preventDefault()

      Axios.post("http://localhost:9001/createUser", {
        name,
        age,
        username,
      }).then((response) => {setListOfUsers([...listOfUsers,{name, age, username}]);});
    };
  return (
    <>
        <Layout name={setName} age={setAge} user={setUsername} create={createUser} />
        <Display names={listOfUsers} />
    </>
  )
}
