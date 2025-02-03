import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import UsersLogin from '../components/users/users-login/UsersLogin';

function LoginPage() {
  return (
    <PageLayout title={"Login to your account"}>
      <div className='mt-14'>
        <UsersLogin/>
      </div>
      
    </PageLayout>
  )
}

export default LoginPage