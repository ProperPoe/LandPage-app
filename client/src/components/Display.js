import React from 'react'

export default function Display({ names }) {
  return (
    <div className="usersDisplay">
        {names.map((user, id) => {
          return (
            <div key={id} className="info">
              <h3 className="name">Name: {user.name}</h3>
              <h3 className="age">Age: {user.age}</h3> 
              <h3 className="user">Username: {user.username}</h3>
            </div>
          );
        })}
    </div>
    
  )
}
