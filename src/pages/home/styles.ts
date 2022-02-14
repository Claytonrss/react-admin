import styled from 'styled-components';

export const ContainerHome = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'sidebar navbar'
    'sidebar content';
  align-items: flex-start;
`;

export const PageContent = styled.main`
  grid-area: content;
  width: 100%;
  height: 100%;
  padding: 16px 32px;
`;
