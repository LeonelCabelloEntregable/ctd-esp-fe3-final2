import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'
import Card from '../../Components/Card/Card'
import { useGlobalContext } from '../../Components/utils/global.context'

const Home = () => {
  const [users, setUsers ] = useState([])
  const {global} = useGlobalContext()
  console.log(global)
        useEffect(() => {
          const URL = "https://jsonplaceholder.typicode.com/users"
          axios.get(URL)
          .then(data => setUsers(data.data))
        }, [] )
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      {
              users.length > 0 ?
              users.map( user => (
              <Card key={user.id} dentist={user}/>
              )):
                <h1>Cargando</h1>
            }
      </div>
    </main>
  )
}

export default Home