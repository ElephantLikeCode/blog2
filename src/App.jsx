import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Awards from './components/Awards'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Awards />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
