import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import React from 'react'

const Layout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className='root'>
              <Header />
        <div className='root-container'>
            <div className='wrapper'>
            {children}
            </div>
        </div>
    </div>
  )
}

export default Layout