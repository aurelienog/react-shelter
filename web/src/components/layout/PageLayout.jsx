import React from 'react'
import Header from '../header/Header'

function PageLayout({ title, children }) {
  return (
    <div className='w-[80%] mx-auto'>
      <Header title={title} />
      <div>
        {children}
      </div>
    </div>
  )
}

export default PageLayout;