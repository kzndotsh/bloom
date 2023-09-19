import React, { useState, useEffect } from 'react';
import Character from './Character';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

const Characters = (props) => {
  const { characters } = props;

  const StyledCharacterList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;

  return (
    <StyledCharacterList className='character-list-wrapper'>
      {characters &&
        characters.map((character) => {
          return <Character character={character} key={uuid()} />;
        })}
    </StyledCharacterList>
  );
};

export default Characters;
