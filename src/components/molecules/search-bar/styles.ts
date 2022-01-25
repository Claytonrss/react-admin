import styled from 'styled-components';

export const SearchBarStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  overflow: hidden;

  input {
    padding: 8px;
    transform: translateY(150%);
    transition: transform 0.3s;
    border: 1px solid ${({ theme }) => theme.colors.blue002};
    color: ${({ theme }) => theme.colors.text};
    border-radius: 4px;
    &.active-search {
      transform: translateY(0);
    }
  }
`;
