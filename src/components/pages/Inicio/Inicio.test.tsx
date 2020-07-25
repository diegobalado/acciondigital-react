import React from 'react';
import { render } from '@testing-library/react';
import Inicio from '.';

test('renders Inicio page', () => {
  const { getByText } = render(<Inicio />);
  const page = getByText(/Inicio page/i);
  expect(page).toBeInTheDocument();
})