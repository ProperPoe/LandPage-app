import React, { useState } from 'react'
import { NoteBtn } from '../NoteBtn'
import { LoginBtn } from '../LoginBtn'
import Axios from 'axios';
import './Login.css'


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateLogin = (e) => {
    e.preventDefault();

    Axios.post('http://localhost:9001/login', {email, password})
      .then((response) => {
        console.log(response)
      })
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
