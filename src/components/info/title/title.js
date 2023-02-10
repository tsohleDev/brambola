import { PropTypes } from 'prop-types';
import country from '../../pickCountry';

function Title(props) {
  const { symbol, volume, spread } = props;

  return (
    <section className="heading">
      <img src={country(symbol)} alt="USD" />

      <div>
        <h1>{symbol}</h1>
        <pre>
          {' '}
          volume
          {volume}
        </pre>
        <pre>
          {' '}
          spread
          {spread}
        </pre>
      </div>
    </section>
  );
}

Title.propTypes = {
  data: PropTypes.shape({
    symbol: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  symbol: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired,
  spread: PropTypes.number.isRequired,
};

export default Title;
