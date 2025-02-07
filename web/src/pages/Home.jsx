import React from 'react'
import PageLayout from '../components/layout/PageLayout'
import dogImg from '../assets/img/dog-home.jpg'

function Home() {
  return (
    <PageLayout title="Find your new Best Friend">
      <div>
        <img src={dogImg} alt="" className='absolute top-0 left-0 -z-50'/>
      </div>
    </PageLayout>
    
  )
}

export default Home; 