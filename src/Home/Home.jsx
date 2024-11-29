import React from 'react'
import './index.css'
import Footer from './Footer'
import Header from './Header'
import { createFB } from '../Firebase/api'
import Card from '../Components/Card/Card'

function Home() {
  return (
    <div className='home'>
        <Header/>
        <Footer/>
    </div>
  )
}

export default Home