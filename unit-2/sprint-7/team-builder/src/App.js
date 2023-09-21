import React, { useState, useEffect } from 'react';
import Member from './components/Member';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Form from './components/Form';

export default function App() {
  const [members, setMembers] = useState([]); // array of members
  const initialFormValues = { name: '', email: '', role: '' }; // initial form values
  const [form, setForm] = useState(initialFormValues); // form values
  const [editing, setEditing] = useState(false); // is editing?
  const [memberToEdit, setMemberToEdit] = useState(null); // member to edit

  // event handlers
  const onInputChange = (evt) => {
    const { name, value } = evt.target; // get name and value from input
    setForm({ ...form, [name]: value }); // update form values
  };

  // add new member or edit existing member
  const onFormSubmit = (evt) => {
    evt.preventDefault(); // prevent page refresh
    if (editing) {
      // edit existing member
      setMembers(
        members.map((member) => {
          if (member.id === memberToEdit.id) {
            return { ...member, ...form }; // return updated member
          }
          return member; // return original member
        })
      );
      setEditing(false); // reset editing state
    } else {
      // add new member
      const newMember = {
        id: uuidv4(),
        name: form.name.trim(),
        email: form.email.trim(),
        role: form.role.trim(),
      };
      setMembers([...members, newMember]); // add new member to members array
    }
    setForm(initialFormValues); // reset form values
  };

  // edit member
  const onEdit = (member) => {
    setEditing(true);
    setMemberToEdit(member);
    setForm(member);
  };

  // delete member
  const onDelete = (id) => {
    setMembers(members.filter((member) => member.id !== id)); // filter out member with matching id
  };

  // load members from local storage
  useEffect(() => {
    const members = JSON.parse(localStorage.getItem('members'));
    if (members) {
      setMembers(members);
    }
  }, []);

  // save members to local storage
  useEffect(() => {
    localStorage.setItem('members', JSON.stringify(members));
  }, [members]); // only run when members array changes

  return (
    <div className='app'>
      <h1>Team Members</h1>
      <div className='members'>
        {/* map over members array and render Member component for each member */}
        {members.map((member) => (
          <Member
            key={member.id}
            member={member}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>

      {/* render Form component */}
      <Form
        onInputChange={onInputChange}
        onFormSubmit={onFormSubmit}
        form={form}
        editing={editing}
      />

      {/* render cancel button if editing */}
      {editing && <button onClick={() => setEditing(false)}>Cancel</button>}
    </div>
  );
}
