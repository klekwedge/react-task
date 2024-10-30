import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders logo correctly', () => {
    const { getByText } = render(<Header />);
    const logoElement = getByText('React task');
    expect(logoElement).toBeInTheDocument();
  });
});
