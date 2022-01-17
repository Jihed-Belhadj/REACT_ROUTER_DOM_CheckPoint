import React from 'react'
import Card from './Cards'

function MoviesList({Tab,MovieSch,Rating,setTab}) {
    return (
        <div>
           <section className='movies-section'>
            {Tab.filter(el=>el.title.toLowerCase().includes(MovieSch.toLowerCase())&&(el.rate>Rating)).map((el,i)=> <Card el={el} key={el.id}  setTab={setTab} Tab={Tab} />)}
            </section> 
        </div>
    )
}

export default MoviesList
