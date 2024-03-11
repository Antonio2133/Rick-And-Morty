import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './services/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormSearch from './components/FormSearch.jsx'



function App() {

  const randomLocation = getRandomNumber(126)
  const [locationSelected, setLocationSelected] = useState(randomLocation)
  
  const url = `https://rickandmortyapi.com/api/location/${locationSelected || getRandomNumber(126)}`  
  const [ location, getLocation, hasError ] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [locationSelected])
  
  return (
    <div>
      <h1>Rick and Morty.</h1>
      <FormSearch setLocationSelected={setLocationSelected}/>
      {
        hasError
          ? <h2>🧰Oops!! You must provide an id from 1 to 126😢 </h2>
          : (
            <>
              <LocationInfo 
                location = {location}
              />
              <div>
              {
                location?.residents.map((urlResident) => {
                  return <ResidentCard
                    key={urlResident}
                    url={urlResident}
                  />
                })
              }
              </div>
            </>
          )
      }
    </div>  
  )
}

export default App
