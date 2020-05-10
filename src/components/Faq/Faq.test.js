import React from 'react';
import { render } from '@testing-library/react';
import Faq from './Faq';

test('renders Faq page', () => {
  const { getByText } = render(<Faq />);
  const page = getByText(/Faq page/i);
  expect(page).toBeInTheDocument();
})