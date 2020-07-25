import React from 'react';
import { useLocation } from 'react-router-dom';
import { Anchor, ThemeContext } from 'grommet';
import { ACCENT, PRIMARY_LIGHT } from '../../../constants/colors';
import { Icons } from './index';

export const IconLink = (item: { path: string; title: string; icon: string; }) => {
  const location = useLocation();
  const color = location.pathname === item.path ? ACCENT : PRIMARY_LIGHT;
  const value = {
    anchor: {
      color: {
        dark: color, light: color
      },
      hover: {
        extend: {
          color: {
            dark: 'red', light: 'red'
          },
        }
      }
    }
  };

  return <ThemeContext.Extend
    value={value}
  >
    <Anchor
      as="span"
      label={item.title}
      key={item.title}
      icon={Icons(item.icon)} />
  </ThemeContext.Extend>;
};
