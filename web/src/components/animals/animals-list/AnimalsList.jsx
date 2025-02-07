import React, { useEffect, useState } from 'react';
import animalsService from '../../../services/animals';
import { useSearchParams } from 'react-router-dom';
import AnimalItem from '../animals-item/AnimalsItem';

const filters = [
    "species",
    "sex",
    "size",
    "weigth",
    "license",
    "idealHome",
    "livingWithChildren",
    "livingWithDogs",
    "livingWithCats"
  ];

function AnimalsList() {
  const [searchParams] = useSearchParams();
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const query = {};
    filters.forEach((f) => {
      const filter = searchParams.get(`${f}`)
      filter != null? query[f] = filter : null;
      
    });

    animalsService.list(query)
      .then((animals) => setAnimals(animals))
      .catch(error => console.error())
  }, [searchParams]);

  return (
    <section className='grid grid-cols-3 m-8 gap-6'>
      {animals.map((animal) => <AnimalItem key={animal.id} animal={animal}/>)}
    </section>
  )
}

export default AnimalsList