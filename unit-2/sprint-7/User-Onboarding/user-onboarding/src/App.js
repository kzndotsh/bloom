import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './validation/formSchema';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
};

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: false,
};

const initialUsers = [];
const initialButton = true;

export default function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [buttonDisabled, setButtonDisabled] = useState(initialButton);

  const getUsers = () => {
    axios
      .get('https://reqres.in/api/users')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postNewUser = (newUser) => {
    axios
      .post('https://reqres.in/api/users', newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  const inputChange = (name, value) => {
    validate(name, value);

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    };
    postNewUser(newUser);
    setFormValues(initialFormValues);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className='App'>
      <Form
        values={formValues}
        errors={formErrors}
        change={inputChange}
        submit={formSubmit}
        disabled={buttonDisabled}
      />
      {users.map((user) => {
        return <pre>{JSON.stringify(user)}</pre>;
      })}
    </div>
  );
}
