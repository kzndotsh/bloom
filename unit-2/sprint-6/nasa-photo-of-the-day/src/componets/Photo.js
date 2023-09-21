import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
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

const Photo = (props) => {
  return (
    <StyledWrapper className='photo-wrapper'>
      <h2 className='title'>{props.photo.title}</h2>
      <img className='photo' src={props.photo.hdurl} alt='' />
      <p className='explanation'>{props.photo.explanation}</p>
    </StyledWrapper>
  );
};

export default Photo;
