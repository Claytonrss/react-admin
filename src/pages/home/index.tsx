import React from 'react';
import HeaderPage from '../../components/organisms/header-page';
import Sidebar from '../../components/organisms/sidebar';
import { ContainerHome } from './styles';

const Home: React.FC = () => {
  return (
    <ContainerHome>
      <Sidebar />
      <HeaderPage />
    </ContainerHome>
  );
};

export default Home;
