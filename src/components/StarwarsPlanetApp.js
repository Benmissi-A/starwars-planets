const { useEffect } = require("react")

const StarWarsPlanetApp = () => {
  const [planet , setPlanet] = useState('')
  useEffect(() => {
    fetch(`https://swapi.dev/api/planets`)
    .then((response) => {
      if(!response.ok){
        throw new Error(
          `something wrong ${response.status}`
        )
      }
      return response.json()
    })
    .then((data) => {
      console.log(data)
      setPlanet(data)
    })
  })
  return <></>
}
export default StarWarsPlanetApp