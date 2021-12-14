import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Funktioner from './components/pages/Funktioner';
import Om from './components/pages/Om';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/funktioner" element={<Funktioner/>}/>
        <Route path="/om" element={<Om/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
