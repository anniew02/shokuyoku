import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/home-page';
import RestaurantList from './components/pages/restaurant-list';

function App() {
  return (
    <div>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/restaurant-list" element={<RestaurantList/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
