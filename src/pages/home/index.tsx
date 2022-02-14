import React from 'react';
import ChartReach from '../../components/organisms/chart-reach';
import HeaderPage from '../../components/organisms/header-page';
import Sidebar from '../../components/organisms/sidebar';
import { ContainerHome, PageContent } from './styles';

const Home: React.FC = () => {
  return (
    <ContainerHome>
      <Sidebar />
      <HeaderPage />
      <PageContent>
        <ChartReach />
      </PageContent>
    </ContainerHome>
  );
};

export default Home;
