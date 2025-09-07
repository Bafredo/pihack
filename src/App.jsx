import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Wallet from './pages/Wallet'
import Footer from './components/Footer'
import WalletUnlock from './pages/WalletUnlock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/wallet' element={<Wallet/>}/>
        
        <Route path='/unlock' element={<WalletUnlock/>}/>
        <Route path='*' element={<Home/>}/>


    </Routes>
    <Footer/>
    </BrowserRouter>
    
  )
}

export default App
