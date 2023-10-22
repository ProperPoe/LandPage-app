import React from 'react';
import { useState, useEffect } from "react";
import Axios from "axios";
import '../../App.css'
import Layout from '../Layout.js'
import './SignUp.css'
import Display from '../Display.js'
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
import { useNavigate } from 'react-router-dom';
import * as api from '../../api/index.js';

export default function SignUp() {
    const [listOfUsers, setListOfUsers] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    /*useEffect(() => {
      Axios.get("http://localhost:9001/getUsers")
        .then((response) => {setListOfUsers(response.data);}
      );
    }, []);*/
  
    const createUser = (e) => {
      e.preventDefault()

      Axios.post('https://travel-prep-290b6c1204c7.herokuapp.com/api/createUser',{
        name,
        email,
        password,
      }).then((response) => {
          console.log(response)
          localStorage.setItem("userID", response.data.newUser._id)
        })
        .then(() => dispatch(authActions.login()))
        .then(() => navigate("/Experiences"))
        
        //{setListOfUsers([...listOfUsers,{name, age, username}])}

      ;
    };
  return (
    <>
        <Layout setName={setName} setEmail={setEmail} setPassword={setPassword} create={createUser} />
        {/*<Display names={listOfUsers} />*/}
    </>
  )
}
