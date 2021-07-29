import React from 'react';
import { render } from '@testing-library/react';
import Footer from './common/Footer/';

test(`placeholder test`, () => {
  render(<Footer />);

  expect(true).toBe(true);
});
