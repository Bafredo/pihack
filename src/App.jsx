import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Wallet from './pages/Wallet'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/wallet' element={<Wallet/>}/>
        <Route path='*' element={<Home/>}/>
        <Route path='/footer' element={<Footer/>}/>

    </Routes>
    </BrowserRouter>
    
  )
}

export default App
