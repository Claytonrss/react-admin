import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  padding: 26px 60px;
  display: flex;
  justify-content: space-between;
  ${({ theme: { colors } }) => ({
    backgroundColor: colors.light001,
    borderBottom: `1px solid ${colors.light003}`,
  })};
`;
