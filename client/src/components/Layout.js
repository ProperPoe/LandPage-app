import React from 'react'

export default function Layout ({name, age, user, create}) {
  return (
    <div>
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
      <button onClick={create}> Create User </button>
    </div>
  )
}
