import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.white};
  }
  p {
    color: ${(props) => props.theme.white};
  }
  span {
    color: ${(props) => props.theme.white};
  }
`;

export default function Header(props) {
  return (
    <StyledHeader className='header'>
      <h1>Astronomy Picture of the Day</h1>
      <p className='powered-by'>Powered by NASA</p>
      <span className='photo-date'>Today's date is: {props.photo.date} </span>
    </StyledHeader>
  );
}
