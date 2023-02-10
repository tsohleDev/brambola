import { PropTypes } from 'prop-types';
import USD from '../../../assets/USD.svg';
import './heading.scss';

function Heading(props) {
  const { count } = props;
  return (
    <section className="heading">
      <img src={USD} alt="USD" />

      <div>
        <h1>USD FOREIGN EXCHANGE PRICES</h1>
        <pre>
          {count}
          {' '}
          pairs
        </pre>
      </div>
    </section>
  );
}

Heading.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Heading;
