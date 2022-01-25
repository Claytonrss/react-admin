import React, { useState } from 'react';
import { NavBarItemStyled } from './styles';
import { NavBarItemProps } from './types';

const NavBarItem: React.FC<NavBarItemProps> = ({
  icon,
  children,
  onClick,
  hasSubMenu,
}) => {
  const [activeSubmenu, setActiveSubmenu] = useState(false);

  return (
    <NavBarItemStyled>
      <button
        type="button"
        className="icon-button"
        onClick={() =>
          !hasSubMenu && onClick ? onClick() : setActiveSubmenu(!activeSubmenu)
        }
      >
        {icon}
      </button>
      <div className={`sub-menu ${activeSubmenu ? 'active-sub-menu' : ''}`}>
        {children}
      </div>
    </NavBarItemStyled>
  );
};

export default NavBarItem;
