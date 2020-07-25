import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Anchor, Nav } from 'grommet';
import { Home, Group, MailOption, CircleQuestion } from 'grommet-icons';
import { IconLink } from './IconLink';
import config from '../../../config/NavItems';
import { BaseHeader } from './Header.styles';
import logo from '../../../assets/logo.png';

type Item = {
  path: string;
  title: string;
  icon: string;
}

export const Icons = (icon: string) => {
  const icons: {[index: string]: JSX.Element} = {
    'Home': <Home />,
    'Group': <Group />,
    'MailOption': <MailOption />,
    'CircleQuestion': <CircleQuestion />
  };
  return icons[icon];
};

const Header = () => (
  <BaseHeader background="dark-1" pad="medium" align="baseline">
    <Box direction="row" align="center" gap="small">
      <Link to="/">
        <Anchor as="span">
          <img src={logo} alt="Accion Digital" />
        </Anchor>
      </Link>  
    </Box>
    <Nav direction="row">
      {config.map((item, index) => (
        <Link to={item.path} key={index}>
          {IconLink(item)}
        </Link>
      ))}
    </Nav>
  </BaseHeader>
);

export default Header;
