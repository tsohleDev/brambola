import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Title from '../components/info/title/title';

afterEach(cleanup);

describe('Title component', () => {
  it('renders the title with the correct symbol', () => {
    const symbol = 'USD';
    const volume = '100';
    const spread = '2';
    const { getByText } = render(<Title symbol={symbol} volume={volume} spread={spread} />);

    expect(getByText(symbol)).toBeInTheDocument();
  });

  it('renders the volume correctly', () => {
    const symbol = 'USD';
    const volume = '100';
    const spread = '2';
    const { getByText } = render(<Title symbol={symbol} volume={volume} spread={spread} />);

    expect(getByText(`volume${volume}`)).toBeInTheDocument();
  });

  it('renders the spread correctly', () => {
    const symbol = 'USD';
    const volume = '100';
    const spread = '2';
    const { getByText } = render(<Title symbol={symbol} volume={volume} spread={spread} />);

    expect(getByText(`spread${spread}`)).toBeInTheDocument();
  });
});
