import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import SuccessStories from './components/SuccessStories'
import Popular from './components/Popular'
import InnovatorsArena from './components/InnovatorsArena'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import SmoothScroll from './components/LenisScroll'

function App(){
  return(
    <BrowserRouter>
    <SmoothScroll>
      <Header/>
      <Hero/>
      <Features/>
      <SuccessStories/>
      <Popular/>
      <InnovatorsArena/>
      <Footer/>
      </SmoothScroll>
    </BrowserRouter>
  )
}

export default App