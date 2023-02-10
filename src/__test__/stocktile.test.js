import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StockTile from '../components/home/block/block';

describe('StockTile component', () => {
  it('renders the symbol and price', () => {
    const index = 0;
    const data = { symbol: 'AAPL', price: '$100.00' };
    const { getByText } = render(<StockTile index={index} data={data} />);

    expect(getByText(data.symbol)).toBeInTheDocument();
    expect(getByText(data.price)).toBeInTheDocument();
  });

  it('navigates to the symbol page when the button is clicked', () => {
    const index = 0;
    const data = { symbol: 'AAPL', price: '$100.00' };
    const navigator = jest.fn();
    const { getByRole } = render(<StockTile index={index} data={data} navigator={navigator} />);

    fireEvent.click(getByRole('button'));
    expect(navigator).toHaveBeenCalledWith(data.symbol);
  });

  it('sets the correct background color class based on the index', () => {
    const data = { symbol: 'AAPL', price: '$100.00' };

    let { container } = render(<StockTile index={0} data={data} />);
    expect(container.firstChild).toHaveClass('odd');

    ({ container } = render(<StockTile index={1} data={data} />));
    expect(container.firstChild).toHaveClass('even');

    ({ container } = render(<StockTile index={3} data={data} />));
    expect(container.firstChild).toHaveClass('odd');

    ({ container } = render(<StockTile index={4} data={data} />));
    expect(container.firstChild).toHaveClass('odd');
  });
});
