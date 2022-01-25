import React from 'react';
import { ReactComponent as AlertIcon } from '../../../assets/images/icons/alert.svg';
import NavBarItem from '../../atoms/navbar/navbar-item';
import UserInfo from '../../molecules/navbar/user-info-navbar';
import SearchBar from '../../molecules/search-bar';
import { NavStyled } from './styles';

const NavBar: React.FC = () => {
  return (
    <NavStyled>
      <ul className="navbar-nav">
        <SearchBar />
        <NavBarItem icon={<AlertIcon />} />
        <UserInfo />
      </ul>
    </NavStyled>
  );
};

export default NavBar;
