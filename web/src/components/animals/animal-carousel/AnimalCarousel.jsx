import React from 'react'

function AnimalCarousel({name, images}) {

  return (
    <>
      {images?.length > 0 && ( 
        <figure className='grid md:grid-cols-[2fr_1fr] md:grid-rows-2 md:gap-8 md:mx-auto md:h-[24rem] lg:h-[40rem]'>     
          <img src={images[0]} className='md:row-span-full rounded-lg object-cover h-full w-full' alt={`${name}'s photo`} />
          <img src={images[0]} className='md:h-full rounded-lg  object-cover h-full w-full' alt={`${name}'s photo`} />
          <img src={images[0]} className='md:h-full rounded-lg object-cover h-full w-full' alt={`${name}'s photo`}/>
        </figure>     
      )}
    </>
  )
}

export default AnimalCarousel