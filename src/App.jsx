import Header from './components/Header'
import Hero from './components/Hero'
import { BrowserRouter } from 'react-router-dom'
function App(){

  return(
    <>
    <BrowserRouter>
      <Header/>
      <Hero/>
    </BrowserRouter>
    </>
  )

}
export default App