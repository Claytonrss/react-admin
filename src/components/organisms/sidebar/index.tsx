import React, { useState } from 'react';
import Logo from '../../atoms/logo';
import MenuSidebar from '../../molecules/sidebar/menu-sidebar';
import { ReactComponent as ArrowLeftIcon } from '../../../assets/images/icons/arrow-left.svg';
import dataSidebar from './data';
import { ContainerSidebar } from './styles';

const Sidebar: React.FC = () => {
  const [openedSidebar, setOpenedSidebar] = useState(true);

  return (
    <ContainerSidebar
      className={openedSidebar ? 'sidebar-opened' : 'sidebar-closed'}
    >
      <Logo />
      <button
        type="button"
        className="btn-handle-sidebar"
        onClick={() => setOpenedSidebar(!openedSidebar)}
      >
        <ArrowLeftIcon />
      </button>
      <nav>
        {dataSidebar.map(dataItem => (
          <MenuSidebar
            key={dataItem.title}
            title={dataItem.title}
            items={dataItem.items}
          />
        ))}
      </nav>
    </ContainerSidebar>
  );
};

export default Sidebar;
