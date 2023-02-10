import { PropTypes } from 'prop-types';
import country from '../../pickCountry';
import './block.scss';

function StockTile(props) {
  const { index, data, navigator } = props;
  const { symbol, price } = data;

  const isBackgroundOdd = (index === 0 || index === 3 || index === 4);
  const backgroundColorClass = () => (isBackgroundOdd ? 'odd' : 'even');

  return (
    <div className={`home-card ${backgroundColorClass()}`}>
      <img src={country(symbol)} alt="" />
      <button type="button" className="material-symbols-outlined" onClick={() => { navigator(symbol); }}>
        arrow_circle_right
      </button>

      <h2>{symbol}</h2>
      <pre>{price}</pre>
    </div>
  );
}

StockTile.defaultProps = {
  index: 0,
};

StockTile.propTypes = {
  index: PropTypes.number,
  data: PropTypes.shape({
    symbol: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  navigator: PropTypes.func.isRequired,
};

export default StockTile;
