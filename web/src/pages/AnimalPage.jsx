import React, { useEffect, useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import AnimalDetail from '../components/animals/animal-detail/AnimalDetail'
import { useParams } from 'react-router-dom';
import animalsService from '../services/animals'
import AnimalCarousel from '../components/animals/animal-carousel/AnimalCarousel';

function AnimalPage() {
  const [animal, setAnimal] = useState();
  const {id} = useParams();

  useEffect(() => {
    const getDetail = async () => {
      try {
        const detail = await animalsService.detail(id)
        setAnimal(detail)
      } catch (error) {
        console.log(error)
      } 
    }
    getDetail()
  }, [id])

  return (
    <PageLayout title={`I'm ${animal?.name}`}>
      <div className='p-8 bg-accent/40 mx-auto'>
        <AnimalCarousel { ...animal} />
      </div>
      <div className='p-8 mx-auto'>
        <AnimalDetail { ...animal }/>
      </div>
      
      
    </PageLayout>
  )
}

export default AnimalPage