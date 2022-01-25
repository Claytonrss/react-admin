import { MenuSidebarProps } from '../../molecules/sidebar/menu-sidebar/types';

const dataSidebar: MenuSidebarProps[] = [
  {
    title: 'Main menu',
    items: [
      {
        title: 'Dashboard',
        icon: 'dashboard',
        subMenu: [
          {
            title: 'Bar',
            link: '#chartBar',
          },
          {
            title: 'Line',
            link: '#chartLine',
          },
          {
            title: 'Donut',
            link: '#chartDonut',
          },
        ],
      },
      {
        title: 'Inbox',
        icon: 'inbox',
        link: '#inbox',
      },
    ],
  },
  {
    title: 'Workspace',
    items: [
      {
        title: 'Accounts',
        icon: 'accounts',
        link: '#accounts',
      },
      {
        title: 'Schedule Post',
        icon: 'schedule',
        link: '#schedule',
      },
      {
        title: 'Communities',
        icon: 'communities',
        link: '#communities',
      },
      {
        title: 'Analytics',
        icon: 'analytics',
        link: '#analytics',
        subMenu: [
          {
            title: 'Google',
            link: '#analyticGoogle',
          },
          {
            title: 'Bing',
            link: '#analyticBing',
          },
        ],
      },
    ],
  },
  {
    title: 'General',
    items: [
      {
        title: 'File & Folders',
        icon: 'files',
        link: '#files',
      },
      {
        title: 'Settings',
        icon: 'settings',
        link: '#settings',
      },
    ],
  },
];

export default dataSidebar;
