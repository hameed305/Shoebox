import React from 'react'
import Footer from "./Components/Footer/footer"
import Header from "./Components/Header/header"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'



import "./App.css"
import "./assets/styles/Bootstrap/bootstrap-icons.min.css"

function App() {


  return (
    <Router>
      <div className="container mx-auto">

        <a href="https://www.whatsapp.com" className='fixed right-5 bottom-5 z-50 '>
          <span className='bi-whatsapp text-4xl p-4 rounded-full flex items-center justify-center w-[70px] h-[70px] text-[var(--black-color)]'></span>
        </a>

        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  )
}

export default App