import styled from 'styled-components';

export const NavBarItemStyled = styled.li`
  .icon-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.light004};

    &:hover {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 12px;
    }

    svg {
      width: 40px;
      height: 40px;
      padding: 10px;
    }
  }

  .sub-menu {
    display: none;
    transition: all 0.3s;
    animation: fadeIn 0.3s;
  }
  .sub-menu.active-sub-menu {
    display: block;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
