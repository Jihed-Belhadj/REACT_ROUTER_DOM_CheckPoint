import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'


function Details({Tab}) {
    const {id}=useParams()
    const found= Tab.find(el=>el.id==id)
    const navigate=useNavigate()
    return (
        <div>
             <div className='details'>
            <h1>{found.title}</h1>
            <h2>{found.description}</h2>
            <h2>trailer</h2>
            <iframe
          width="560"
          height="315"
          src={found.trailer}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
            <div className='buttons'>
            <Button variant="primary" onClick={()=>navigate('/home')}>Home</Button>
            <Button variant="primary" onClick={()=>navigate(-1)}>Go Back</Button>
            </div>

        </div>
    )
}

export default Details
