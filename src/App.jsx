import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Home } from './components/page/homejsx/Home'

import './App.css'
import { HeaderHome } from './components/layouts/HeaderHome/HeaderHome'
import { Routes,Route } from 'react-router-dom'
import {AboutUs} from './components/page/AboutUs/AboutUs'
import {ContactUs} from './components/page/ContactUs/ContactUs'

function App() {
  return (
    <>
      <HeaderHome/>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/AboutUs' element = {<AboutUs />} />
        <Route path = '/ContactUs' element = {<ContactUs />} />
        {/* <Route path = '/*' element = {<NotFound />} /> */}
      </Routes>
    </>
  )
}
export default App
