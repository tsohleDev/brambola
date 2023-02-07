import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Info from './components/info/info';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Info />} />
      <Route path="*" element={<h1> Not found </h1>} />
    </Routes>
  );
}

export default App;
