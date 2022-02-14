import styled from 'styled-components';

export const ChartReachContainer = styled.div`
  background-color: #fff;
  padding: 16px 24px;
  .recharts-responsive-container {
    .recharts-wrapper {
      margin: 0;
      padding: 0;
      text {
        font-family: ${({ theme }) => theme.fonts.family.body};
      }
      .recharts-tooltip-wrapper {
        .recharts-default-tooltip {
          background: ${({ theme }) => theme.colors.blue001} !important;
          padding: 16px;
          border-radius: 8px;
          p {
            color: ${({ theme }) => theme.colors.light001};
            margin-bottom: 8px !important;
          }

          /* ul.recharts-tooltip-item-list {
            li.recharts-tooltip-item {
              background: #fff !important;
              position: relative !important;
              border: 1px solid red;
              &:before {
                width: 4px;
                height: 4px;
                left: 0;
                top: 0;
                position: absolute;
                border: 4px solid red;
              }
            }
          } */
        }
      }
    }
  }
`;
export const ChartReachHeader = styled.header`
  margin-bottom: 24px;
`;
export const ChartReachCards = styled.div`
  display: flex;
  gap: 62px;
`;
export const ChartReachCardItem = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr;
  grid-template-areas: 'image title' 'image value';
  gap: 0 16px;

  p {
    font-size: 16px;
    line-height: 19px;
    color: #a9abb0;
  }

  span {
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    color: #1c1f37;
  }

  svg {
    grid-area: image;
  }
`;
