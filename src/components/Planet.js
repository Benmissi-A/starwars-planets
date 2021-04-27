const Planet = ({planet}) => {
  return <>
    <div key = {planet.name+planet.population} className="col-md-6  col-lg-4 col-xl-3 mb-4">
      <article className="bg-warning p-3" >
        <h2 className="h5">{planet.name}</h2>
        <p className="mb-0"><b>population</b></p>
        <p className="mb-0">{planet.population}</p>
        <p className="mb-0"><b>climat</b></p>
        <p className="mb-0">{planet.climate}</p>
      </article>
    </div>
  </>
}
export default Planet