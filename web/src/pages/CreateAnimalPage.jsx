import React from 'react'
import PageLayout from '../components/layout/PageLayout'
import AnimalForm from '../components/animals/animal-form/AnimalForm'
import Header from '../components/header/Header'

function CreateAnimalPage() {
  return (
    <PageLayout title={"Add a new animal"}>
      <Header />
      <AnimalForm />
    </PageLayout>
  )
}

export default CreateAnimalPage