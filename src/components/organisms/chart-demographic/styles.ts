import styled from 'styled-components';

export const ChartDemographicContainer = styled.div`
  margin-top: 24px;
  background-color: #fff;
  padding: 16px 24px;
  .recharts-responsive-container {
    .recharts-wrapper {
      margin: 0;
      padding: 0;
      text {
        font-family: ${({ theme }) => theme.fonts.family.body};
      }
    }
  }
`;
export const ChartDemographicHeader = styled.header`
  margin-bottom: 32px;
`;
export const ChartDemographicTitle = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #1c1f37;
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const ChartDemographicInfos = styled.div`
  display: grid;
  grid-template-columns: 360px 1fr;
`;
