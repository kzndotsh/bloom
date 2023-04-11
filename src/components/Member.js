import React from 'react';

export default function Member(props) {
  const { name, email, role } = props.member;
  return (
    <div className='member'>
      <h2> {name} </h2>
      <p> {email} </p>
      <p> {role} </p>
      <button onClick={() => props.onEdit(props.member)}> Edit </button>
      <button onClick={() => props.onDelete(props.member.id)}> Delete </button>
    </div>
  );
}
