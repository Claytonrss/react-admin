import React, { useState } from 'react';
import Avatar from '../../../atoms/avatar';
import NavBarItem from '../../../atoms/navbar/navbar-item';
import DropDownMenu from '../dropdown-menu-navbar';
import { UserInfoStyled } from './styles';

const UserInfo: React.FC = () => {
  const [dropDownIsActive, setDropDownIsActive] = useState(true);
  return (
    <UserInfoStyled>
      <span>Erza Miller</span>
      <NavBarItem
        icon={<Avatar photo="/assets/images/avatar.png" />}
        onClick={() => setDropDownIsActive(!dropDownIsActive)}
        hasSubMenu
      >
        <DropDownMenu className={dropDownIsActive ? 'dropDownIsActive' : ''} />
      </NavBarItem>
    </UserInfoStyled>
  );
};

export default UserInfo;
