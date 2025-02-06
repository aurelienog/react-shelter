import React from 'react'
import PageLayout from '../components/layout/PageLayout';
import AnimalsList from '../components/animals/animals-list/AnimalsList';
import AnimalsFilter from '../components/animals/animals-filters/AnimalsFilter';

function AnimalsPage() {
  return (
    <PageLayout title="Show this awesome animals">
      <div className='grid grid-cols-[1fr_4fr]'>
        <div className='border'>
          <AnimalsFilter />
        </div>
        <div>
          <AnimalsList />
        </div>
          
      </div>
      
    </PageLayout>
  )
}

export default AnimalsPage