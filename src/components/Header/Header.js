import React from 'react';
import { Link } from 'react-router-dom';
import { Header as GHeader, Box, Anchor, Nav } from 'grommet';
import { Home } from 'grommet-icons';
// import Nav from './Nav';
import navItems from '../../config/navItems.json'

const Header = () => (
  <GHeader background="dark-1" pad="medium">
      <Box direction="row" align="center" gap="small">
        <Anchor color="white" href="/">
          ShimiSun
        </Anchor>
      </Box>
      <Nav direction="row">
        {navItems.map(item => (
          <Anchor
            href={item.path}
            label={item.title}
            key={item.title}
            icon={<Home color='#F00' />}
          />
        ))}
      </Nav>
    </GHeader>
  // <header className="header" id="header">
  //   <Link className="logo" to="/">
  //     <img src="/assets/images/logo.png" alt="Accion Digital" />
  //   </Link>
  //   <Nav items={navItems} />
  // </header>
);

export default Header;