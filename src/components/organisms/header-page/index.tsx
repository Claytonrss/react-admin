import React from 'react';
import NavBar from '../navbar';
import { HeaderStyled } from './styles';

const HeaderPage: React.FC = () => {
  return (
    <HeaderStyled>
      <h1>DashBoard</h1>
      <NavBar />
    </HeaderStyled>
  );
};

export default HeaderPage;
