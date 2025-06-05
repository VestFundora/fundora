import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SignUpStartup from './pages/SignUpStartup';
import SignUpInvestor from './pages/SignUpInvestor';
import Portfolio from './pages/Portfolio';
import StartupMarketplace from './pages/StartupMarketPlace';
import SmoothScroll from './components/LenisScroll';
import StartupDetails from './pages/StartupDetails';
import SavedStartups from './pages/SavedStartups';
import ApproachList from './pages/ApproachList';
import Profile from './pages/Profile';
import AboutUs from './pages/AboutUs';


function App() {
  return (
    <Router>
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/signup/startup" element={<SignUpStartup />} />
          <Route path="/signup/investor" element={<SignUpInvestor />} />
          <Route path="/dashboard/saved-startups" element={<SavedStartups />} />
          <Route path="/dashboard/approach-list" element={<ApproachList />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/portfolio" element={<Portfolio />} />
          <Route path="/marketplace" element={<StartupMarketplace />} />
          <Route path="/marketplace/:cin" element={<StartupDetails />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </SmoothScroll>
    </Router>
  );
}

export default App;