import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Portfolio from './pages/Portfolio'
import SmoothScroll from './components/LenisScroll'

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/portfolio" element={<Portfolio />} />
          <Route path="/dashboard/profile" element={<Dashboard />} />
          <Route path="/dashboard/saved" element={<Dashboard />} />
          <Route path="/dashboard/approaches" element={<Dashboard />} />
          <Route path="/dashboard/settings" element={<Dashboard />} />
        </Routes>
      </SmoothScroll>
    </Router>
  )
}

export default App