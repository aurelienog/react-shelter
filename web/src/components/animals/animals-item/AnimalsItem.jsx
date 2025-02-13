import React from 'react'
import { NavLink } from 'react-router-dom';
import AgeIcon from "../../../assets/img/age.svg?react";
import SizeIcon from "../../../assets/img/size.svg?react";
import WeightIcon from "../../../assets/img/weight.svg?react";

const sizeTag = {
  small: "SM",
  medium: "M",
  large: "L",
  giant: "XL",
};

function AnimalItem({ name, id, images, sex, age, size, weight}) {
  const colorSex = sex === "male" ? "bg-blue-600/50" : "bg-pink-600";
  const displaySize = sizeTag[size] || size;
  

  return (
    <NavLink to={`/animals/${id}`}>
      <article className={`relative border ${colorSex} rounded-lg`}>
        <p className=' uppercase font-bold p-1 text-center'>{name}</p>
        <figure>
          <img src={images[0]} alt={`Imagen de ${name}`} className='absolute circle-clip-transparent b-rounded-lg'/>
          <img src={images[0]} aria-hidden className='circle-clip b-rounded-lg'/>
        </figure>
        <div className='flex justify-start'>

          <div className='rounded-lg flex flex-col items-center  bg-white/35 p-2 m-2'>
            <p>{age}</p>
            <AgeIcon className="w-8 h-8"/>
          </div>
          {displaySize && <div className='rounded-lg flex flex-col items-center  bg-white/35 p-2 m-2'>
            <p>{displaySize}</p>
            <SizeIcon className="w-8 h-8"/>
          </div>
          }

          {weight && <div className='rounded-lg flex flex-col items-center  bg-white/35 p-2 m-2'>
            <p>{weight}kg</p>
            <WeightIcon className="w-8 h-8"/>
          </div>
          }
          
        </div>
        
      </article>
    </NavLink>
    
  )
}

export default AnimalItem