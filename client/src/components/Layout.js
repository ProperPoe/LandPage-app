import React from 'react';
import { NoteBtn } from './NoteBtn'
import './Layout.css'

export default function Layout ({name, age, user, create}) {
  return (
    <div className='layout'>
      <form onSubmit={create}>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {name(event.target.value);}}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {age(event.target.value);}}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {user(event.target.value);}}
        />
        <NoteBtn buttonStyle="btn--outline"> Create User </NoteBtn>
      </form>
    </div>
  )
}
