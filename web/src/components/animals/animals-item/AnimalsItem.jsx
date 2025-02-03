import React from 'react'

function AnimalItem({animal}) {
  return (
    <article className=''>
      <img src={animal.img} alt="" />
      <h3>{animal.name}</h3>
      <p>{animal.sex}</p>
      <p>{animal.age}</p>
      <p>{animal.size}</p>
    </article>
  )
}

export default AnimalItem