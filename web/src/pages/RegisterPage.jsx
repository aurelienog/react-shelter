import React from 'react'
import PageLayout from '../components/layout/PageLayout'
import UsersForm from '../components/users/users-form/UsersForm'

function RegisterPage() {
  return (
    <PageLayout title={"registration"}>
      <UsersForm/>
    </PageLayout>
  )
}

export default RegisterPage