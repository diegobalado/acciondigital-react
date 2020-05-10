import React from 'react';
import { render } from '@testing-library/react';
import Contacto from './Contacto';

test('renders Contacto page', () => {
  const { getByText } = render(<Contacto />);
  const page = getByText(/Contacto page/i);
  expect(page).toBeInTheDocument();
})