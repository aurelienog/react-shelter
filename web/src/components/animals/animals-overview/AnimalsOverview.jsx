import React, { useEffect, useState } from 'react'
import animalsService from '../../../services/animals';
import AnimalsList from '../animals-list/AnimalsList';
import AnimalsFilter from '../animals-list/AnimalsFilter';


function AnimalsOverview() {
  const [animals, setAnimals] = useState([]);
  const [animalsFiltered, setAnimalsFiltered] = useState([]);

  const handleFilters = (animals) => {
    setAnimalsFiltered(animals);
  }

  useEffect(() => {
    animalsService.list()
      .then((animals) => setAnimals(animals))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <section>
        <AnimalsList animalsFiltered={animalsFiltered}/>
      </section>
      <section>
        <AnimalsFilter handleFilters={handleFilters}/>
      </section>
    </div>
  )
}

export default AnimalsOverview