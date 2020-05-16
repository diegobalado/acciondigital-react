import React from 'react';
import NavItem from './NavItem';

interface Props {
  items: Array<Item>;
}

interface Item {
  path: string;
  title: string;
  icon: JSX.Element;
}

const Nav = ({ items }: Props) => (
  <nav>
    {items.map(({ path, title, icon }: Item, index) => {
      console.log('icon', icon);
      return (
      <NavItem
        key={index}
        path={path}
        title={title}
        icon={icon}
      />
    )})}
  </nav>
);

export default Nav;