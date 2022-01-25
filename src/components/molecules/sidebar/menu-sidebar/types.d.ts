export interface MenuSidebarItemProps {
  title?: string;
  link?: string;
  icon?: string;
  subMenu?: MenuSidebarItemProps[];
}

export interface MenuSidebarProps {
  title: string;
  items: MenuSidebarItemProps[];
}
