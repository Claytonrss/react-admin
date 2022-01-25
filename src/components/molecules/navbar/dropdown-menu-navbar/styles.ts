import styled from 'styled-components';

export const DropDownMenuStyled = styled.div`
  position: fixed;
  min-width: 200px;
  top: 100px;
  right: 60px;
  padding: 1rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.blue001};
  border-radius: 4px;

  .menu {
    width: 100%;
    transition: all 0.3s linear;
    animation: slide 0.3s;
    display: grid;
    justify-content: flex-end;
    gap: 12px;
  }

  @keyframes slide {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
