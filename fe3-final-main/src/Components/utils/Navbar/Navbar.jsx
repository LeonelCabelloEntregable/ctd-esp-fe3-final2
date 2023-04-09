import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../global.context'
import './Navbar.css'


const Navbar = () => {
const {global, isDark, changeTheme} = useGlobalContext()
  return (
    <nav className={isDark() ? "nav-dark" : "nav"} >
      <NavLink className={'link'} to="/home">
        Home
      </NavLink>   
      <NavLink className={'link'} to="/contact">
        Contact
      </NavLink> 
      <NavLink className={'link'} to="/favs">
        Favs
      </NavLink> 
      <button onClick={changeTheme} className='button'>{global.theme}</button>
      </nav>
  )
}

export default Navbar