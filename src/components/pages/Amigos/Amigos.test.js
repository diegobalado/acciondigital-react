import React from 'react';
import { render } from '@testing-library/react';
import Amigos from './Amigos';

test('renders Amigos page', () => {
  const { getByText } = render(<Amigos />);
  const page = getByText(/Amigos page/i);
  expect(page).toBeInTheDocument();
});