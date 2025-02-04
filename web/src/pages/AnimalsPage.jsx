import React from 'react'
import PageLayout from '../components/layout/PageLayout'
import AnimalsList from '../components/animals/animals-list/AnimalsList'
import AnimalsFilter from '../components/animals/animals-filter/AnimalsFilter'

function AnimalsPage() {
  return (
    <PageLayout title="Show this awesome animals">
      <AnimalsFilter />
      <AnimalsList />
    </PageLayout>
  )
}

export default AnimalsPage