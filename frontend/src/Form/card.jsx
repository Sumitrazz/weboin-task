import React from 'react';

function Card({ user, deleteUser }) {
  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>Role: {user.role}</p>
      <p>Email: {user.email}</p>
      <p>Phone Number: {user.phone}</p>
      <p>Course: {user.course}</p>
      <p>Status: {user.status}</p>
      <button onClick={() => deleteUser(user.id)}>Delete</button>
    </div>
  );
}

export default Card;
