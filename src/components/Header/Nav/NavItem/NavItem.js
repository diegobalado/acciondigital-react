import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ path, title, icon }) => (
  <Link to={path} data-testid="nav-item">
    <div className={`icon fa-${icon}`} />
    <div>{title}</div>
  </Link>
);

export default NavItem;