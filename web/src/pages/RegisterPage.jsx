import React from 'react'
import PageLayout from '../components/layout/PageLayout'
import UsersForm from '../components/users/users-form/UsersForm'

function RegisterPage() {
  return (
    <PageLayout title={"Registration"}>
      <div className='my-14'>
        <UsersForm />
      </div>
    </PageLayout>
  )
}

export default RegisterPage