import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useGlobalContext } from   '../../Components/utils/global.context';
import './Detail.css'
import doctor from '../../Components/Imagenes/doctor.png'


const Detail = () => {
  const{ isDark} = useGlobalContext()
  const darkTheme= isDark()

  const [dentist, setDentist ] = useState(null)
  const {nameId} = useParams()      
  const URL = "https://jsonplaceholder.typicode.com/users/" + nameId
  useEffect(() => {
          axios.get(URL)
          .then(data => setDentist(data.data))
        }, [] )


  return (
    <div className= {darkTheme ?  "detail-dark detail" : "detail"}>
      
      {dentist ?
      <div>
        <h2>
          {dentist.name}
        </h2>
        <img 
             src={doctor}
             alt="Doctor"
             width="70%"
             />
             <p><a className={'link'} href={dentist.website}>{dentist.website}</a></p>
             <p>tel: {dentist.phone}</p>
             <p>Empresa: {dentist.company.name}</p>
             <p>Ciudad: {dentist.address.city}</p>
      </div> :

      <h2>Cargando...</h2>
      }
    </div>
  )
}

export default Detail