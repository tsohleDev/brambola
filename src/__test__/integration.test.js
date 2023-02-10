import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { render } from '@testing-library/react';
import Info from '../components/info/info';

const stocksdata = [
  [
    {
      symbol: 'AAPL',
      market_cap: '$1.22T',
      change_percent: '1.75%',
      volume: '26,000,000',
      last_update: '2022-02-10T19:34:00.000Z',
      price: '121.93',
      previous_close_price: '120.12',
      day_low: '121.47',
      day_high: '122.19',
      day_open: '122.01',
      '52_week_high': '155.26',
      '52_week_low': '90.30',
    },
  ],
];

const mockStore = createStore(() => ({
  stocks: {
    stocksdata,
  },
}));

describe('Info component', () => {
  it('should render without crashing', () => {
    const wrapper = render(
      <Provider store={mockStore}>
        <Router>
          <Routes>
            <Route path="/:id" element={<Info />} />
          </Routes>
        </Router>
      </Provider>,
    );

    expect(wrapper.container).toMatchSnapshot();
  });
});
