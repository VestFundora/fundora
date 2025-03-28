import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import SuccessStories from './components/SuccessStories'
import Popular from './components/Popular'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'

function App(){
  return(
    <BrowserRouter>
      <Header/>
      <Hero/>
      <Features/>
      <SuccessStories/>
      <Popular/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App