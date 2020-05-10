import React from 'react';
import { render } from '@testing-library/react';
import NavItem from './NavItem';
import faker from 'faker';
import { BrowserRouter as Router } from 'react-router-dom';

test('render a nav item title', () => {
  const item = {
    path: faker.internet.url(),
    title: faker.random.words(),
    icon: faker.random.word(),
  }

  const { getByText } = render(
    <Router>
      <NavItem
        path={item.path}
        title={item.title}
        icon={item.icon}
      />
    </Router>
  )

  const page = getByText(item.title);
  expect(page).toHaveTextContent(item.title);
}) 