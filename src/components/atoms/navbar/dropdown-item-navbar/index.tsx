import React from 'react';
import { DropDownItemStyled } from './styles';
import { DropDownItemProps } from './types';

const DropDownItem: React.FC<DropDownItemProps> = ({
  children,
  leftIcon,
  rightIcon,
  goToMenu,
}) => {
  return (
    <DropDownItemStyled
      type="button"
      className="menu-item"
      onClick={() => goToMenu && goToMenu()}
    >
      {children}
      {/* <span className="icon-button">{leftIcon}</span> */}
      {/* <span className="icon-right">{rightIcon}</span> */}
    </DropDownItemStyled>
  );
};

export default DropDownItem;
