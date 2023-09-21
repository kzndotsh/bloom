import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import * as yup from 'yup';
import formSchema from './validations/formSchema';
import axios from 'axios';

import Header from './components/Header';
import Form from './components/Form';
import Home from './components/Home';
import Order from './components/Order';
// import OrderList from './components/OrderList';

// set the initial form values to null
const initialFormValues = {
  name: '',
  size: null,
  sausage: false,
  ham: false,
  anchovies: false,
  spinach: false,
  special: '',
};
// set the initial form errors to null
const initialFormErrors = {
  name: '',
  special: '',
};
// set the initial orders to null
const initialOrders = [];

export default function App() {
  // set state for form values and form errors
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  // GET orders

  // side effects

  // POST new order
  const postNewOrder = (newOrder) => {
    axios
      .post('https://reqres.in/api/orders', newOrder)
      .then((res) => {
        setOrders([res.data, ...orders]);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  // validate the form
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

  // detect form input changes
  const inputChange = (name, value) => {
    validate(name, value);

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // submit the form
  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: ['suasage', 'ham', 'anchovies', 'spinach'].filter(
        (topping) => !!formValues[topping]
      ),
      special: formValues.special.trim(),
    };
    validate('name', newOrder.name).then(() => {
      postNewOrder(newOrder);
    });
  };

  useEffect(() => {
    const getOrders = () => {
      axios
        .get('https://reqres.in/api/orders')
        .then((res) => {
          // console.log(res);
          setOrders(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }, []);

  return (
    <div className='app'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='pizza'
          element={
            <Form
              values={formValues}
              change={inputChange}
              submit={formSubmit}
              errors={formErrors}
              orders={setOrders}
            />
          }
        />
        {/* <Route path='orders' element={<OrderList />} /> */}
      </Routes>
    </div>
  );
}
