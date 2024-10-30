import { render } from '@testing-library/react';
import RepoInfo from './RepoInfo';

describe('RepoInfoInfo Component', () => {
  it('renders correct links when isLink is true', () => {
    const { getByRole } = render(<RepoInfo blog="https://example.com" />);
    const blogLink = getByRole('link', { name: 'https://example.com' });

    expect(blogLink).toBeInTheDocument();
    expect(blogLink).toHaveAttribute('href', 'https://example.com');
    expect(blogLink).toHaveAttribute('target', '_blank');
    expect(blogLink).toHaveAttribute('rel', 'noreferrer');
  });

  it('renders correct text when isLink is false', () => {
    const { getByText } = render(<RepoInfo location="Sample Location" />);
    const locationText = getByText('Sample Location');

    expect(locationText).toBeInTheDocument();
  });
});
