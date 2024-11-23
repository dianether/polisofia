import React from 'react'
import './index.css'
import Footer from './Footer'
import Header from './Header'
import { createFB } from '../Firebase/api'

function Home() {
  return (
    <div className='home'>
        <Header/>
        <div onClick={async() => { const guardar = await createFB(
          {
            id: 1,
            user: "@juan",
            text: "Este es un nuevo texto la primer publicación de prueba",
            imgs: [
              "https://picsum.photos/200",
              "https://picsum.photos/200",
              "https://picsum.photos/200"
            ]
          }, "publics"
        ); console.log(guardar)}} style={{padding: "80px"}}>Crear</div>
        <Footer/>
    </div>
  )
}

export default Home