import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Button from './componets/Button';
import Header from './componets/Header';
import Photo from './componets/Photo';
import { BASE_URL, API_KEY } from './constants';

export default function App() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/?api_key=${API_KEY}`)
      .then((res) => {
        setPhoto(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='App'>
      <Header photo={photo} />
      {photo && <Photo photo={photo} />}
      <Button />
    </div>
  );
}
