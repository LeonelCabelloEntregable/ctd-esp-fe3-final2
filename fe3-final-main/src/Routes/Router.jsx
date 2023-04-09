import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Contact from './Contact/Contact'
import Detail from './dentist/Detail'
import Favs from './Favs/Favs'
import Home from './Home/Home'

const Router = () => {
  return (
    <div> 
    <Routes>
    <Route path='/home' element={<Home/>} />
     <Route path='/' element={<Home/>}/>
     <Route path= '/detail/:nameId' element={<Detail/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/favs' element={<Favs/>}/>
   </Routes>
   </div>
  )
}

export default Router