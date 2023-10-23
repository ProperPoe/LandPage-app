import React, { useState } from 'react'
import { NoteBtn } from '../NoteBtn'
import { LoginBtn } from '../LoginBtn'
import Axios from 'axios';
import './Login.css'
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
import { useNavigate } from 'react-router-dom';
import * as api from '../../api/index.js';


export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateLogin = async (e) => {
    e.preventDefault();

    await Axios.post('https://travel-prep-290b6c1204c7.herokuapp.com/api/login', {email, password})
    // await Axios.post('http://localhost:9000/api/login', {email, password})
      .then((response) => {
        localStorage.setItem("userID", response.data.user._id)
      })
      .then(() => dispatch(authActions.login()))
      .then(() => navigate("/Experiences"))
  }

  return (
    <>
      <div className='login-container'>
        <form onSubmit={updateLogin}>
          <input
            type="text"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <NoteBtn> Login </NoteBtn>

          <LoginBtn>Don't have an account? Sign Up!</LoginBtn>

        </form>
      </div>
      
    </>
  )
}
