import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import Nav from './Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import faker from 'faker';

let navItems = [];
for(let index = 0; index < 5; index++) {
  navItems.push({
    path: faker.internet.url(),
    title: faker.random.words(),
    icon: faker.random.word(),
  })
}

test('renders 5 nav items', () => {
  const { getAllByTestId} = render(<Router>
    <Nav items={ navItems } />
  </Router>);
  const page = getAllByTestId('nav-item');
  expect(page.length).toBe(navItems.length);
})