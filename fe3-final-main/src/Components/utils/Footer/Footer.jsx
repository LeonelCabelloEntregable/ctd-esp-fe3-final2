import React from 'react'
import './Footer.css'
import dh from '../../Imagenes/DH.png'
import dhblanco from '../../Imagenes/Logos_Digital_House_blanco.png'
import { useGlobalContext } from '../global.context'



const Footer = () => {
  const { isDark} = useGlobalContext()

  return (
    <footer className={isDark() ? "footer-dark" : "footer"} >
       <img 
             src={dh}
             alt="DH logo"
             width="70%"
             />
              <img 
             src={dhblanco}
             alt="DH logo"
             width="70%"
             />

    </footer>
  )
}

export default Footer
