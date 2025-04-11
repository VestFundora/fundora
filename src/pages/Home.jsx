import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import SuccessStories from '../components/SuccessStories'
import Popular from '../components/Popular'
import InnovatorsArena from '../components/InnovatorsArena'
import SmoothScroll from '../components/LenisScroll'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <SmoothScroll>
      <Header />
      <Hero />
      <Features />
      <SuccessStories />
      <Popular />
      <InnovatorsArena />
      <Footer />
      </SmoothScroll>
    </>
  )
}

export default Home