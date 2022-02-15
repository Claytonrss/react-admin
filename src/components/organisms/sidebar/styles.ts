import styled from 'styled-components';

export const ContainerSidebar = styled.div`
  min-height: 100vh;
  height: 100%;
  grid-area: sidebar;
  background-color: ${({ theme }) => theme.colors.blue001};
  color: ${({ theme }) => theme.colors.light001};
  padding-bottom: 39px;
  position: relative;
  min-width: fit-content;
  padding: 24px 16px;
  transition: all 0.3s;
  position: relative;

  &.sidebar-closed {
    background-color: ${({ theme }) => theme.colors.text};
    min-width: auto;
    max-width: 20px;

    div {
      overflow-x: hidden;
    }

    .btn-handle-sidebar {
      transform: rotate(180deg);
    }
  }

  .logo {
    margin-bottom: 60px;
  }

  .btn-handle-sidebar {
    position: absolute;
    background-color: ${({ theme }) => theme.colors.light001};
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.light003};
    padding: 8px;
    border-radius: 50%;
    top: 24px;
    right: -20px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transition: all 0.3s;
    &:hover {
      box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
        rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }
  }
`;
