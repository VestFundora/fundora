import Header from './components/Header'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import { BrowserRouter } from 'react-router-dom'
function App(){

  return(
    <>
    <BrowserRouter>
      <Header/>
      <Hero/>
      <Hero2/>
    </BrowserRouter>
    </>
  )

}
export default App