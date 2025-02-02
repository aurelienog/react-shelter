import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import UsersLogin from '../components/users/users-login/UsersLogin';

function LoginPage() {
  return (
    <PageLayout title={"Login to your account"}>
      <UsersLogin/>
    </PageLayout>
  )
}

export default LoginPage