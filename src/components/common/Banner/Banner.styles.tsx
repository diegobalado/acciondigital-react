import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { WHITE, GRAY_DARK } from '../../../constants/colors';
import banner from '../../../assets/banner.jpg';

export const BaseBanner = styled.div`
  align-items: center;
  background: ${GRAY_DARK};
  background-attachment: fixed;
  background-image: url(${banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${WHITE};
  display: flex;
  height: 75vh;
  justify-content: center;
  min-height: 75vh;
  padding: 8em 0 6em 0;
  position: relative;
  text-align: center;

  &:before {
    transition: opacity 3s ease;
    transition-delay: 0.25s;
    content: '';
    display: block;
    background-color: #333;
    height: 100%;
    left: 0;
    opacity: 0.65;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }
`;

export const Inner = styled.div`
  padding: 3.5em 0 1.5em 0;
  padding-left: 3.5em;
  padding-right: 3.5em;
  transform: none;
  transition: opacity 1s ease, transform 1s ease;
  position: relative;
  opacity: 1;
  z-index: 3;
  padding: 0 2em;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const NoteContainer = styled.div`
  width: 75%;
  text-align: justify; 
  position: relative;
`;

export const Background = styled.div`
  background: #333;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: .85;
`;

export const NoteContent = styled.div`
  padding: 2%;
`;

export const FBLink = styled(Link)`
  text-decoration: underline;
  font-weight: bold;
  color: #fff;
`;

