import { useEffect, useState } from 'react'

import './index.css'

function App() {

  const [politicians, setPoliticians] = useState([])

  useEffect(() => {

    fetch(`http://localhost:3333/politicians`)
      .then(res => res.json())
      .then(post => {
        setPoliticians(post)
        console.log('Politicians post', post)
      })

  }, [])




  return (
    <>
      <div className="container my-5">
        <h1 className="text-center mb-4">Lista Politici</h1>

        <div className="row g-4">
          {politicians.map(politician => (
            <div key={politician.id} className="col-md-6 col-lg-4">
              <div className="card h-100">
                <img
                  src={politician.image}
                  alt={politician.name}
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{politician.name}</h5>
                  <h6 className="card-subtitle mb-2 text-primary">{politician.position}</h6>
                  <p className="card-text">{politician.biography}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}


export default App
