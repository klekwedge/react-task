import React from 'react';
import { render } from '@testing-library/react';
import UserInfo from './UserInfo';

describe('UserInfo Component', () => {
  it('renders correct links when isLink is true', () => {
    const { getByRole } = render(<UserInfo blog="https://example.com" />);
    const blogLink = getByRole('link', { name: 'https://example.com' });

    expect(blogLink).toBeInTheDocument();
    expect(blogLink).toHaveAttribute('href', 'https://example.com');
    expect(blogLink).toHaveAttribute('target', '_blank');
    expect(blogLink).toHaveAttribute('rel', 'noreferrer');
  });

  it('renders correct text when isLink is false', () => {
    const { getByText } = render(<UserInfo location="Sample Location" />);
    const locationText = getByText('Sample Location');

    expect(locationText).toBeInTheDocument();
  });
});
