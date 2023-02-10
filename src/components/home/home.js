import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStocks } from '../../redux/stocks/stocks';
import Header from '../header/header';
import StockTile from './block/block';
import Heading from './heading/heading';
import './home.scss';

function Home() {
  const { stocksdata, status } = useSelector((state) => state.stocks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!status) { dispatch(fetchStocks({ method: 'GET' })); }
  }, ([status, dispatch]));

  const navigator = (id) => {
    navigate(`/pairs/${id}`);
  };

  // const stocksdata = [
  //   [
  //     {
  //       symbol: 'BTCUSD',
  //       price: 21798.934,
  //       day_open: 21811.197,
  //       day_high: 21940.959,
  //       day_low: 21782.791,
  //       '52_week_high': 48086.836,
  //       '52_week_low': 15599.047,
  //       change_percent: -3.445619,
  //       previous_close_price: 21811.197,
  //       volume: 30394806272,
  //       market_cap: 420424417280,
  //       last_update: '2023-02-10T04:59:00.000000Z',
  //     },
  //   ],
  //   [
  //     {
  //       symbol: 'USDGBP',
  //       price: 0.82685,
  //       day_open: 0.82507,
  //       day_high: 0.82733,
  //       day_low: 0.82486,
  //       '52_week_high': 0.96348,
  //       '52_week_low': 0.7331,
  //       change_percent: 0.235179,
  //       previous_close_price: 0.82491,
  //       volume: 0,
  //       market_cap: 0,
  //       last_update: '2023-02-10T05:00:11.000000Z',
  //     },
  //   ],
  // ];

  return (
    <>
      <Header />

      <main>
        <Heading count={6} />

        <h3>PAIRS WITH USD AS BASE CURRENCY</h3>

        <section className="home-page">
          {
            stocksdata
            && stocksdata.map(([data], index) => (
              <StockTile key={data.symbol} navigator={navigator} data={data} index={index} />
            ))
          }
        </section>
      </main>
    </>
  );
}

export default Home;
