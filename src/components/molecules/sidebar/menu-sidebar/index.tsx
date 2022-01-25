import React, { useEffect, useState } from 'react';
import { MenuSidebarStyled, SubMenuSidebarStyled } from './styles';
import { MenuSidebarProps } from './types';

const MenuSidebar: React.FC<MenuSidebarProps> = ({ title, items }) => {
  return (
    <MenuSidebarStyled>
      <span className="menu-sidebar-title">{title}</span>
      <ul>
        {items.map(({ link, title: content, icon, subMenu }) => {
          const [pathIcon, setPathIcon] = useState('');
          const [openSubMenu, setOpenSubMenu] = useState(false);

          useEffect(() => {
            (async () => {
              const importedIcon = await import(
                `../../../../assets/images/icons/${icon}.svg`
              );
              setPathIcon(importedIcon.default);
            })();
          }, []);

          return (
            <li key={content} className="menu-sidebar-item">
              <a
                href={subMenu ? link : undefined}
                className={`${subMenu ? 'has-submenu' : ''} ${
                  openSubMenu ? 'submenu-sidebar-active' : undefined
                }`}
                onClick={() => setOpenSubMenu(!openSubMenu)}
              >
                <img alt={`Icon ${content}`} src={pathIcon} /> {content}
              </a>
              {subMenu && openSubMenu && (
                <SubMenuSidebarStyled>
                  {subMenu.map(subItem => (
                    <li key={subItem.title} className="submenu-sidebar-item">
                      <a href={subItem.link}>{subItem.title}</a>
                    </li>
                  ))}
                </SubMenuSidebarStyled>
              )}
            </li>
          );
        })}
        <li>{/* <InboxIcon /> Inbox */}</li>
      </ul>
    </MenuSidebarStyled>
  );
};

export default MenuSidebar;
