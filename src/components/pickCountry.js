import jpy from '../assets/JPY.svg';
import cad from '../assets/CAD.svg';
import chf from '../assets/CHF.svg';
import euro from '../assets/EURO.svg';
import gbp from '../assets/GBP.svg';
import zar from '../assets/ZAR.svg';

const country = (symbol) => {
  switch (symbol) {
    case 'USDJPY':
      return jpy;
    case 'USDCAD':
      return cad;
    case 'USDCHF':
      return chf;
    case 'EUROUSD':
      return euro;
    case 'USDGBP':
      return gbp;
    case 'USDZAR':
      return zar;
    default:
      return zar;
  }
};

export default country;
