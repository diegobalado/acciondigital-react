import styled from 'styled-components';
import { GRAY_LIGHT, GRAY_DARK } from '../../../constants/colors';

export const StyledFooter = styled.footer`
  background: ${GRAY_LIGHT};
  clear: both;
  padding: 4em 0 2em 0;
`;

export const FooterContent = styled.div`
  color: ${GRAY_DARK};
  font-size: 0.9em;
  margin: 0 0 2em 0;
  padding: 0 1em;
  text-align: center;
`;
