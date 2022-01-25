import styled from 'styled-components';
import { ReactComponent as LogoSVG } from '../../../assets/images/logo.svg';

export const LogoStyled = styled(LogoSVG)`
  margin-left: 14px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
