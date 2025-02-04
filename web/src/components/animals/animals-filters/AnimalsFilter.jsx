import React, { useEffect, useState } from 'react';
import animalsService from '../../../services/animals';
import { NavLink, useNavigate, createSearchParams } from 'react-router-dom';


function AnimalsFilter() {
  const [animals, setAnimals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    animalsService.list()
    .then((animals) => setAnimals(animals))
    .catch((error) => console.error(error));
  },[])



  const [filters, setFilters] = useState({
    sex: '',
    age: Number,
    size: ''
  });


  return (
    <div>
      
    </div>
  )
}

export default AnimalsFilter