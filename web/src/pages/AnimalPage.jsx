import React, { useEffect, useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import AnimalDetail from '../components/animals/animal-detail/AnimalDetail'
import { useParams } from 'react-router-dom';
import animalsService from '../services/animals'

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
    <PageLayout title={"Learn about me"}>
      <AnimalDetail { ...animal }/>
    </PageLayout>
  )
}

export default AnimalPage