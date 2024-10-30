import { render } from '@testing-library/react';
import InfoItem from './InfoItem';

describe('InfoItem Component', () => {
  const mockIcon = {
    component: <svg>Mock Icon</svg>,
    text: 'Mock Text',
    isLink: true,
  };

  // it('renders icon and text correctly', () => {
  //   const { getByText, getByRole } = render(<InfoItem icon={mockIcon} />);
  //   const iconElement = getByRole('svg');
  //   const textElement = getByText('Mock Text');
  //   expect(iconElement).toBeInTheDocument();
  //   expect(textElement).toBeInTheDocument();
  // });

  it('renders link when isLink is true', () => {
    const { getByRole } = render(<InfoItem icon={mockIcon} />);
    const linkElement = getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://Mock Text');
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noreferrer');
  });

  it('renders text when isLink is false', () => {
    const { getByText } = render(<InfoItem icon={{ component: <svg />, text: 'Mock Text' }} />);
    const textElement = getByText('Mock Text');
    expect(textElement).toBeInTheDocument();
  });
});
