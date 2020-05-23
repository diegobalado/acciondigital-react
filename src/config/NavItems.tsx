import React from 'react';
import { Home, Group, MailOption, CircleQuestion } from 'grommet-icons';
import { PRIMARY } from '../constants/colors';

const IconStyles = {
  color: PRIMARY,
}

const config = [
  {
    "path": "/inicio",
    "title": "Inicio",
    "icon": <Home {...IconStyles} />
  },
  {
    "path": "/amigos",
    "title": "Amigos",
    "icon": <Group {...IconStyles} />
  },
  {
    "path": "/contacto",
    "title": "Contacto",
    "icon": <MailOption {...IconStyles} />
  },
  {
    "path": "/faq",
    "title": "Ayuda",
    "icon": <CircleQuestion {...IconStyles} />
  }
]

export default config;