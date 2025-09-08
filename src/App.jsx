import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Wallet from './pages/Wallet'
import Footer from './components/Footer'
import WalletUnlock from './pages/WalletUnlock'
import LoadingGif from './pages/LoadingGif'
import Dashboard from './pages/Dashboard'

function Layout({ children }) {
  const location = useLocation();

  // Hide Header/Footer only on the * (loading) route
  const hideLayout = location.pathname === "/";

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/unlock' element={<WalletUnlock />} />
          <Route path='/home' element={<Home />} />
          <Route path='/loading' element={<LoadingGif />} />
          <Route path='/metaviewer' element ={<Dashboard/>}/>
          {/* Redirect all unknown paths to loading */}
          <Route path='*' element={<LoadingGif />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App
