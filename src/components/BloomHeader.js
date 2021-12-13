import React from 'react';
import styled from 'styled-components';

const BloomHeader = () => {
    return(
    <HeaderStyle>
      <div>Sprint Challenge 3.3</div>
    </HeaderStyle>);
}

export default BloomHeader;

const HeaderStyle = styled.nav`
  padding: 0.5em;
  background-color: #333333;
  color:white;
  font-size: 1.25rem;
  font-family: "Lato";
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    padding: 0.5em;
    width:25px;
  }
`
