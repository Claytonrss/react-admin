import styled from 'styled-components';

export const DropDownItemStyled = styled.button`
  ${({ theme: { colors, fonts } }) => ({
    color: colors.light002,
    fontFamily: fonts.family.body,
    fontSize: '16px',
  })};
  text-align: right;
`;
