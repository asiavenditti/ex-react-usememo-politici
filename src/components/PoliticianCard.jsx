import React from 'react'

const PoliticianCard = React.memo(({ politician }) => {
    console.log('Rendering card:', politician.name)

    return (
        <div className="col-md-6 col-lg-4">
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
    )
})

export default PoliticianCard