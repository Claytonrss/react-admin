import React, { useState } from 'react';
import DropDownItem from '../../../atoms/navbar/dropdown-item-navbar';
import { DropDownMenuStyled } from './styles';
import { DropDownMenuProps } from './types';

const DropDownMenu: React.FC<DropDownMenuProps> = ({ className }) => {
  const [activeMenu, setActiveMenu] = useState('main');

  return (
    <DropDownMenuStyled className={className}>
      {activeMenu === 'main' && (
        <div className="menu">
          <DropDownItem> My Profile</DropDownItem>
          <DropDownItem
            rightIcon="===>"
            goToMenu={() => setActiveMenu('settings')}
          >
            Settings
          </DropDownItem>
          <DropDownItem
            rightIcon="===>"
            goToMenu={() => setActiveMenu('animals')}
          >
            Animals
          </DropDownItem>
        </div>
      )}

      {activeMenu === 'settings' && (
        <div className="menu">
          <DropDownItem goToMenu={() => setActiveMenu('main')} leftIcon="<====">
            <h2>SETTINGS</h2>
          </DropDownItem>
          <DropDownItem>Settings 0001</DropDownItem>
          <DropDownItem>Settings 0002</DropDownItem>
          <DropDownItem>Settings 0003</DropDownItem>
          <DropDownItem>Settings 0004</DropDownItem>
          <DropDownItem>Settings 0005</DropDownItem>
          <DropDownItem>Settings 0006</DropDownItem>
        </div>
      )}

      {activeMenu === 'animals' && (
        <div className="menu">
          <DropDownItem goToMenu={() => setActiveMenu('main')} leftIcon="<====">
            <h2>ANIMALS</h2>
          </DropDownItem>
          <DropDownItem>Animal 0001</DropDownItem>
          <DropDownItem>Animal 0002</DropDownItem>
          <DropDownItem>Animal 0003</DropDownItem>
          <DropDownItem>Animal 0004</DropDownItem>
          <DropDownItem>Animal 0005</DropDownItem>
          <DropDownItem>Animal 0006</DropDownItem>
        </div>
      )}
    </DropDownMenuStyled>
  );
};

export default DropDownMenu;
