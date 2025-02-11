import React from 'react'
import IdIcon from "../../../assets/img/id.svg?react";

function AnimalDetail({ name, species, sex, age, breed, weight, license, size, idealHome, livingWithChildren, livingWithDogs, livingWithCats, about }) {

  return (
    <div>
      <p>{about}</p>
      <div className='grid grid-cols-[2fr_1fr] auto-rows-fr gap-8'>
        <ul className='grid grid-cols-2 gap-4'>
          <li className='grid grid-cols-[1fr_14fr] gap-4 items-center rounded-lg bg-white/80 px-4 py-2'>
            <IdIcon className=""/>
            <p className='flex flex-col'>
              <span className='font-bold'>Sex </span>{sex}
            </p>
          </li>
          <li className='flex flex-col rounded-lg bg-white/80 p-2'><span className='font-bold'>Age </span>{age} years old </li>
          <li className='flex flex-col rounded-lg bg-white/80 p-2'><span className='font-bold'>Size </span>{size} </li>
          <li className='flex flex-col rounded-lg bg-white/80 p-2'><span className='font-bold'>Weight </span>{weight}</li>
          <li className='flex flex-col rounded-lg bg-white/80 p-2'><span className='font-bold'>Breed </span>{breed} </li>
          <li className='flex flex-col rounded-lg bg-white/80 p-2'><span className='font-bold'>Ideal home </span>{idealHome}</li>
          <li className='flex flex-col rounded-lg bg-white/80 p-2'><span className='font-bold'>Living with children </span>{livingWithChildren}</li>
          <li className='flex flex-col rounded-lg bg-white/80 p-2'><span className='font-bold'>Living with dogs </span>{livingWithDogs}</li>
          <li className='flex flex-col rounded-lg bg-white/80 p-2'><span className='font-bold'>Living with cats </span>{livingWithCats}</li>
        </ul>
        <div className=' bg-white/80 rounded-lg p-8 flex flex-col gap-8 justify-items-center items-center'>
          <p className='text-center'>Apply to adopt</p>
          <button className='inline-block w-[80%] px-2 py-2 border rounded-lg'>Start your application</button>
          <button className='inline-block w-[80%] px-2 py-2 border rounded-lg'>Add to favourites</button>
        </div>
      </div>
    </div>
  )
}

export default AnimalDetail