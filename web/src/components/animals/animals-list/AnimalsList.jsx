import React, { useEffect, useState } from 'react';
import animalsService from '../../../services/animals';
import { useSearchParams } from 'react-router-dom';

function AnimalsList() {
  const [searchParams] = useSearchParams();
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const query = {};
    const age = searchParams.get('age')
    if (age) query.age = age;

    animalsService.list(query)
      .then((animals) => setAnimals)
      .catch(error => console.error())
  }, [searchParams]);

  const animalsBySpecies = animals.reduce((animalsBySpecies, animal) => {
    if(!animalsBySpecies[`${animal.species}`]) {
      animalsBySpecies[`${animal.species}`] = [];
    }

    animalsBySpecies[`${animal.species}`].push(animal);
    return animalsBySpecies;
  }, {})

  return (
    <div>
      {}
    </div>
  )
}

export default AnimalsList