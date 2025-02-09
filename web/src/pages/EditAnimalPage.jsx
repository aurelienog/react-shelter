import React from 'react'
import PageLayout from '../components/layout/PageLayout'
import AnimalEdit from '../components/animals/animal-edit/AnimalEdit'

function EditAnimalPage() {
  return (
<PageLayout title={"edit an animal"}>
      <Header />
      <AnimalEdit />
    </PageLayout>
  )
}

export default EditAnimalPage