import React from 'react';
import NavItem from './NavItem';

const Nav = ({ items }) => (
  <nav>
    {items.map(({ path, title, icon }, index) => (
      <NavItem
        key={index}
        path={path}
        title={title}
        icon={icon}
      />
    ))}
  </nav>
);

export default Nav;