import React from 'react';
import { NoteBtn } from './NoteBtn'
import './Layout.css'

export default function Layout ({setName, setEmail, setPassword, create}) {
  return (
    <div className='layout'>
      <form onSubmit={create}>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {setName(event.target.value);}}
        />
        <input
          type="text"
          placeholder="Email..."
          onChange={(event) => {setEmail(event.target.value);}}
        />
        <input
          type="text"
          placeholder="Password..."
          onChange={(event) => {setPassword(event.target.value);}}
        />
        <NoteBtn> Create User </NoteBtn>
      </form>
    </div>
  )
}
