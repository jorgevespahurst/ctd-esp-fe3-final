import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import Card from '../Components/Card'

const URL_API = "https://jsonplaceholder.typicode.com/users"

const Home = () => {
  const { theme } = useContext(ContextGlobal);
  const [dentists, setDentists] = useState([])

  const fetchDentistsApi = () => {
    fetch(URL_API)
      .then(response => response.json())
      .then(data => setDentists(data))
  }

  useEffect(() => {
    fetchDentistsApi()
  }, [])


  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map((dentist)=>{
          return <Card dentist={dentist} key={dentist.id} />})}
      </div>
    </main>
  )
}

export default Home