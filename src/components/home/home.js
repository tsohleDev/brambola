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
