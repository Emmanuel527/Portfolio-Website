import React from 'react'

import About from './components/about/about'
import Contact from './components/contacts/contact'
import Experience from './components/experience/experience'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Portfolio from './components/portfolio/portfolio'
import Services from './components/services/services'
import Testimonials from './components/testimonials/testimonials'


const App = () => {
  return (
    <>
    <About />
    <Contact />
    <Experience/>
    <Footer/>
    <Header/>
    <Nav/>
    <Portfolio/>
    <Services/>
    <Testimonials/>
    </>
  )
}

export default App