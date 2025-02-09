import React from 'react'
import IdIcon from "../../../assets/img/id.svg?react";

function AnimalDetail({ name, species, sex, age, breed, weight, license, size, idealHome, livingWithChildren, livingWithDogs, livingWithCats, about, images }) {
  return (
    <div>
      <IdIcon/>
      <h2>{name}</h2>
      <img src={images[0]}></img>
      
    </div>
  )
}

export default AnimalDetail