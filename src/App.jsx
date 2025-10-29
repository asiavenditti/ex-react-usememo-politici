import { useEffect, useMemo, useState } from 'react'

import './index.css'
import PoliticiansCard from './components/PoliticianCard'

function App() {

  const [politicians, setPoliticians] = useState([])
  const [searchPolitician, setSearchPolitician] = useState('')

  useEffect(() => {

    fetch(`http://localhost:3333/politicians`)
      .then(res => res.json())
      .then(post => {
        setPoliticians(post)

      })

  }, [])


  const filteredPoliticians = useMemo(() => {
    return politicians.filter(politician => {
      const nameMatch = politician.name.toLowerCase().includes(searchPolitician.toLowerCase())
      const biographyMatch = politician.biography.toLowerCase().includes(searchPolitician.toLowerCase())
      return nameMatch || biographyMatch

    })
  }, [politicians, searchPolitician])





  return (
    <>
      <div className="container my-5 m-0-auto">
        <h1 className="text-center mb-4">Lista Politici</h1>
        <div className="input d-flex justify-content-center">
          <input type="text"
            className='my-2'
            value={searchPolitician}
            onChange={(e) => setSearchPolitician(e.target.value)} />
        </div>
        <div className="row g-4">
          {filteredPoliticians.map(politician => (
            <PoliticiansCard key={politician.id} politician={politician} />
          ))}
        </div>
      </div>
    </>
  )
}


export default App
