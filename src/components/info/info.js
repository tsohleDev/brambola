import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../header/header';
import Title from './title/title';
import './info.scss';

function Info() {
  const { id } = useParams();
  const { stocksdata } = useSelector((state) => state.stocks);
  const stock = stocksdata.filter((item) => item[0].symbol === id);

  const {
    symbol, market_cap: marketCap,
    change_percent: changePercent,
    volume, last_update: lastUpdate,
    price, previous_close_price: previousClosePrice, day_low: dayLow, day_high: dayHigh, day_open: dayOpen, '52_week_high': yearHigh, '52_week_low': yearLow,
  } = stock[0][0];
  return (
    <>
      <Header />

      <main>
        <Title
          symbol={symbol}
          cap={marketCap}
          volume={volume}
          last={lastUpdate}
          spread={changePercent}
        />

        <section className="stock-info">
          <div className="current-price odd">
            <h2>PRICE</h2>

            { previousClosePrice - price < 0
              ? (
                <span className="trend-up material-symbols-outlined">
                  trending_up
                </span>
              )
              : (
                <span className="trend-down material-symbols-outlined">
                  trending_down
                </span>
              )}

            <div>
              <h4>
                PRICE:
                {price}
              </h4>
              <h5>
                PREVIOUS CLOSE:
                {previousClosePrice}
              </h5>
            </div>
          </div>

          <div className="intra-day even">
            <h2>Intra-day</h2>

            <div>
              <h4>
                OPEN:
                {dayOpen}
              </h4>

              <h4>
                LOW:
                {dayLow}
              </h4>

              <h4>
                HIGH:
                {dayHigh}
              </h4>
            </div>
          </div>

          <div className="intra-year odd">
            <h2>
              Intra-year
              <br />
              {' '}
              <pre>(52 Weeks)</pre>
              {' '}
            </h2>

            <div>
              <h4>
                LOW:
                {yearLow}
              </h4>
              <h4>
                HIGH:
                {yearHigh}
              </h4>
            </div>
          </div>

          <div className="volume even">
            <h2>VOLUME</h2>

            <div>
              <h4>
                VOLUME:
                {volume}
              </h4>
            </div>
          </div>

          <div className="market-cap odd">
            <h2>MARKET CAP</h2>

            <div>
              <h4>
                PIPS:
                {marketCap}
              </h4>
            </div>
          </div>

          <div className="last-update even">
            <h2>LAST UPDATE</h2>

            <div>
              <h4>
                TIME:
                {lastUpdate}
              </h4>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Info;
