import styled from 'styled-components';

export const MenuSidebarStyled = styled.nav`
  overflow: hidden;

  &:nth-child(n + 2) {
    margin-top: 32px;
  }
  .menu-sidebar-title {
    display: block;
    font-weight: 300;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.blue003};
    margin-bottom: 8px;
    margin-left: 4px;
    font-size: 14px;
  }
  .menu-sidebar-item {
    a {
      font-size: 18px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
      padding: 16px;
      transition: all 0.3s;
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: ${({ theme }) => theme.colors.blue002};
        filter: brightness(112%);
      }

      &.has-submenu {
        &::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 24px;
          background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.293 9.293L12 13.586L7.70697 9.293L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.293Z' fill='%239A9A9A'/%3E%3C/svg%3E%0A");
          top: 14px;
          right: 8px;
          background-repeat: no-repeat;
          background-size: cover;
          transition: transform 0.3s;
        }
      }

      &.submenu-sidebar-active {
        &::after {
          transform: rotate(180deg);
        }
      }
    }
  }
`;

export const SubMenuSidebarStyled = styled.ul`
  margin-bottom: 12px;
  overflow: hidden;
  transition: all 0.3s;
  animation: fadeIn 0.3s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .submenu-sidebar-item {
    a {
      font-size: 14px;
      padding: 12px;
      transition: all 0.3s;
      cursor: pointer;
      margin-left: 40px;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.blue002};
      filter: brightness(112%);
    }
  }
`;
