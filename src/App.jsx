import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SignUpStartup from './pages/SignUpStartup';
import SignUpInvestor from './pages/SignUpInvestor';
import Portfolio from './pages/Portfolio';
import SmoothScroll from './components/LenisScroll';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/signup/startup" element={<SignUpStartup />} />
          <Route path="/signup/investor" element={<SignUpInvestor />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard/portfolio" element={<Portfolio />} />

        </Routes>
      </SmoothScroll>
    </Router> 
    
  );
}

export default App;