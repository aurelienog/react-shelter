import React from 'react'
import { NavLink } from 'react-router-dom';

function AnimalItem({animal}) {
  return (
    <NavLink to={`/animals/${animal.id}`}>
      <article className='border'>
        <img src={animal.img} alt="" />
        <h3>{animal.name}</h3>
        <p>{animal.sex}</p>
        <p>{animal.age}</p>
        <p>{animal.size}</p>
      </article>
    </NavLink>
    
  )
}

export default AnimalItem