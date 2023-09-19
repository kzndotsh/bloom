// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';
import gradient from 'random-gradient';
import { v4 as uuid } from 'uuid';

const StyledCharacter = styled.div`
  background-color: #333;
  border: solid #333 3px;
  padding: 20px;
  margin: 20px;
  width: 25%;
  &:hover {
    border: solid yellow 3px;
  }
`;

const Character = (props) => {
  const { character } = props;
  const bgGradient = { background: gradient(uuid()) };

  return (
    <StyledCharacter className='character-list-item' style={bgGradient}>
      <h3>{character.name}</h3>
      <div className='character-details'>
        <p>Gender: {character.gender}</p>
        <p>Birth Year: {character.birth_year}</p>
        <p>Height: {character.height}</p>
        <p>Mass: {character.mass}</p>
        <p>Hair Color: {character.hair_color}</p>
        <p>Eye Color: {character.eye_color}</p>
        <p>Skin Color: {character.skin_color}</p>
      </div>
    </StyledCharacter>
  );
};

export default Character;
