import { useNavigate } from 'react-router-dom';
import './header.scss';

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <header>
      <button type="button" onClick={() => { handleClick(); }}>
        <span className="material-symbols-outlined">
          arrow_back_ios_new
        </span>
      </button>

      <h2>Stocks</h2>

      <div>
        <span className="material-symbols-outlined">
          mic
        </span>
        <span className="material-symbols-outlined">
          settings
        </span>
      </div>
    </header>
  );
}

export default Header;
