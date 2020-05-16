import React from 'react';
import { Link } from 'react-router-dom';

interface Item {
  path: string;
  title: string;
  icon: JSX.Element;
}

const NavItem = ({ path, title, icon }: Item) => { 
  console.log('icon', icon);
  return (
  <Link to={path} data-testid="nav-item">
    {icon}
    <div>{title}</div>
  </Link>
)};

export default NavItem;