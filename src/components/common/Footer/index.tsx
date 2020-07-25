import React from 'react';
import { Link } from 'react-router-dom';
import { StyledFooter, FooterContent } from './Footer.styles';

const thisYear = new Date().getFullYear();

const Footer = () => <StyledFooter>
  <FooterContent>
    <p>{`Acción Digital © ${thisYear}`}</p>
    <p>Imágenes: <Link to="/contacto">Javier Piva Flos</Link>.</p>
    <p>Desarrollo web: <Link to="mailto:jdiegomdq@gmail.com">Diego Balado</Link>.</p>
  </FooterContent>
</StyledFooter>;

export default Footer;