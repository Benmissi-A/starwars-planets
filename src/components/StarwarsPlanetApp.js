
import { useEffect, useState } from "react"

import Planet from "./Planet"

const StarWarsPlanetApp = () => {
  const [planets , setPlanets] = useState([])
  const [planetsCount,setPlanetsCount]= useState(0)
  const [loading, setLoading] = useState(false)
  const [apiCall , setApiCall] = useState(0)
  const [error, setError] = useState('')
  const [count, setCount] = useState(1)
  useEffect(() => {
    setLoading(true)
    fetch(`https://swapi.dev/api/planets/?page=${count}`)
    .then((response) => {
      setApiCall(a => a + 1)
      if(!response.ok){
        throw new Error(
          `something wrong ${response.status}`
        )
      }
      return response.json()
    })
    .then((data) => {
      setPlanets(planets => planets.concat(data.results))
      setPlanetsCount(data.count)
    })
    .catch((error) => {
      setError(error.message)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [setApiCall,count,setPlanets,setPlanetsCount])
  
      console.log(count)
  const handleClick = (e) => {
    e.preventDefault()
    setCount(count+1)
  }
  
  return   <section className="container py-5">
            <h1 className="mb-5">Planètes dans l'univer Star Wars</h1>
            <div className="row">
              { planets.map(el => <Planet key={el.name} planet={el}/> )}
            </div>
            {loading && <p>Loading....</p>}
            {error && <p>{error}</p>} 
          {planets.length === planetsCount ? <p class="bg-dark text-white p-3">Nous avons listé toutes les planètes recensées.</p> : <button type="button" className="btn btn-dark" onClick={handleClick}>Suivantes</button>}
          </section>
}
export default StarWarsPlanetApp