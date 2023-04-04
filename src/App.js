import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import Character from './components/Character';
import Characters from './components/Characters';
import styled from 'styled-components';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/')
      .then((res) => {
        // console.log(res);
        setCharacters(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const getFilteredSearch = () => {
    const termNormalized = searchTerm.trim().toLowerCase();
    if (!termNormalized) return characters;
    return characters.filter((character) => {
      return character.name.toLowerCase().includes(termNormalized);
    });
  };

  const StyledList = styled.div`
    background-color: #333;
  `;

  return (
    <div className='App'>
      <Header />
      <Search setSearchTerm={setSearchTerm} />
      <Characters characters={getFilteredSearch()} />
    </div>
  );
};

export default App;
