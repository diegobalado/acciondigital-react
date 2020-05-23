import React from 'react';
import { Link } from 'react-router-dom';
import { Header as GHeader, Box, Anchor, Nav } from 'grommet';
import config from '../../../config/NavItems';
import logo from '../../../assets/logo.png';
import { PRIMARY } from '../../../constants/colors';

type Item = {
    path: String;
    title: String;
    icon: String;
}
const Header = () => (
    <GHeader background="dark-1" pad="medium" align="baseline">
      <Box direction="row" align="center" gap="small">
        <Anchor href="/">
          <img src={logo} alt="Accion Digital" />
        </Anchor>
      </Box>
      <Nav direction="row">
        {config.map((item, index) => (
          <Link to={item.path} key={index}>
            <Anchor
              as="span"
              color={PRIMARY} 
              label={item.title}
              key={item.title}
              icon={item.icon}
            />
          </Link>
        ))}
      </Nav>
    </GHeader>
  // <header className="header" id="header">
  //   <Link className="logo" to="/">
  //     <img src="/assets/images/logo.png" alt="Accion Digital" />
  //   </Link>
  //   <Nav items={config} />
  // </header>
);

export default Header;