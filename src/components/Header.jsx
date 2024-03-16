import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  background-color: #242424;
`;

const Logo = styled.img`
  margin-top: 20px;
  height: 90px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="./src/assets/logo.png" alt="Logo do Museu" />
    </HeaderContainer>
  );
};

export default Header;
